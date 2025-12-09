import { useEffect } from "react";

export default function About() {
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

    const elements = document.querySelectorAll(".animate-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-5 ssma-home-bg">
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

      {/* TOP TEAM SHOWCASE BANNER */}
      <div className="container my-5 animate-up">
        <div className="row align-items-center justify-content-center showcase-wrapper">
          {/* LEFT - LOGO */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <img
              src="/images/aboutus.png"
              alt="SSMA Logo"
              className="img-fluid showcase-logo"
            />
          </div>

          {/* RIGHT - TEAM IMAGES */}
          <div className="col-md-8 d-flex flex-column align-items-end justify-content-center showcase-team-group">
            {/* Top Single */}
            <img
              src="/images/Viveck.png"
              alt="Founder"
              className="showcase-team-img mb-3 me-2"
              onClick={() =>
                document
                  .getElementById("ViveckSection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />

            {/* Bottom Two */}
            <div className="d-flex gap-4 justify-content-end w-100">
              <img
                src="/images/Karthick.png"
                alt="Manager"
                className="showcase-team-img"
                onClick={() =>
                  document
                    .getElementById("KarthickSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />

              <img
                src="/images/Kabilan.png"
                alt="Faculty"
                className="showcase-team-img"
                onClick={() =>
                  document
                    .getElementById("KabilanSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container my-5 animate-up">
        <div className="row align-items-center g-5">
          <div className="col-md-7">
            <h3 className="fw-bold ssma-active mb-3">Who We Are</h3>

            <p className="lead">
              SS stands for{" "}
              <strong>
                <em>Sangeetham’um Science’um</em>
              </strong>
              , which is the chief motto of our Academy. SS Music Academy helps
              students understand the scientific principles behind their voice,
              musical tone formation, and artistic expression — not just how to
              sing, but why each sound matters.
            </p>

            <p className="lead">
              We believe there is a difference between{" "}
              <strong>learning to sing a song</strong>
              and <strong>learning music itself</strong>. Students are
              encouraged to ask questions, challenge assumptions, and understand
              the “why” behind every swara instead of blindly imitating. The
              academy balances classical discipline with a friendly and
              supportive atmosphere, where mistakes are treated as stepping
              stones to growth.
            </p>
          </div>

          {/* ABOUT TEXT */}
          <div className="col-md-5 text-white">
            <img
              src="/images/aboutus.png"
              alt="About"
              className="img-fluid rounded shadow-lg ssma-img"
            />
          </div>
          <div className="col-md-12 text-white" style={{ marginTop: "0px" }}>
            <p className="lead">
              Teaching at SSMA is slow, steady, and mindful — progress is shaped
              to match the student’s individuality rather than rushed for
              performance sake. We believe that learning music enhances focus,
              emotional intelligence, memory, and confidence, especially for
              children. SSMA places equal value on traditional Carnatic
              knowledge and modern scientific understanding of sound, voice, and
              psychology, creating a space where{" "}
              <strong>tradition meets innovation</strong>.
            </p>
          </div>
        </div>
      </div>
      {/* TEAM SECTION */}
      <div className="container my-5 animate-up">
        <h2 className="ssma-heading1 ssma-active text-center mb-5">
          Meet Our Team
        </h2>

        {/* Founder - Image Right / Text Left */}
        <div
          id="ViveckSection"
          className="row align-items-center mb-5 animate-up"
        >
          <div className="col-md-4 text-center">
            <img
              src="/images/Viveck.png"
              alt="Founder"
              className="img-fluid shadow-lg team-img-Founder"
            />
          </div>

          <div className="col-md-8 text-white">
            <h3 className="fw-bold ssma-active">Viveck MJ – Founder</h3>

            <ul className="ssma-points">
              <li>
                A Gold Medalist in Mechanical Engineering and Academic Topper in
                Master's in Carnatic Vocal Music, he is the Founder and Vocal
                Guru of SS Music Academy. Recognized among India's Top 100
                Singers by Indian Film House and a district-level awardee in
                Carnatic vocals.
              </li>

              <li>
                He has performed at prestigious venues including Madurai
                Meenakshi Amman Temple, Azhagar Temple, Sivakasi, and
                Tirunelveli. With academic excellence, stage experience &
                scientific exploration, he shaped SSMA where tradition meets
                innovation under the vision of
                <strong>" Sangeetham'um Science'um "</strong>.
              </li>

              <li>
                He believes every voice has a story, and his job is to help
                students discover theirs with clarity and confidence. Students
                appreciate his patience, humour, and ability to make complex
                concepts sound simple.
              </li>

              <li>
                He sees music not just as performance, but as a tool for
                self-awareness, emotional balance, and inner strength. His
                curiosity drives him to constantly learn, experiment, and evolve
                his methods.
              </li>

              <li>
                He values tradition, but isn’t restricted by it — he encourages
                students to respect the grammar while exploring their own
                artistic personality.
              </li>
            </ul>
          </div>
        </div>

        {/* Manager - Image Left / Text Right */}
        <div
          id="KarthickSection"
          className="row align-items-center mb-5 flex-md-row-reverse animate-up"
        >
          <div className="col-md-4 text-center">
            <img
              src="/images/Karthick.png"
              alt="Manager"
              className="img-fluid shadow-lg team-img"
            />
          </div>

          <div className="col-md-8 text-white">
            <h3 className="fw-bold ssma-active">
              Karthick Kumar J – Admin & Marketing Manager
            </h3>

            <ul className="ssma-points mt-3">
              <li>
                He oversees enquiries, admissions, and communication, ensuring
                smooth coordination between tutors, students, and parents.
              </li>

              <li>
                With years of experience in administration and public relations,
                Karthick ensures SSMA’s operations run efficiently.
              </li>

              <li>
                His creative marketing inputs have contributed to SSMA’s
                outreach and brand growth across Madurai and online platforms.
              </li>

              <li>
                His friendly attitude and patience create a positive environment
                where people feel comfortable asking questions.
              </li>
            </ul>
          </div>
        </div>

        {/* Faculty - Image Right / Text Left */}
        <div
          id="KabilanSection"
          className="row align-items-center mb-5 animate-up"
        >
          <div className="col-md-4 text-center">
            <img
              src="/images/Kabilan.png"
              alt="Faculty"
              className="img-fluid shadow-lg team-img"
            />
          </div>

          <div className="col-md-8 text-white">
            <h3 className="fw-bold ssma-active">Kabilan J – Faculty</h3>

            <ul className="ssma-points mt-3">
              <li>
                Tutor for Veena, Guitar, and Keyboard, pursuing a Master’s in
                Veena with prior Diploma and Bachelor’s in Music.
              </li>

              <li>
                He has over 4 years of experience and is committed to guiding
                students with strong fundamentals.
              </li>

              <li>
                Known for his calm teaching style and adaptability, Kabilan
                bridges classical techniques with modern learning methods,
                inspiring students to perform with confidence.
              </li>

              <li>
                He inspires confidence in beginners with his gentle
                encouragement and steady support.
              </li>

              <li>
                He has also trained and accompanied students in solo recitals
                under SSMA’s banner.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* VALUE SECTION 
      <div className="container my-5 animate-up">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="ssma-info-card h-100">
              <h4 className="fw-bold ssma-active mb-3 text-center">
                What Makes Us Different
              </h4>
              <p>
                We don’t just teach music — we explain the science behind each
                sound. Students understand why notes behave the way they do and
                learn with confidence and clarity.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="ssma-info-card h-100">
              <h4 className="fw-bold ssma-active mb-3 text-center">
                The SSMA Method
              </h4>
              <p>
                With strong foundations and structured practice, students
                progress naturally and build musical discipline with joy and
                freedom.
              </p>
            </div>
          </div>
        </div>
      </div>*/}

      {/* QUOTE
      <div className="container my-5 text-center">
        <blockquote
          className="blockquote fs-4 fw-semibold border-start border-4 border-dark ps-3 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          “Understanding an Art is Science; Application of Science in an
          artistic way is the Art”
        </blockquote>
      </div> */}
    </div>
  );
}
