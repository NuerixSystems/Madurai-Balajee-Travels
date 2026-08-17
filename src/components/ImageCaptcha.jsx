import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

// Characters chosen to avoid visually-confusing pairs (0/O, 1/I/l).
const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CAPTCHA_LENGTH = 5;

function randomCode(length = CAPTCHA_LENGTH) {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)];
  }
  return code;
}

function drawCaptcha(canvas, code) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  // Background
  ctx.clearRect(0, 0, width, height);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#f0ede8");
  bg.addColorStop(1, "#e8e2da");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Noise lines
  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = `rgba(44, 62, 80, ${0.15 + Math.random() * 0.2})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Noise dots
  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = `rgba(93, 109, 116, ${0.15 + Math.random() * 0.25})`;
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  // Characters
  const colors = ["#c0392b", "#a93226", "#2c3e50", "#e74c3c"];
  const charWidth = width / code.length;
  for (let i = 0; i < code.length; i++) {
    const x = charWidth * i + charWidth / 2;
    const y = height / 2;
    const angle = (Math.random() - 0.5) * 0.5; // slight rotation
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.font = `700 ${Math.floor(height * 0.55)}px Poppins, sans-serif`;
    ctx.fillStyle = colors[i % colors.length];
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(code[i], 0, 0);
    ctx.restore();
  }
}

/**
 * Simple self-contained image captcha. Draws a distorted code onto a
 * <canvas>; the user must retype it. Exposes `verify(input)` and
 * `refresh()` via ref so a parent form can validate on submit.
 */
const ImageCaptcha = forwardRef(function ImageCaptcha(props, ref) {
  const canvasRef = useRef(null);
  const [code, setCode] = useState("");

  const generate = () => {
    const next = randomCode();
    setCode(next);
    return next;
  };

  useEffect(() => {
    const initial = generate();
    if (canvasRef.current) drawCaptcha(canvasRef.current, initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (canvasRef.current && code) drawCaptcha(canvasRef.current, code);
  }, [code]);

  useImperativeHandle(ref, () => ({
    verify: (input) => (input || "").trim().toUpperCase() === code,
    refresh: () => generate(),
  }));

  return (
    <div className="captcha-box">
      <canvas ref={canvasRef} width={160} height={54} className="captcha-canvas" aria-hidden="true" />
      <button
        type="button"
        className="captcha-refresh"
        aria-label="Get a new captcha code"
        onClick={() => generate()}
      >
        <i className="fas fa-rotate"></i>
      </button>
    </div>
  );
});

export default ImageCaptcha;
