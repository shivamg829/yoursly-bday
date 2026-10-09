import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import photo1254 from "./photo/IMG_1254.JPG";
import photo2212 from "./photo/IMG_2212.JPG";
import photo4750 from "./photo/IMG_4750.JPG";

const recipient = "Shivam";
const SECRET_CODE = "29012005"; // ← change to any digits you want

const photos = [
  { src: photo1254, alt: "A favorite memory", caption: "that golden afternoon" },
  { src: photo2212, alt: "A happy moment", caption: "the day we laughed too hard" },
  { src: photo4750, alt: "A special moment", caption: "quiet, but perfect" },
];

const wishIdeas = [
  "More little moments that make you smile",
  "A year full of brave new adventures",
  "Everything you have been quietly hoping for",
];

const scratchMessage = "you are loved more than you know ♡";

const CHAPTERS = ["Hello", "Teddy", "Letter", "Moments", "Scratch", "Cake", "Wish"];

/* ═══════════ FLOATING HEARTS ═══════════ */
function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 14 + 10,
        duration: Math.random() * 10 + 14,
        delay: Math.random() * 10,
        symbol: ["♥", "♡", "✿", "✦", "❀"][i % 5],
      })),
    []
  );
  return (
    <div className="hearts-layer" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="float-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}

/* ═══════════ SPARKLE TRAIL ═══════════ */
function useSparkleTrail() {
  const lastRef = useRef(0);
  useEffect(() => {
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastRef.current < 90) return;
      lastRef.current = now;
      const spark = document.createElement("span");
      spark.className = "cursor-spark";
      spark.textContent = ["✦", "✧", "♡", "✿", "·"][Math.floor(Math.random() * 5)];
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      spark.style.color = ["#f4c87a", "#e88fa1", "#f0a5b8", "#a8d8c1", "#c9a8f4"][
        Math.floor(Math.random() * 5)
      ];
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 900);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);
}

/* ═══════════ CONFETTI ═══════════ */
function Confetti({ active }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => {
        const colors = ["#f4a8b8", "#f7c97a", "#a8d8c1", "#c9a8f4", "#f7d66e", "#f0a5b8"];
        const angle = (i / 50) * Math.PI * 2 + Math.random() * 0.4;
        const velocity = Math.random() * 220 + 130;
        return {
          id: i,
          color: colors[i % colors.length],
          dx: Math.cos(angle) * velocity,
          dy: Math.sin(angle) * velocity,
          rotation: Math.random() * 720 - 360,
          delay: Math.random() * 0.15,
          size: Math.random() * 8 + 5,
          round: i % 3 === 0,
        };
      }),
    []
  );
  if (!active) return null;
  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            borderRadius: p.round ? "50%" : "3px",
            animationDelay: `${p.delay}s`,
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            "--rot": `${p.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════ TEDDY ═══════════ */
function Teddy({ className = "" }) {
  return (
    <svg aria-hidden="true" className={`teddy ${className}`} viewBox="0 0 112 120" fill="none">
      <ellipse cx="56" cy="111" rx="37" ry="6" fill="#805349" opacity=".13" />
      <path d="M27 79c0-17 13-29 29-29s29 12 29 29v17c0 8-7 14-15 14H42c-8 0-15-6-15-14V79Z" fill="#C78D62" stroke="#996345" strokeWidth="3" />
      <path d="M39 87c0-9 7-15 17-15s17 6 17 15v12c0 5-5 9-10 9H49c-5 0-10-4-10-9V87Z" fill="#F1D4AD" />
      <circle cx="30" cy="89" r="11" fill="#D9AA7D" stroke="#996345" strokeWidth="3" />
      <circle cx="82" cy="89" r="11" fill="#D9AA7D" stroke="#996345" strokeWidth="3" />
      <circle cx="25" cy="106" r="11" fill="#C78D62" stroke="#996345" strokeWidth="3" />
      <circle cx="87" cy="106" r="11" fill="#C78D62" stroke="#996345" strokeWidth="3" />
      <circle cx="35" cy="27" r="17" fill="#C78D62" stroke="#996345" strokeWidth="3" />
      <circle cx="77" cy="27" r="17" fill="#C78D62" stroke="#996345" strokeWidth="3" />
      <circle cx="35" cy="28" r="8" fill="#EFC7A1" />
      <circle cx="77" cy="28" r="8" fill="#EFC7A1" />
      <path d="M26 48c0-19 13-33 30-33s30 14 30 33-13 31-30 31S26 67 26 48Z" fill="#D9A476" stroke="#996345" strokeWidth="3" />
      <ellipse cx="56" cy="54" rx="15" ry="12" fill="#F4DEC0" />
      <circle cx="45" cy="46" r="2.6" fill="#49302B" />
      <circle cx="67" cy="46" r="2.6" fill="#49302B" />
      <ellipse cx="56" cy="52" rx="3.4" ry="2.6" fill="#664039" />
      <path d="M53 57c1.5 2.5 4.5 2.5 6 0" stroke="#805349" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="37" cy="54" rx="5" ry="3" fill="#E99491" opacity=".65" />
      <ellipse cx="75" cy="54" rx="5" ry="3" fill="#E99491" opacity=".65" />
      <path d="m56 71 4 5h-8l4-5Z" fill="#E77E91" />
      <path d="M56 76c-4-5-10-3-9 1 1 4 9 7 9 7s8-3 9-7c1-4-5-6-9-1Z" fill="#E77E91" />
    </svg>
  );
}

/* ═══════════ CAKE ═══════════ */
function Cake({ lit }) {
  return (
    <svg aria-label="Cake" className={`cake ${lit ? "is-lit" : ""}`} role="img" viewBox="0 0 380 330">
      <defs>
        <linearGradient id="cb" x1="0" x2="1">
          <stop offset="0" stopColor="#F0A5B8" />
          <stop offset="1" stopColor="#E88FA1" />
        </linearGradient>
        <linearGradient id="ci" x1="0" x2="1" y1="0" y2=".9">
          <stop stopColor="#FFF8E8" />
          <stop offset="1" stopColor="#F6DFCE" />
        </linearGradient>
        <radialGradient id="cf">
          <stop stopColor="#FFF7BD" offset=".15" />
          <stop stopColor="#FFD277" offset=".68" />
          <stop offset="1" stopColor="#F29A70" />
        </radialGradient>
      </defs>
      <ellipse cx="190" cy="294" rx="155" ry="18" fill="#c99" opacity=".2" />
      <path d="M34 272c0-9 70-17 156-17s156 8 156 17v9c0 11-70 20-156 20S34 292 34 281z" fill="#F4D6BD" stroke="#FFFAF1" strokeWidth="5" />
      <ellipse cx="190" cy="271" rx="156" ry="23" fill="#FFFAF0" stroke="#ECD1BD" strokeWidth="3" />
      <path d="M59 174c0-18 59-32 131-32s131 14 131 32v79c0 19-59 34-131 34S59 272 59 253z" fill="url(#cb)" />
      <path d="M59 175c19-15 73-24 131-24s112 9 131 24c-2 9-15 14-25 18-9 4-10 22-20 23-12 1-13-19-25-20-12 0-14 15-26 15-13 0-14-17-27-17s-14 17-27 17c-12 0-14-18-27-17-12 0-13 20-26 20-12-1-11-19-21-23-11-4-34-8-38-16z" fill="url(#ci)" stroke="#F2DFC8" strokeWidth="2" />
      <ellipse cx="190" cy="175" rx="131" ry="33" fill="url(#ci)" stroke="#F2DFC8" strokeWidth="2" />
      <path d="M98 115c0-14 41-25 92-25s92 11 92 25v62c0 15-41 27-92 27s-92-12-92-27z" fill="#F7CE85" />
      <path d="M98 116c14-13 52-20 92-20s78 7 92 20c-2 8-12 12-20 15-7 3-7 17-16 17-10 0-10-14-20-15s-11 12-21 12-11-13-21-13-11 13-21 13-11-13-21-12-10 15-20 15c-9 0-9-14-16-17-8-3-25-7-28-15z" fill="url(#ci)" stroke="#F2DFC8" strokeWidth="2" />
      <ellipse cx="190" cy="116" rx="92" ry="23" fill="url(#ci)" stroke="#F2DFC8" strokeWidth="2" />
      <path d="M142 99V55c0-3 17-3 17 0v44m22-4V47c0-3 17-3 17 0v48m22 4V55c0-3 17-3 17 0v44" fill="#FFFAF0" stroke="#E3A3A0" strokeWidth="2" />
      <path d="M142 68h17m0 15h-17m39-23h17m0 15h-17m39 8h17m0-15h-17" stroke="#E68F9B" strokeWidth="5" opacity=".78" />
      <path className="flame" d="M150 54c-8-7-3-14 1-23 2 7 10 12 5 20-1 2-3 3-6 3Z" fill="url(#cf)" />
      <path className="flame" d="M189 46c-8-7-3-14 1-23 2 7 10 12 5 20-1 2-3 3-6 3Z" fill="url(#cf)" />
      <path className="flame" d="M229 54c-8-7-3-14 1-23 2 7 10 12 5 20-1 2-3 3-6 3Z" fill="url(#cf)" />
    </svg>
  );
}

/* ═══════════ MUSIC TOGGLE — plays Happy Birthday tune ═══════════ */
function MusicToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!on) {
      // stop if running
      if (audioRef.current) {
        audioRef.current.stop();
        audioRef.current = null;
      }
      return;
    }

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0.14;
    master.connect(ctx.destination);

    // Happy Birthday melody — [frequency, duration in beats]
    // Notes: G4 G4 A4 G4 C5 B4 | G4 G4 A4 G4 D5 C5 | G4 G4 G5 E5 C5 B4 A4 | F5 F5 E5 C5 D5 C5
    const N = {
      G4: 392.0, A4: 440.0, B4: 493.88,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
    };
    const melody = [
      // phrase 1
      [N.G4, 0.75], [N.G4, 0.25], [N.A4, 1], [N.G4, 1], [N.C5, 1], [N.B4, 2],
      // phrase 2
      [N.G4, 0.75], [N.G4, 0.25], [N.A4, 1], [N.G4, 1], [N.D5, 1], [N.C5, 2],
      // phrase 3
      [N.G4, 0.75], [N.G4, 0.25], [N.G5, 1], [N.E5, 1], [N.C5, 1], [N.B4, 1], [N.A4, 2],
      // phrase 4
      [N.F5, 0.75], [N.F5, 0.25], [N.E5, 1], [N.C5, 1], [N.D5, 1], [N.C5, 2.5],
    ];

    const BEAT = 0.45; // seconds per beat
    let stopped = false;
    const startTime = ctx.currentTime + 0.05;

    const playNote = (freq, startAt, dur) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;

      // Soft envelope (attack + decay) for a music-box feel
      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.exponentialRampToValueAtTime(1, startAt + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.6, startAt + dur * 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + dur * 1.05);

      osc.connect(gain);
      gain.connect(master);
      osc.start(startAt);
      osc.stop(startAt + dur * 1.1);
    };

    const scheduleLoop = () => {
      if (stopped) return;
      let t = startTime;
      melody.forEach(([f, beats]) => {
        playNote(f, t, beats * BEAT);
        t += beats * BEAT;
      });
      const total = t - startTime;
      // repeat every total + small gap
      const loopTimer = setTimeout(() => scheduleLoop(), (total + 1.2) * 1000);
      audioRef.current = {
        stop: () => {
          stopped = true;
          clearTimeout(loopTimer);
          try { ctx.close(); } catch {}
        },
      };
    };

    scheduleLoop();

    return () => {
      stopped = true;
      try { ctx.close(); } catch {}
    };
  }, [on]);

  return (
    <button
      className={`music-toggle${on ? " is-on" : ""}`}
      onClick={() => setOn(!on)}
      type="button"
      aria-label={on ? "Mute Happy Birthday tune" : "Play Happy Birthday tune"}
    >
      <span className="music-icon">{on ? "♪" : "♫"}</span>
      {on && (
        <span className="music-wave" aria-hidden="true">
          <i /><i /><i />
        </span>
      )}
    </button>
  );
}

/* ═══════════ CHAPTER 1: HELLO ═══════════ */
function HelloScene({ name, onNext }) {
  return (
    <div className="scene scene-hello">
      <div className="card card-hello">
        <Teddy className="hello-teddy" />
        <span className="eyebrow">a small surprise</span>
        <h1 className="name">
          {name.split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.07}s` }}>{ch}</span>
          ))}
        </h1>
        <p className="subline">this little day is all yours ♡</p>
        <button className="btn-primary" onClick={onNext} type="button">
          Begin <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

/* ═══════════ CHAPTER 2: TEDDY PEEKABOO ═══════════ */
function TeddyScene({ onNext }) {
  const [found, setFound] = useState(false);

  return (
    <div className="scene">
      <div className="card">
        <span className="eyebrow">chapter one</span>
        <h2>someone's hiding <em>under here.</em></h2>

        <button
          className={`peekaboo${found ? " is-found" : ""}`}
          onClick={() => setFound(true)}
          type="button"
          aria-label={found ? "Teddy found" : "Tap the blanket"}
        >
          <span className="peek-star peek-star-a" aria-hidden="true">✦</span>
          <span className="peek-star peek-star-b" aria-hidden="true">♡</span>
          <span className="teddy-ears"><i /><i /></span>
          <span className="teddy-face">ʕ •ᴥ• ʔ</span>
          <span className="teddy-bow">♥</span>
          <span className="blanket">{found ? "there you are!" : "tap me"}</span>
        </button>

        <p className="hint">{found ? "a birthday hug, just for you." : "tap the blanket to say hi."}</p>

        {found && (
          <button className="btn-primary btn-pop" onClick={onNext} type="button">
            Keep going <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ═══════════ CHAPTER 3: LOCKED LETTER ═══════════ */
function LetterScene({ onNext, name }) {
  const CODE_LENGTH = SECRET_CODE.length;
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("locked");
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [fromUrl, setFromUrl] = useState(false);
  const inputRefs = useRef([]);

  // Prefill from URL (?code=29012005)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode && urlCode.length === CODE_LENGTH) {
      setCode(urlCode);
      setFromUrl(true);
      if (urlCode === SECRET_CODE) {
        setStatus("unlocked");
      } else {
        setStatus("wrong");
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setStatus("locked");
          setCode("");
          setFromUrl(false);
        }, 1000);
      }
    }
  }, [CODE_LENGTH]);

  const handleChange = (i, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = code.split("");
    next[i] = value;
    const joined = next.join("").slice(0, CODE_LENGTH);
    setCode(joined);
    if (value && i < CODE_LENGTH - 1) {
      inputRefs.current[i + 1]?.focus();
    }
    if (joined.length === CODE_LENGTH) {
      if (joined === SECRET_CODE) {
        setStatus("unlocked");
      } else {
        setStatus("wrong");
        setShake(true);
        setAttempts((a) => a + 1);
        setTimeout(() => {
          setShake(false);
          setCode("");
          setStatus("locked");
          inputRefs.current[0]?.focus();
        }, 900);
      }
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !code[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  };

  return (
    <div className="scene">
      <div className="card">
        <span className="eyebrow">chapter two</span>
        <h2>a letter <em>just for you.</em></h2>

        {status !== "unlocked" ? (
          <>
            <p className="hint">
              {status === "wrong" ? "hmm, that's not quite right…" : "enter the secret code to open it."}
            </p>

            <div className="code-hint">
              <span className="code-hint-icon">🔒</span>
              <span>hint: i think you don't need</span>
            </div>

            {fromUrl && <p className="attempts">found code in URL ✦</p>}

            <div className={`code-inputs${shake ? " is-shaking" : ""}`}>
              {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="tel"
                  inputMode="numeric"
                  maxLength={1}
                  value={code[i] || ""}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`code-input${code[i] ? " is-filled" : ""}${status === "wrong" ? " is-error" : ""}`}
                  aria-label={`Digit ${i + 1}`}
                  autoComplete="off"
                />
              ))}
            </div>

            {attempts > 0 && status === "locked" && (
              <p className="attempts">attempts: {attempts}</p>
            )}
          </>
        ) : (
          <div className="letter-reveal">
            <span className="letter-lock-open" aria-hidden="true">🔓</span>
            <article className="letter">
              <span className="letter-teddy"><Teddy /></span>
              <p className="letter-greeting">Dear {name},</p>
              <p>
                I hope the year ahead brings good people, new places,
                calm days, and plenty of reasons to laugh.
              </p>
              <p>
                Thank you for being exactly who you are.
                Keep this little note for whenever you need it.
              </p>
              <p className="letter-signoff">With love, always <b>♡</b></p>
            </article>
            <button className="btn-primary" onClick={onNext} type="button">
              Continue <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════ CHAPTER 4: MOMENTS (with preload + fade) ═══════════ */
function MomentsScene({ name }) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState({}); // { [src]: true }
  const total = photos.length;

  const go = useCallback((dir) => {
    setActive((a) => (a + dir + total) % total);
  }, [total]);

  // Preload all photos as soon as this scene mounts
  useEffect(() => {
    photos.forEach((p) => {
      const img = new Image();
      img.src = p.src;
      img.onload = () => {
        setLoaded((prev) => ({ ...prev, [p.src]: true }));
      };
      // if already cached, mark immediately
      if (img.complete) {
        setLoaded((prev) => ({ ...prev, [p.src]: true }));
      }
    });
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  // Keyboard nav (only when not typing in an input)
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="scene">
      <div className="card">
        <span className="eyebrow">chapter three</span>
        <h2>a few favorite <em>moments.</em></h2>

        <div className="carousel">
          <button className="arrow" type="button" onClick={() => go(-1)} aria-label="Previous photo">
            ‹
          </button>

          <div className="carousel-stage">
            {photos.map((p, i) => {
              let offset = i - active;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const isLoaded = !!loaded[p.src];
              return (
                <figure
                  key={p.src}
                  className={`photo${isActive ? " is-active" : ""}${isLoaded ? " is-loaded" : ""}`}
                  onClick={() => setActive(i)}
                  style={{
                    transform: `translate(-50%, 0) translateX(${offset * 32}%) scale(${isActive ? 1 : 0.82}) rotate(${offset * 4}deg)`,
                    opacity: abs > 1 ? 0 : isActive ? 1 : 0.55,
                    zIndex: 10 - abs,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* Placeholder shimmer while loading */}
                  <div className="photo-skeleton" aria-hidden="true" />
                  <img
                    src={p.src}
                    alt={`${name}: ${p.alt}`}
                    loading="eager"
                    decoding="async"
                    draggable="false"
                  />
                  <figcaption>{p.caption}</figcaption>
                </figure>
              );
            })}
          </div>

          <button className="arrow" type="button" onClick={() => go(1)} aria-label="Next photo">
            ›
          </button>
        </div>

        <div className="dots">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              className={`dot${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════ CHAPTER 5: SCRATCH CARD ═══════════ */
function ScratchScene({ onNext }) {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);
  const clearedRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#c9a8f4");
    grad.addColorStop(0.5, "#f0a5b8");
    grad.addColorStop(1, "#f4c87a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,0.3)";
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * rect.width,
        Math.random() * rect.height,
        Math.random() * 2 + 1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "bold 15px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("SCRATCH TO REVEAL ✦", rect.width / 2, rect.height / 2);
  }, []);

  const scratch = (e) => {
    if (!drawing.current || revealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(
      point.clientX - rect.left,
      point.clientY - rect.top,
      26,
      0,
      Math.PI * 2
    );
    ctx.fill();

    clearedRef.current += 1;
    if (clearedRef.current > 55) setRevealed(true);
  };

  const start = () => { drawing.current = true; };
  const stop = () => { drawing.current = false; };

  return (
    <div className="scene">
      <div className="card">
        <span className="eyebrow">chapter four</span>
        <h2>scratch to <em>reveal.</em></h2>
        <p className="hint">something is hiding under here ✨</p>

        <div className={`scratch-card${revealed ? " is-revealed" : ""}`}>
          <div className="scratch-message">
            <span className="scratch-heart">♡</span>
            <p>{scratchMessage}</p>
          </div>
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            onMouseDown={start}
            onMouseUp={stop}
            onMouseLeave={stop}
            onMouseMove={scratch}
            onTouchStart={start}
            onTouchEnd={stop}
            onTouchMove={scratch}
          />
        </div>

        {revealed && (
          <button className="btn-primary btn-pop" onClick={onNext} type="button">
            Continue <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ═══════════ CHAPTER 6: CAKE ═══════════ */
function CakeScene({ onNext }) {
  const [lit, setLit] = useState(false);
  const [blown, setBlown] = useState(false);

  const handle = () => {
    if (!lit) { setLit(true); return; }
    if (blown) return;
    setBlown(true);
    setTimeout(onNext, 2400);
  };

  return (
    <div className="scene">
      <div className="card">
        <span className="eyebrow">chapter five</span>
        <h2>
          {blown ? <>wish is <em>on its way</em></> :
           lit ? <>now blow them <em>out</em></> :
           <>tap to <em>light the candles</em></>}
        </h2>

        <button className="cake-btn" onClick={handle} type="button" aria-label="Cake">
          <Cake lit={lit && !blown} />
        </button>

        <p className="hint">
          {blown ? "hope it finds you ♡" : lit ? "make a wish first…" : "one tap to light"}
        </p>

        {blown && <Confetti active />}
      </div>
    </div>
  );
}

/* ═══════════ CHAPTER 7: WISH ═══════════ */
function WishScene({ onNext }) {
  const [wish, setWish] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!wish.trim()) return;
    setSent(true);
    setTimeout(onNext, 2400);
  };

  return (
    <div className="scene">
      <div className="card">
        <span className="eyebrow">chapter six</span>
        <h2>send a wish <em>to the sky.</em></h2>
        <p className="hint">pick one, or write your own ✿</p>

        {!sent ? (
          <div className="wish-box">
            <div className="wish-choices">
              {wishIdeas.map((idea) => (
                <button
                  key={idea}
                  type="button"
                  aria-pressed={wish === idea}
                  className={`wish-choice${wish === idea ? " is-selected" : ""}`}
                  onClick={() => setWish(idea)}
                >
                  <span className="choice-heart">{wish === idea ? "♥" : "♡"}</span>
                  {idea}
                </button>
              ))}
            </div>
            <label className="wish-label" htmlFor="wish-input">or write your own</label>
            <input
              id="wish-input"
              className="wish-input"
              maxLength={90}
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="something just for you…"
            />
            <button className="btn-primary" onClick={handleSend} disabled={!wish.trim()} type="button">
              Release this wish
            </button>
          </div>
        ) : (
          <div className="wish-rising" aria-live="polite">
            <span className="rising-star">✦</span>
            <p className="rising-text">"{wish.trim()}"</p>
            <span className="rising-sub">rising…</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════ END SCENE ═══════════ */
function EndScene({ name, onRestart }) {
  return (
    <div className="scene">
      <div className="card card-end">
        <span className="end-burst" aria-hidden="true">✦</span>
        <Teddy className="end-teddy" />
        <h1 className="end-title">Happy birthday, {name}!</h1>
        <p className="subline">hope today feels as lovely as you are ♡</p>
        <Confetti active />
        <button className="btn-primary" onClick={onRestart} type="button">
          Replay <span aria-hidden="true">↻</span>
        </button>
      </div>
    </div>
  );
}

/* ═══════════ MAIN APP ═══════════ */
export default function App() {
  const [page, setPage] = useState(0);
  const total = CHAPTERS.length + 1; // + End

  useSparkleTrail();

  const goTo = useCallback((p) => {
    setPage(Math.max(0, Math.min(total - 1, p)));
    window.scrollTo({ top: 0 });
  }, [total]);

  const next = useCallback(() => goTo(page + 1), [page, goTo]);
  const prev = useCallback(() => goTo(page - 1), [page, goTo]);

  // Keyboard — but skip when typing in an input
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="app">
      <FloatingHearts />

      <div className="music-slot">
        <MusicToggle />
      </div>

      <nav className="pager" aria-label="Chapters">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`pager-dot${page === i ? " is-active" : ""}${page > i ? " is-done" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </nav>

      <main className="stage" key={page}>
        {page === 0 && <HelloScene name={recipient} onNext={next} />}
        {page === 1 && <TeddyScene onNext={next} />}
        {page === 2 && <LetterScene name={recipient} onNext={next} />}
        {page === 3 && <MomentsScene name={recipient} />}
        {page === 4 && <ScratchScene onNext={next} />}
        {page === 5 && <CakeScene onNext={next} />}
        {page === 6 && <WishScene onNext={next} />}
        {page === 7 && <EndScene name={recipient} onRestart={() => goTo(0)} />}
      </main>

      <footer className="bottom">
        <button
          className="nav-btn"
          type="button"
          onClick={prev}
          disabled={page === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <span className="chapter-name">
          {page < CHAPTERS.length ? CHAPTERS[page] : "The end"}
        </span>
        <button
          className="nav-btn"
          type="button"
          onClick={page === total - 1 ? () => goTo(0) : next}
          aria-label={page === total - 1 ? "Restart" : "Next"}
        >
          {page === total - 1 ? "↻" : "→"}
        </button>
      </footer>
    </div>
  );
}