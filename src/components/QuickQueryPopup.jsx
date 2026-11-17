
import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/QuickQueryPopup.css";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || ""
).replace(/\/+$/, "");

export default function QuickQueryPopup() {
  const [isOpen, setIsOpen] = useState(true);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    website: "",
  });

  const [captcha, setCaptcha] = useState(null);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaLoading, setCaptchaLoading] = useState(false);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const closeButtonRef = useRef(null);

  // Load server-generated CAPTCHA
  const refreshCaptcha = useCallback(async () => {
    setCaptchaLoading(true);

    try {
      const response = await fetch(
        `https://crm-dkc2.onrender.com/api/quick-query/captcha`
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.detail || "Unable to load verification code."
        );
      }

      setCaptcha(result);
      setCaptchaInput("");

    } catch (error) {
      setCaptcha(null);
      setMessage(error.message || "Unable to load CAPTCHA.");
      setStatus("error");

    } finally {
      setCaptchaLoading(false);
    }
  }, []);

  // Load CAPTCHA when popup opens
  useEffect(() => {
    if (!isOpen) return;

    refreshCaptcha();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, refreshCaptcha]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // Submit Quick Query to FastAPI
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");

    if (!captcha?.challenge_id) {
      setStatus("error");
      setMessage("Please refresh the verification code.");
      return;
    }

    if (!captchaInput.trim()) {
      setStatus("error");
      setMessage("Please enter the verification code.");
      return;
    }

    setStatus("sending");

    try {
      const payload = {
        name: form.name.trim(),
        mobile: form.phone.trim(),
        email: form.email.trim(),
        requirement: form.requirement.trim(),
        captcha_answer: captchaInput.trim(),
        captcha_challenge_id: captcha.challenge_id,
      };

      const response = await fetch(
        `${API_BASE_URL}/api/quick-query`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.detail ||
          result.message ||
          "Unable to submit your enquiry."
        );
      }

      setStatus(
        result.email_sent ? "success" : "warning"
      );

      setMessage(
        result.email_sent
          ? "Thank you! We've received your enquiry and will contact you shortly."
          : "Your enquiry was saved, but email notification failed. Please contact us if urgent."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        requirement: "",
        website: "",
      });

    } catch (error) {
      setStatus("error");

      setMessage(
        error.message ||
        "Could not reach the server. Please try again."
      );

    } finally {
      setCaptchaInput("");
      setCaptcha(null);

      await refreshCaptcha();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="quick-query-launcher"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <i
            className="fas fa-comment-dots"
            aria-hidden="true"
          ></i>
          Quick Enquiry
        </button>
      )}

      {isOpen && (
        <div
          className="quick-query-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePopup();
            }
          }}
        >
          <section
            className="quick-query-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-query-title"
          >
            <button
              ref={closeButtonRef}
              className="quick-query-close"
              type="button"
              aria-label="Close quick enquiry form"
              onClick={closePopup}
            >
              <i
                className="fas fa-times"
                aria-hidden="true"
              ></i>
            </button>

            <div className="quick-query-intro">
              <p className="quick-query-brand">
                Madurai Balaje Tours &amp; Travels
              </p>

              <h2>
                VOLVO | MINI | SLEEPER | AC | NON AC BUS HIRE SERVICES
              </h2>

              <img
                src="/Images/hero.jpg"
                alt="Madurai Balaje tour bus"
              />

              <p className="quick-query-tagline">
                COMFORTABLE JOURNEYS. TRUSTED SERVICE.
              </p>
            </div>

            <form
              className="quick-query-form"
              onSubmit={handleSubmit}
            >
              <h2 id="quick-query-title">
                Quick Query Form
              </h2>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                aria-label="Name"
                autoComplete="name"
                maxLength={120}
                required
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                aria-label="Mobile Number"
                autoComplete="tel"
                inputMode="tel"
                maxLength={20}
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                maxLength={254}
                required
              />

              <textarea
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                placeholder="Requirement"
                aria-label="Requirement"
                rows={4}
                maxLength={3000}
                required
              />

              <div className="quick-query-verification">

                <div className="quick-query-captcha-image">
                  {captcha?.image ? (
                    <img
                      src={captcha.image}
                      alt="Verification code"
                    />
                  ) : (
                    <span>
                      {captchaLoading
                        ? "Loading..."
                        : "Code unavailable"}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="quick-query-refresh"
                  onClick={refreshCaptcha}
                  disabled={captchaLoading || status === "sending"}
                  aria-label="Refresh verification code"
                >
                  <i className="fas fa-sync-alt"></i>
                </button>

                <input
                  type="text"
                  value={captchaInput}
                  onChange={(event) =>
                    setCaptchaInput(event.target.value)
                  }
                  placeholder="Verification code"
                  aria-label="Verification code"
                  autoComplete="off"
                  maxLength={5}
                  required
                />

              </div>

              {message && (
                <p
                  className={`quick-query-status ${status}`}
                  role="status"
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={
                  status === "sending" ||
                  captchaLoading ||
                  !captcha
                }
              >
                {status === "sending"
                  ? "Sending..."
                  : "Submit"}
              </button>

            </form>
          </section>
        </div>
      )}
    </>
  );
}
