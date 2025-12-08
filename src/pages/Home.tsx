import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // state for floating icon menu
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        threshold: 0.15, // % visible before animation starts
      }
    );

    const elements = document.querySelectorAll(".animate-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="pt-5 ssma-home-bg">
      <div className="pt-5">
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

        {/* HERO BANNER */}
        <div className="container-fluid p-0">
          <div className="position-relative">
            <img
              src="/images/Home.png"
              alt="banner"
              className="img-fluid w-100 hero-banner"
            />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="container my-5 animate-up">
          <h2 className="text-center mb-4 ssma-active ssma-heading animate-up">
            Welcome to SS Music Academy
          </h2>

          <p
            className="lead text-center"
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            Music is a beautiful way for relieving your stress and revitalizing
            your energy for a refreshing day. Music cultivates discipline and
            many more essential life skills indirectly through the journey.
            There’re many reasons to take up this art form and you’re at the
            right platform to learn this art form in a right way.
          </p>

          <p
            className="lead text-center mt-3"
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            In SSMA, we walk with you into the world of music filled with a lot
            of insightful learning experiences.
          </p>
        </div>
        {/* WHY MUSIC & WHY SSMA SECTION - RIBBON STYLE */}
        <div className="container my-5 animate-up">
          <div className="row g-4 justify-content-center">
            {/* WHY MUSIC */}
            <div className="col-md-6 animate-up">
              <h2 className="fw-bold ssma-active mb-4 underline-title text-center">
                Why Music?
              </h2>

              <div className="ssma-ribbon-list">
                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-music ssma-ribbon-icon"></i>
                  <span>
                    Music builds focus, discipline & patience over time.
                  </span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-brain ssma-ribbon-icon"></i>
                  <span>Improves memory, listening skills & creativity.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-face-smile ssma-ribbon-icon"></i>
                  <span>Brings joy, calmness & confidence to all ages.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-people-roof ssma-ribbon-icon"></i>
                  <span>Teaches culture, beauty & emotional expression.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-child-reaching ssma-ribbon-icon"></i>
                  <span>Helps parents watch their child grow beautifully.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-heart ssma-ribbon-icon"></i>
                  <span>
                    Music becomes a lifelong friend, not just a skill.
                  </span>
                </div>
              </div>
            </div>

            {/* WHY SSMA */}
            <div className="col-md-6 animate-up">
              <h2 className="fw-bold ssma-active mb-4 underline-title text-center">
                Why SSMA?
              </h2>

              <div className="ssma-ribbon-list">
                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-lightbulb ssma-ribbon-icon"></i>
                  <span>
                    Sangeetham’um Science’um — blend of art & science.
                  </span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-layer-group ssma-ribbon-icon"></i>
                  <span>Strong fundamentals — No shortcuts.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-stairs ssma-ribbon-icon"></i>
                  <span>Slow, steady growth — no pressure.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-people-group ssma-ribbon-icon"></i>
                  <span>Every student treated with care & respect.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-hand-holding-heart ssma-ribbon-icon"></i>
                  <span>Child-friendly, artistic & scientific approach.</span>
                </div>

                <div className="ssma-ribbon-item ribbon-gray">
                  <i className="fa-solid fa-clock ssma-ribbon-icon"></i>
                  <span>Flexible timings & regular updates.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR OFFERINGS – CAROUSEL */}
        <div className="container my-5 animate-up">
          <h2 className="text-center fw-bold ssma-active mb-4">
            Our Offerings
          </h2>

          {/* data array */}
          {(() => {
            const offerings = [
              {
                icon: "fa-microphone-lines",
                title: "Carnatic Vocal (Beginner to Advanced)",
                desc: "Master your voice with a perfect blend of tradition and technique (B & Pvt.)",
              },
              {
                icon: "fa-book-open",
                title: "Carnatic Music Theory",
                desc: "Understand the 'Why' behind every note you sing or play (Pvt.)",
              },
              {
                icon: "fa-keyboard",
                title: "Keyboard",
                desc: "Explore melodies and harmonies with scientific precision and artistic grace (B & Pvt.)",
              },
              {
                icon: "fa-guitar",
                title: "Guitar",
                desc: "Learn to express soulful music through strings, from basics to advanced styles (B & Pvt.)",
              },
              {
                icon: "fa-violin",
                title: "Violin",
                desc: "Shape your tone and bowing with guided, structured training (B & Pvt.)",
              },
              {
                icon: "fa-music",
                title: "Veena",
                desc: "Discover the depth and divinity of this ancient string instrument in a personalized way (Pvt.)",
              },
              {
                icon: "fa-drum",
                title: "Mrudhangam",
                desc: "Build solid rhythm foundations with a focus on clarity and technique (Pvt.)",
              },
              {
                icon: "fa-user",
                title: "Customized Private Sessions",
                desc: "Personalized training based on student goals",
              },
              {
                icon: "fa-house",
                title: "Home Tuition",
                desc: "Learn from home with expert tutors",
              },
            ];

            // chunk into groups of 4
            const slides: (typeof offerings)[] = [];
            for (let i = 0; i < offerings.length; i += 4) {
              slides.push(offerings.slice(i, i + 4));
            }

            return (
              <div
                id="offerCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner">
                  {slides.map((group, slideIndex) => (
                    <div
                      className={`carousel-item ${
                        slideIndex === 0 ? "active" : ""
                      }`}
                      key={slideIndex}
                    >
                      <div className="row justify-content-center">
                        {group.map((card, cardIndex) => (
                          <div
                            className="col-12 col-sm-6 col-md-3"
                            key={cardIndex}
                          >
                            <div
                              className="offer-card h-100"
                              onClick={() => navigate("/services")}
                              style={{ cursor: "pointer" }}
                            >
                              <i
                                className={`fa-solid ${card.icon} offer-icon`}
                              ></i>
                              <h5 className="offer-title">{card.title}</h5>
                              <p className="offer-desc">{card.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#offerCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#offerCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            );
          })()}
        </div>

        {/* MISSION & VISION */}
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-5 text-center animate-up">
              <img
                src="/images/VisionMission.png"
                alt="Music Image"
                className="img-fluid rounded"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-7 animate-up">
              {/* VISION */}
              <div className="ssma-info-item mb-4">
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-eye ssma-icon"></i>
                  <h3 className="ssma-active">Our Vision</h3>
                </div>
                <p className="mt-2">
                  SS Music Academy has been started with the vision to provide
                  “the knowledge of Music along with the answer for many
                  familiar WHY questions in music” this learning opportunity is
                  what many are looking for. We use science as a tool to
                  understand this art form. SSMA believes that “Understanding an
                  Art is Science; Application of Science in an artistic way is
                  the Art”
                </p>
              </div>

              {/* MISSION */}
              <div className="ssma-info-item">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/images/mission.png"
                    alt="Music Image"
                    className="mission"
                  />
                  <h3 className="ssma-active">Our Mission</h3>
                </div>
                <p className="mt-2">
                  At SSMA, we aim to provide the right reasoning behind
                  everything that a student learns and let them see how to the
                  music unfolds itself in the process of it. This is where we
                  stand apart from the other music learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING MENU ICON */}
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
            className={`fa-solid fa-circle-plus main-btn ${
              open ? "rotate" : ""
            }`}
            style={{ color: "#ffd966" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
