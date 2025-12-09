import { useEffect } from "react";

export default function Services() {
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

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -100; // offset for navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
      {/* PAGE TITLE */}
      <div className="container text-center my-5 animate-up">
        <h2 className="ssma-active ssma-heading1">Our Services</h2>
        <p className="lead text-white mt-3">
          Explore our musical programs designed for learners from beginner to
          advanced levels.
        </p>
      </div>
      {/* QUICK NAVIGATION MENU */}
      <div className="container text-center my-4 animate-up">
        <div className="quick-nav d-flex flex-wrap justify-content-center gap-4">
          {[
            { name: "Carnatic Vocals", icon: "fa-microphone-lines" },
            { name: "Film Song Tamil", icon: "fa-music" },
            { name: "Devotional Songs", icon: "fa-hands-praying" },
            { name: "Violin", icon: "fa-violin" },
            { name: "Keyboard", icon: "fa-keyboard" },
            { name: "Guitar", icon: "fa-guitar" },
            { name: "Veena", icon: "fa-music" },
            { name: "Mrudhangam", icon: "fa-drum" },
            { name: "Music Theory", icon: "fa-book-open" },
            { name: "Voice Consultation", icon: "fa-user-voice" },
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToService(item.name.replace(/\s+/g, ""))}
              className="quick-tile"
            >
              <i className={`fa-solid ${item.icon} quick-icon`}></i>
              <span className="quick-label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* SERVICES CONTENT */}
      <div className="container">
        {/* CARNATIC VOCALS */}
        <div
          id="CarnaticVocals"
          className="row align-items-center mb-5 animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Carnatic Vocals</h3>
            <ul className="ssma-points mt-3">
              <li>
                Singing is a basic human ability, and structured training turns
                it into musical expression.
              </li>
              <li>
                Students learn Carnatic foundations based on Purandaradasar’s
                system (16th century).
              </li>
              <li>
                The journey begins with Varisai, improving swara accuracy,
                rhythm, and voice control.
              </li>
              <li>
                Students are guided towards Manodharma practices for creative
                improvisation.
              </li>
              <li>
                Each raga is experienced with its bhava (emotion) and expressive
                qualities.
              </li>
              <li>
                Training encourages confidence in applying knowledge during
                practice and performance.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/ear.png"
              alt="vocal"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* FILM SONG TAMIL */}
        <div
          id="FilmSongTamil"
          className="row align-items-center mb-5 flex-md-row-reverse animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Film Song (Tamil)</h3>
            <ul className="ssma-points mt-3">
              <li>
                Students learn singing nuances specific to film music
                performance.
              </li>
              <li>
                Training includes identifying chords and scales used in each
                song.
              </li>
              <li>
                Focus on understanding chord progressions and how they support
                melody.
              </li>
              <li>
                Students gain ability to analyse music rather than just memorise
                tunes.
              </li>
              <li>
                Singing insights help improve expression, clarity, and vocal
                style.
              </li>
              <li>
                Learning builds confidence in solo, recording, and stage
                performance.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/voice.png"
              alt="film song"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* DEVOTIONAL SONGS */}
        <div
          id="DevotionalSongs"
          className="row align-items-center mb-5 animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Devotional Songs</h3>
            <ul className="ssma-points mt-3">
              <li>
                Students learn devotional songs with accurate pronunciation and
                meaning.
              </li>
              <li>
                Training helps recognise the raga structure behind each
                composition.
              </li>
              <li>
                Singing focuses on expressing bhakti (devotion) with clarity and
                feeling.
              </li>
              <li>
                Learners understand how lyrics and melody shape spiritual
                emotion.
              </li>
              <li>
                Practice supports both beginners and adults exploring devotional
                art.
              </li>
              <li>
                Training develops a calm, reflective approach while singing.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/sv_devotional.jpg"
              alt="devotional"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* VIOLIN */}
        <div
          id="Violin"
          className="row align-items-center mb-5 flex-md-row-reverse animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Violin</h3>
            <ul className="ssma-points mt-3">
              <li>
                Learning begins with bowing, fingering, posture, and basic tone
                control.
              </li>
              <li>
                As a fretless instrument, violin requires strong ear-training
                for accuracy.
              </li>
              <li>
                Students learn to identify and reproduce swaras in correct
                positions.
              </li>
              <li>
                Practice develops listening skills, patience, and musical
                sensitivity.
              </li>
              <li>
                Training gradually moves into structured repertoire and simple
                melodies.
              </li>
              <li>Students gain confidence through steady, guided progress.</li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/music.png"
              alt="violin"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* KEYBOARD */}
        <div id="Keyboard" className="row align-items-center mb-5 animate-up">
          <div className="col-md-7 text-white">
            <h3 className="service-title">Keyboard</h3>
            <ul className="ssma-points mt-3">
              <li>
                Keyboard gives easy access to melody, harmony, and rhythm.
              </li>
              <li>
                Students develop finger strength, agility, and coordination
                through exercises.
              </li>
              <li>
                Learning includes scales, chords, and chord progressions
                step-by-step.
              </li>
              <li>
                Training helps students understand and play multiple styles of
                music.
              </li>
              <li>
                Suitable for beginners seeking a simple pathway into music.
              </li>
              <li>
                Builds a strong foundation for improvisation and composition
                later.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/play.png"
              alt="keyboard"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* GUITAR */}
        <div
          id="Guitar"
          className="row align-items-center mb-5 flex-md-row-reverse animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Guitar</h3>
            <ul className="ssma-points mt-3">
              <li>
                Learning starts with instrument handling, posture, and basic
                fretwork.
              </li>
              <li>
                Students progress into chord playing, rhythm, and song
                accompaniment.
              </li>
              <li>
                Training includes lead melodies, chord progressions, and
                strumming patterns.
              </li>
              <li>
                Focus on clear finger movement and relaxed playing technique.
              </li>
              <li>Builds skill in both classical flavour and modern style.</li>
              <li>
                Helps students play confidently in solo or group settings.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/girl.png"
              alt="guitar"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* VEENA */}
        <div id="Veena" className="row align-items-center mb-5 animate-up">
          <div className="col-md-7 text-white">
            <h3 className="service-title">Veena</h3>
            <ul className="ssma-points mt-3">
              <li>
                A classical instrument deeply connected to the spiritual essence
                of Carnatic music.
              </li>
              <li>
                Learning begins with Varisai, improving technique and swara
                clarity.
              </li>
              <li>
                Students progress into Manodharma and basic improvisation.
              </li>
              <li>
                Ideal for expressing Carnatic gamakas and detailed articulation.
              </li>
              <li>
                Teaches how the same swara changes character in different ragas.
              </li>
              <li>
                Learning brings a sense of calm, focus, and cultural connection.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/music.png"
              alt="veena"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* MRUDHANGAM */}
        <div
          id="Mrudhangam"
          className="row align-items-center mb-5 flex-md-row-reverse animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Mrudhangam</h3>
            <ul className="ssma-points mt-3">
              <li>
                Foundation lies in Shruti (melody) and Layam (rhythm) of
                Carnatic music.
              </li>
              <li>
                Percussion training builds instinctive rhythmic understanding.
              </li>
              <li>
                Practice strengthens hands, fingers, and stamina gradually.
              </li>
              <li>
                Helps students connect physically and emotionally to rhythm.
              </li>
              <li>
                Training supports musical growth across any instrument or voice.
              </li>
              <li>
                Learning develops patience, timing, and steady musical
                awareness.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/sv_mrudhangam.jpg"
              alt="Mrudhangam"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* MUSIC THEORY */}
        <div
          id="MusicTheory"
          className="row align-items-center mb-5 animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Music Theory</h3>
            <ul className="ssma-points mt-3">
              <li>
                Study of swaras, ragas, and talas and how they create musical
                experience.
              </li>
              <li>
                Builds a foundation that improves listening and memory skills.
              </li>
              <li>Connects the science and logic behind musical structures.</li>
              <li>Helps students understand how music communicates emotion.</li>
              <li>
                Useful for singers, instrumentalists, and curious learners
                alike.
              </li>
              <li>Supports confident, expressive musical interpretation.</li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/music-book.png"
              alt="Music Theory"
              className="service-img shadow-lg"
            />
          </div>
        </div>

        {/* VOICE CONSULTATION */}
        <div
          id="VoiceConsultation"
          className="row align-items-center mb-5 flex-md-row-reverse animate-up"
        >
          <div className="col-md-7 text-white">
            <h3 className="service-title">Voice Consultation</h3>
            <ul className="ssma-points mt-3">
              <li>
                Helps learners discover the true potential and beauty of their
                voice.
              </li>
              <li>
                Suitable for beginners seeking confidence or singers refining
                technique.
              </li>
              <li>
                Focus on pitch accuracy, breathing, and vocal range development.
              </li>
              <li>Sessions identify individual challenges and strengths.</li>
              <li>
                Supportive approach ensures safe, natural vocal improvement.
              </li>
              <li>
                Builds confidence to express freely in singing and
                communication.
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/voice-message.png"
              alt="voice"
              className="service-img shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* DELIVERY MODE */}{" "}
      <div className="container my-5 text-center">
        {" "}
        <blockquote
          className="delivery-box fs-4 border-4 ps-3 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          {" "}
          We provide both <strong>Online & In-Person</strong> learning options.{" "}
        </blockquote>{" "}
      </div>
    </div>
  );
}
