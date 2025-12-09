import { useState } from "react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-icons" onClick={() => setOpen(!open)}>
      <div className={`icon-menu ${open ? "open" : ""}`}>
        <a href="#top">
          <i
            className="fa-solid fa-arrow-up menu-icon"
            style={{ color: "#ffffff" }}
          ></i>
        </a>

        <a
          href="https://wa.me/9894778518?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20music%20classes%20at%20SS%20Music%20Academy."
          target="_blank"
        >
          <i
            className="fa-brands fa-whatsapp menu-icon"
            style={{ color: "#25D366" }}
          ></i>
        </a>

        <a href="https://instagram.com/ssmusic_academy" target="_blank">
          <i
            className="fa-brands fa-instagram menu-icon"
            style={{ color: "#E1306C" }}
          ></i>
        </a>

        <a href="https://youtube.com/@ssmusic" target="_blank">
          <i
            className="fa-brands fa-youtube menu-icon"
            style={{ color: "#FF0000" }}
          ></i>
        </a>
      </div>

      <i
        className={`fa-solid fa-circle-plus main-btn ${open ? "rotate" : ""}`}
        style={{ color: "#ffd966" }}
      ></i>
    </div>
  );
}
