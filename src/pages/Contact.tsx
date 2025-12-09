import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".animate-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsLoading(true); // START LOADER

    emailjs
      .sendForm(
        "service_8tf0qat",
        "template_dzmhibg",
        form,
        "h6OQ3fmgdyZCbnwPw"
      )
      .then(() => {
        alert(
          "Your enquiry has been submitted successfully. Our team will get back to you soon. Have a musical day! 🎶"
        );
        form.reset();
        setIsLoading(false); // STOP LOADER
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send. Please try again.");
        setIsLoading(false); // STOP LOADER
      });
  };

  return (
    <div className="pt-5 ssma-home-bg position-relative">
      {/* FLOATING NOTES */}
      {[...Array(12)].map((_, i) => {
        const symbols = ["♪", "♫", "𝄞"]; // multiple musical icons
        const randomSymbol =
          symbols[Math.floor(Math.random() * symbols.length)];

        return (
          <div
            key={i}
            className="floating-note"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 120}%`,
              fontSize: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.05 + Math.random() * 0.2,
            }}
          >
            {randomSymbol}
          </div>
        );
      })}

      {/* HERO BANNER 
      <div className="container-fluid p-0 animate-up">
        <div className="position-relative">
          <img
            src="/images/aboutus.jpg"
            alt="Contact Banner"
            className="img-fluid w-100 hero-banner"
          />
        </div>
      </div>*/}

      {/* PAGE TITLE */}
      <div className="container text-center my-5 animate-up">
        <h2 className="text-center mb-4 ssma-active animate-up">Contact Us</h2>
      </div>

      {/* CONTACT SECTION */}
      <section style={{ position: "relative", overflow: "visible" }}>
        {/* BACKGROUND MAP DESKTOP */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block"
          style={{ zIndex: 1, paddingTop: "22rem" }}
        >
          <iframe
            src="https://www.google.com/maps?q=Valar+Nagar,+Uthangudi,+Madurai&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "brightness(65%)" }}
            loading="lazy"
          ></iframe>
        </div>

        {/* FOREGROUND FORM + DETAILS */}
        <div
          className="container position-relative animate-up"
          style={{ zIndex: 2, paddingBottom: "40px" }}
        >
          <div className="row bg-dark shadow-lg p-4 contact-card flex-column flex-lg-row">
            {/* RIGHT FORM FIRST ON MOBILE */}
            <div className="col-lg-8 text-white mb-4 mb-lg-0 order-1 order-lg-2">
              <h6 className="fw-bold text-warning">Book a Free Demo</h6>
              <h3 className="fw-bold ssma-active mb-3">Talk to Us</h3>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile*"
                      required
                    />
                  </div>
                </div>

                {/* COURSES CHECKBOX */}
                <label className="fw-bold mb-2">Courses Looking For</label>
                <div className="d-flex flex-wrap gap-3 mb-3">
                  {[
                    "Carnatic Vocal",
                    "Film Song (Tamil)",
                    "Devotional Song",
                    "Violin",
                    "Keyboard",
                    "Guitar",
                    "Veena",
                    "Mrudhangam",
                    "Music Theory",
                    "Voice Training",
                  ].map((course, index) => (
                    <label
                      key={index}
                      className="d-flex align-items-center gap-1 course-radio text-white"
                    >
                      <input type="checkbox" name="course" value={course} />{" "}
                      {course}
                    </label>
                  ))}
                </div>

                <textarea
                  name="message"
                  rows={4}
                  className="form-control mb-3"
                  placeholder="Your Message"
                ></textarea>

                <button
                  className="btn btn-warning fw-bold mt-2"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message{" "}
                      <i className="fa-solid fa-paper-plane ms-2"></i>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* LEFT CONTACT DETAILS */}
            <div className="col-lg-4 contact-info text-white order-2 order-lg-1 pt-3 pt-lg-0">
              <p className="text-white">
                <span style={{ fontSize: "0.9rem" }}>
                  We’re here to guide you on your musical journey
                </span>
                <br />
                <span
                  style={{
                    fontSize: "2rem",
                    color: "#ffd966",
                    fontWeight: "700",
                  }}
                >
                  Reach out anytime
                </span>
              </p>

              <div className="d-flex align-items-start mb-4">
                <i className="fa-solid fa-location-dot fa-2x me-3 ssma-active"></i>
                <div>
                  <h5 className="fw-bold mb-1">Location</h5>
                  <p className="mb-0">
                    Valar Nagar Main Road, Valar Nagar,
                    <br /> Uthangudi, Madurai – 625107, Tamil Nadu.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="fa-solid fa-phone fa-2x me-3 ssma-active"></i>
                <div>
                  <h5 className="fw-bold mb-1">Call Us</h5>
                  <a
                    href="tel:+919894778518"
                    className="text-white fw-bold text-decoration-none"
                  >
                    +91 98947 78518
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="fa-solid fa-envelope fa-2x me-3 ssma-active"></i>
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <a
                    href="mailto:musicschoolss@gmail.com"
                    className="text-white text-decoration-none"
                  >
                    musicschoolss@gmail.com
                  </a>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="d-flex gap-3 mt-3 social-icons">
                <a href="https://wa.me/919894778518" target="_blank">
                  <i
                    className="fa-brands fa-whatsapp fa-2x"
                    style={{ color: "#25D366" }}
                  ></i>
                </a>
                <a href="https://instagram.com/ssmusic_academy" target="_blank">
                  <i
                    className="fa-brands fa-instagram fa-2x"
                    style={{ color: "#E1306C" }}
                  ></i>
                </a>
                <a href="https://youtube.com" target="_blank">
                  <i
                    className="fa-brands fa-youtube fa-2x"
                    style={{ color: "#FF0000" }}
                  ></i>
                </a>

                {/* MAP ICON ONLY MOBILE */}
                <a
                  href="https://www.google.com/maps?q=Valar+Nagar,+Uthangudi,+Madurai"
                  target="_blank"
                  className="d-lg-none"
                >
                  <i
                    className="fa-solid fa-map-location-dot fa-2x"
                    style={{ color: "#FFD700" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
