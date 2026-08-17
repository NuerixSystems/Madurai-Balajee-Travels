import { useRef, useState } from "react";
import ImageCaptcha from "./ImageCaptcha.jsx";

const OWNER_EMAIL = "maduraibalajetourstravels@gmail.com";
const OWNER_PHONE_WA = "919791135678";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", travelDate: "", message: "", website: "" });
  const [captchaInput, setCaptchaInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear that field's error as soon as the user starts fixing it
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.phone.trim()) errors.phone = "Please enter your phone number.";
    if (!form.message.trim()) errors.message = "Please enter your trip details.";
    if (!captchaRef.current?.verify(captchaInput)) {
      errors.captcha = "The code you entered doesn't match. Please try again.";
    }
    setFieldErrors(errors);
    return errors;
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      const onlyCaptchaFailed = Object.keys(errors).length === 1 && errors.captcha;
      setErrorMsg(onlyCaptchaFailed ? "" : "Please fill in all required fields.");
      setCaptchaInput("");
      captchaRef.current?.refresh();
      return;
    }

    setStatus("sending");

    try {
      const body = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        travelDate: form.travelDate,
        message: form.message,
        website: form.website, // honeypot, always left blank by real users
      });

      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", travelDate: "", message: "", website: "" });
        setCaptchaInput("");
        captchaRef.current?.refresh();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try WhatsApp or call instead.");
        setCaptchaInput("");
        captchaRef.current?.refresh();
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please try WhatsApp or call instead.");
      setCaptchaInput("");
      captchaRef.current?.refresh();
    }
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    if (fieldErrors.captcha) {
      setFieldErrors((prev) => ({ ...prev, captcha: "" }));
    }
  };

  const bookNowHref = `https://wa.me/${OWNER_PHONE_WA}?text=${encodeURIComponent(
    "Hi Madurai Balaje, I want to book a bus. Here are my details:\nName:\nDate of travel:\nRoute:"
  )}`;

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-eyebrow">Get in touch</span>
        <h2 className="section-title"><i className="fas fa-headset"></i> Contact Us</h2>
        <p className="section-desc">Ready to book? Reach out through any of these channels</p>
      </div>

      <div className="contact-booknow">
        <a href={bookNowHref} target="_blank" rel="noreferrer" className="btn btn-primary">
          <i className="fas fa-bus"></i> Book Now on WhatsApp
        </a>
      </div>

      <div className="contact-layout">
        <div className="contact-details-card">
          <h4>Company Details</h4>
          <ul className="contact-details-list">
            <li>
              <i className="fas fa-building"></i>
              <div>
                <strong>Chennai Head Office</strong>
                <span>G14 &amp; G15, Sriji Majestic Complex, Koyambedu, Chennai – 600107</span>
              </div>
            </li>
            <li>
              <i className="fas fa-building"></i>
              <div>
                <strong>Madurai Head Office</strong>
                <span>Corp-145 DPP Chavadi, Madurai – 625016</span>
              </div>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Phone</strong>
                <span>+91 97911 35678</span>
              </div>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <span>{OWNER_EMAIL}</span>
              </div>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <div>
                <strong>Availability</strong>
                <span>Open 24/7 for bookings and enquiries</span>
              </div>
            </li>
          </ul>

          <div className="contact-quick-actions">
            <a
              href={`mailto:${OWNER_EMAIL}`}
              className="contact-quick-btn quick-email"
              aria-label="Email us"
            >
              <span className="contact-quick-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span>Email Us</span>
            </a>
            <a
              href={bookNowHref}
              target="_blank"
              rel="noreferrer"
              className="contact-quick-btn quick-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <span className="contact-quick-icon">
                <i className="fab fa-whatsapp"></i>
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSendMail} noValidate>
          <h4>Send us your booking details</h4>
          <p className="form-sub">Fill this in and we'll receive it by email straight away — no email app needed.</p>

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Karthik"
            className={fieldErrors.name ? "input-invalid" : ""}
          />
          {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 98765 43210"
            className={fieldErrors.phone ? "input-invalid" : ""}
          />
          {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}

          <label htmlFor="travelDate">Travel Date</label>
          <input id="travelDate" name="travelDate" type="date" value={form.travelDate} onChange={handleChange} />

          <label htmlFor="message">Trip Details</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Route, number of passengers, AC or Non-AC, occasion..."
            className={fieldErrors.message ? "input-invalid" : ""}
          />
          {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}

          {/* Honeypot field — hidden from real visitors, catches spam bots */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
            aria-hidden="true"
          />

          <label htmlFor="captchaInput">Enter the code shown below</label>
          <div className="captcha-row">
            <ImageCaptcha ref={captchaRef} />
            <input
              id="captchaInput"
              name="captchaInput"
              type="text"
              autoComplete="off"
              value={captchaInput}
              onChange={handleCaptchaChange}
              placeholder="Type code"
              maxLength={5}
              className={`captcha-input${fieldErrors.captcha ? " input-invalid" : ""}`}
            />
          </div>
          {fieldErrors.captcha && <span className="field-error">{fieldErrors.captcha}</span>}

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            <i className="fas fa-envelope"></i> {status === "sending" ? "Sending..." : "Send via Email"}
          </button>

          {status === "success" && (
            <p className="form-status form-status-success">
              <i className="fas fa-check-circle"></i> Thanks! Your enquiry has been sent — we'll contact you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status-error">
              <i className="fas fa-triangle-exclamation"></i> {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
