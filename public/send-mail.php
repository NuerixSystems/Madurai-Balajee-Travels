
<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=UTF-8');

require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

/**
 * JSON response helper
 */
function jsonResponse(
    int $status,
    array $data
): void {
    http_response_code($status);

    echo json_encode(
        $data,
        JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE
    );

    exit;
}

/**
 * Read environment configuration
 */
function envValue(string $key, string $default = ''): string
{
    $value = getenv($key);

    return $value !== false ? trim($value) : $default;
}

/**
 * Only accept POST requests
 */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(405, [
        'success' => false,
        'message' => 'Invalid request method.',
    ]);
}

/**
 * Read request data.
 * Supports FormData, URL-encoded forms and JSON.
 */
$data = $_POST;

if (empty($data)) {
    $rawInput = file_get_contents('php://input');

    if ($rawInput !== false && $rawInput !== '') {
        $jsonData = json_decode($rawInput, true);

        if (is_array($jsonData)) {
            $data = $jsonData;
        } else {
            parse_str($rawInput, $parsedData);

            if (is_array($parsedData)) {
                $data = $parsedData;
            }
        }
    }
}

/**
 * Honeypot spam protection
 */
if (!empty($data['website'])) {
    jsonResponse(200, [
        'success' => true,
        'message' => 'Your enquiry has been received.',
    ]);
}

/**
 * Sanitize form fields
 */
$name = trim(strip_tags((string) ($data['name'] ?? '')));

$phone = trim(strip_tags((string) ($data['phone'] ?? '')));

$email = trim((string) ($data['email'] ?? ''));

$travelDate = trim(
    strip_tags((string) ($data['travelDate'] ?? ''))
);

$message = trim(
    strip_tags((string) ($data['message'] ?? ''))
);

/**
 * Validate required fields
 */
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

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}

if (!empty($errors)) {
    jsonResponse(400, [
        'success' => false,
        'message' => 'Please fill in all required fields.',
        'fields' => $errors,
    ]);
}

/**
 * SMTP configuration
 *
 * Configure these environment variables in your hosting environment.
 */
$smtpHost = envValue(
    'MADURAI_SMTP_HOST',
    'smtp.gmail.com'
);

$smtpPort = (int) envValue(
    'MADURAI_SMTP_PORT',
    '587'
);

$smtpUsername = envValue('MADURAI_SMTP_USER');

$smtpPassword = envValue('MADURAI_SMTP_PASSWORD');

$sendTo = envValue(
    'COMPANY_ADMIN_EMAIL',
    $smtpUsername
);

$fromEmail = envValue(
    'MADURAI_SMTP_FROM',
    $smtpUsername
);

$fromName = envValue(
    'MADURAI_SMTP_FROM_NAME',
    'Madurai Balaje Tours & Travels'
);

if (
    $smtpUsername === '' ||
    $smtpPassword === '' ||
    $sendTo === '' ||
    !filter_var($smtpUsername, FILTER_VALIDATE_EMAIL) ||
    !filter_var($sendTo, FILTER_VALIDATE_EMAIL) ||
    !filter_var($fromEmail, FILTER_VALIDATE_EMAIL)
) {
    error_log('Madurai Balaje SMTP configuration is incomplete.');

    jsonResponse(500, [
        'success' => false,
        'message' => 'Email service is temporarily unavailable.',
    ]);
}

/**
 * Prepare email
 */
$subject = 'Bus Booking Enquiry - ' . $name;

$bodyText = "New booking enquiry from the website:\n\n";

$bodyText .= "Name: {$name}\n";
$bodyText .= "Phone: {$phone}\n";

if ($email !== '') {
    $bodyText .= "Email: {$email}\n";
}

if ($travelDate !== '') {
    $bodyText .= "Travel date: {$travelDate}\n";
}

$bodyText .= "\nTrip details:\n";
$bodyText .= $message . "\n";

/**
 * HTML email
 */
$bodyHtml = '
<html>
<body>
    <h3>New booking enquiry from the website</h3>

    <table cellpadding="8" cellspacing="0" border="1">
        <tr>
            <td><strong>Name</strong></td>
            <td>' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '</td>
        </tr>

        <tr>
            <td><strong>Phone</strong></td>
            <td>' . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . '</td>
        </tr>

        ' . (
            $email !== ''
                ? '<tr>
                    <td><strong>Email</strong></td>
                    <td>' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</td>
                   </tr>'
                : ''
        ) . '

        ' . (
            $travelDate !== ''
                ? '<tr>
                    <td><strong>Travel Date</strong></td>
                    <td>' . htmlspecialchars($travelDate, ENT_QUOTES, 'UTF-8') . '</td>
                   </tr>'
                : ''
        ) . '
    </table>

    <h3>Trip Details</h3>

    <p>' . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . '</p>

</body>
</html>
';

/**
 * Send email using PHPMailer
 */
$mail = new PHPMailer(true);

try {

    // SMTP settings
    $mail->isSMTP();

    $mail->Host = $smtpHost;

    $mail->SMTPAuth = true;

    $mail->Username = $smtpUsername;

    $mail->Password = $smtpPassword;

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->Port = $smtpPort;

    $mail->CharSet = 'UTF-8';

    // Sender
    $mail->setFrom(
        $fromEmail,
        $fromName
    );

    // Recipient
    $mail->addAddress($sendTo);

    // Reply to customer if valid
    if ($email !== '') {
        $mail->addReplyTo($email, $name);
    } else {
        $mail->addReplyTo($smtpUsername, $name);
    }

    // Email content
    $mail->isHTML(true);

    $mail->Subject = $subject;

    $mail->Body = $bodyHtml;

    $mail->AltBody = $bodyText;

    // Send
    $mail->send();

    jsonResponse(200, [
        'success' => true,
        'message' => 'Your enquiry has been received.',
        'email_sent' => true,
    ]);

} catch (Exception $e) {

    error_log(
        'Madurai Balaje email error: ' . $mail->ErrorInfo
    );

    jsonResponse(500, [
        'success' => false,
        'message' => 'Could not send email right now. Please try WhatsApp or call instead.',
        'email_sent' => false,
    ]);

} catch (Throwable $e) {

    error_log(
        'Madurai Balaje server error: ' . $e->getMessage()
    );

    jsonResponse(500, [
        'success' => false,
        'message' => 'An unexpected server error occurred.',
        'email_sent' => false,
    ]);
}
