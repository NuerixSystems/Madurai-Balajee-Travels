<?php
/**
 * send-mail.php
 * Receives the booking form via POST (fetch/AJAX from the React site)
 * and emails it straight to the business using PHPMailer over SMTP
 * (Gmail SMTP) — far more reliable than PHP's built-in mail(), which
 * often lands in spam or gets silently blocked by the host.
 *
 * SETUP (one-time):
 * 1. Turn on 2-Step Verification on the Gmail account that will SEND
 *    the mail: https://myaccount.google.com/security
 * 2. Create an "App Password": https://myaccount.google.com/apppasswords
 *    (choose app: Mail, device: Other -> name it "Website")
 *    Google gives you a 16-character password like: abcd efgh ijkl mnop
 * 3. Paste that value into SMTP_PASSWORD below (remove the spaces).
 * 4. Set SMTP_USERNAME to the Gmail address you generated the app
 *    password for (it can be the same as SEND_TO, or a different
 *    Gmail account used only for sending).
 */

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

// ---- SMTP CONFIG — fill these in ----
const SMTP_HOST     = 'smtp.gmail.com';
const SMTP_PORT     = 587;
const SMTP_USERNAME = 'maduraibalajetourstravels@gmail.com'; // Gmail address that sends the mail
const SMTP_PASSWORD = 'PASTE_YOUR_16_CHAR_APP_PASSWORD_HERE'; // Gmail App Password, no spaces
const SEND_TO       = 'maduraibalajetourstravels@gmail.com'; // where enquiries should land

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Simple honeypot spam trap — a real visitor never fills this hidden field
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

// ---- Read & sanitize fields ----
$name       = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$phone      = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$travelDate = isset($_POST['travelDate']) ? trim(strip_tags($_POST['travelDate'])) : '';
$message    = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

$errors = [];
if ($name === '') {
    $errors[] = 'name';
}
if ($phone === '') {
    $errors[] = 'phone';
}
if ($message === '') {
    $errors[] = 'message';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields (name, phone, and trip details).',
        'fields'  => $errors,
    ]);
    exit;
}

$subject = 'Bus Booking Enquiry - ' . $name;

$bodyText  = "New booking enquiry from the website:\n\n";
$bodyText .= "Name: $name\n";
$bodyText .= "Phone: $phone\n";
if ($travelDate !== '') {
    $bodyText .= "Travel date: $travelDate\n";
}
$bodyText .= "\nTrip details:\n" . ($message !== '' ? $message : "I'd like to book a bus.") . "\n";

$bodyHtml = '<p><strong>New booking enquiry from the website:</strong></p><ul>'
    . '<li><strong>Name:</strong> ' . htmlspecialchars($name) . '</li>'
    . '<li><strong>Phone:</strong> ' . htmlspecialchars($phone) . '</li>'
    . ($travelDate !== '' ? '<li><strong>Travel date:</strong> ' . htmlspecialchars($travelDate) . '</li>' : '')
    . '</ul><p><strong>Trip details:</strong><br>' . nl2br(htmlspecialchars($message !== '' ? $message : "I'd like to book a bus.")) . '</p>';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USERNAME;
    $mail->Password   = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = SMTP_PORT;

    // Sender / recipient
    $mail->setFrom(SMTP_USERNAME, 'Madurai Balaje Website');
    $mail->addAddress(SEND_TO);
    $mail->addReplyTo(SMTP_USERNAME, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Could not send email right now. Please try WhatsApp or call instead.',
    ]);
}
