import { useState } from "react";
import photo1254 from "./photo/IMG_1254.JPG";
import photo2212 from "./photo/IMG_2212.JPG";
import photo4750 from "./photo/IMG_4750.JPG";

const recipient = "Shivam";
const wishIdeas = [
  "More little moments that make you smile",
  "A year full of brave new adventures",
  "Everything you have been quietly hoping for",
];
const birthdayPhotos = [
  { src: photo1254, alt: "A favorite birthday memory" },
  { src: photo2212, alt: "A happy moment to remember" },
  { src: photo4750, alt: "A special moment from the photo album" },
];

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

function BirthdayCake({ lit = false }) {
  return (
    <svg
      aria-label={lit ? "A two-tier birthday cake with three glowing candles" : "A two-tier birthday cake"}
      className={`cake-art ${lit ? "is-lit" : ""}`}
      role="img"
      viewBox="0 0 380 330"
    >
      <defs>
        <linearGradient id="cake-base" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#DF8790" />
          <stop offset=".18" stopColor="#EFABB0" />
          <stop offset=".55" stopColor="#F3B5B6" />
          <stop offset="1" stopColor="#DB858E" />
        </linearGradient>
        <linearGradient id="cake-icing" x1="0" x2="1" y1="0" y2=".9">
          <stop stopColor="#FFF8E8" />
          <stop offset=".55" stopColor="#FFFDF3" />
          <stop offset="1" stopColor="#F6DFCE" />
        </linearGradient>
        <radialGradient id="candle-flame">
          <stop stopColor="#FFF7BD" offset=".15" />
          <stop stopColor="#FFD277" offset=".68" />
          <stop stopColor="#F29A70" offset="1" />
        </radialGradient>
      </defs>
      <ellipse cx="190" cy="294" rx="155" ry="18" fill="#B78375" opacity=".12" />
      <path d="M34 272c0-9 70-17 156-17s156 8 156 17v9c0 11-70 20-156 20S34 292 34 281z" fill="#F4D6BD" stroke="#FFFAF1" strokeWidth="5" />
      <ellipse cx="190" cy="271" rx="156" ry="23" fill="#FFFAF0" stroke="#ECD1BD" strokeWidth="3" />
      <ellipse cx="190" cy="270" rx="125" ry="14" fill="#F9E6D3" />
      <path d="M59 174c0-18 59-32 131-32s131 14 131 32v79c0 19-59 34-131 34S59 272 59 253z" fill="url(#cake-base)" />
      <path d="M62 218c22 7 42 9 63 4 20-5 37-5 55 0s35 5 55 0 39-4 61 1v17c-22-5-42-6-61 0s-39 6-57 0-35-5-54 0-40 2-62-5z" fill="#F7D6BD" opacity=".86" />
      <path d="M59 175c19-15 73-24 131-24s112 9 131 24c-2 9-15 14-25 18-9 4-10 22-20 23-12 1-13-19-25-20-12 0-14 15-26 15-13 0-14-17-27-17s-14 17-27 17c-12 0-14-18-27-17-12 0-13 20-26 20-12-1-11-19-21-23-11-4-34-8-38-16z" fill="url(#cake-icing)" stroke="#F2DFC8" strokeWidth="2" />
      <ellipse cx="190" cy="175" rx="131" ry="33" fill="url(#cake-icing)" stroke="#F2DFC8" strokeWidth="2" />
      <path d="M98 115c0-14 41-25 92-25s92 11 92 25v62c0 15-41 27-92 27s-92-12-92-27z" fill="#F0C477" />
      <path d="M102 147c18 6 33 7 47 3s27-4 41 0 27 4 41 0 30-3 47 1v14c-17-4-32-4-47 1s-27 5-41 0-27-4-41 0-29 2-47-4z" fill="#F9E0A2" opacity=".9" />
      <path d="M98 116c14-13 52-20 92-20s78 7 92 20c-2 8-12 12-20 15-7 3-7 17-16 17-10 0-10-14-20-15s-11 12-21 12-11-13-21-13-11 13-21 13-11-13-21-12-10 15-20 15c-9 0-9-14-16-17-8-3-25-7-28-15z" fill="url(#cake-icing)" stroke="#F2DFC8" strokeWidth="2" />
      <ellipse cx="190" cy="116" rx="92" ry="23" fill="url(#cake-icing)" stroke="#F2DFC8" strokeWidth="2" />
      <path d="M94 254c24 10 60 15 96 15s72-5 96-15" fill="none" stroke="#FFF1DB" strokeWidth="4" opacity=".82" />
      <path d="M111 238v10m158-10v10M127 250v10m126-10v10" stroke="#D8B768" strokeWidth="3" strokeLinecap="round" />
      <path d="M142 99V55c0-3 17-3 17 0v44m22-4V47c0-3 17-3 17 0v48m22 4V55c0-3 17-3 17 0v44" fill="#FFFAF0" stroke="#E3A3A0" strokeWidth="2" />
      <path d="M142 68h17m0 15h-17m39-23h17m0 15h-17m39 8h17m0-15h-17" stroke="#E68F9B" strokeWidth="5" opacity=".78" />
      <path className="candle-flame flame-left" d="M150 54c-8-7-3-14 1-23 2 7 10 12 5 20-1 2-3 3-6 3Z" fill="url(#candle-flame)" />
      <path className="candle-flame flame-middle" d="M189 46c-8-7-3-14 1-23 2 7 10 12 5 20-1 2-3 3-6 3Z" fill="url(#candle-flame)" />
      <path className="candle-flame flame-right" d="M229 54c-8-7-3-14 1-23 2 7 10 12 5 20-1 2-3 3-6 3Z" fill="url(#candle-flame)" />
      <path d="M155 179c0-8 6-14 14-14s14 6 14 14-14 19-14 19-14-11-14-19zm60-2c0-8 6-14 14-14s14 6 14 14-14 19-14 19-14-11-14-19z" fill="#E88896" />
      <circle cx="91" cy="196" r="4" fill="#FFE7A7" />
      <circle cx="284" cy="196" r="4" fill="#FFE7A7" />
      <circle cx="77" cy="228" r="3" fill="#FFF5E5" />
      <circle cx="304" cy="233" r="3" fill="#FFF5E5" />
      <path d="m76 194 3 4m218-3 3 4M105 227l3-4m164 7 3-4" stroke="#FFF7E6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function App() {
  const [page, setPage] = useState(0);
  const [opened, setOpened] = useState(false);
  const [wish, setWish] = useState("");
  const [wishSent, setWishSent] = useState(false);

  const goTo = (nextPage) => {
    setPage(nextPage);
    setOpened(false);
    if (nextPage !== 4) {
      setWish("");
      setWishSent(false);
    }
  };

  const isWishPage = page === 4;
  const isFinalPage = page === 6;
  const canContinue = !isWishPage || wishSent;

  const continueStory = () => {
    if (isWishPage && !wishSent) return;
    if (isFinalPage) {
      goTo(0);
      return;
    }
    if (!opened && [0, 1, 2, 5, 6].includes(page)) {
      setOpened(true);
      return;
    }
    goTo(page + 1);
  };

  return (
    <main className="birthday">
      <span className="ambient ambient-one" aria-hidden="true">✿</span>
      <span className="ambient ambient-two" aria-hidden="true">♡</span>
      <span className="ambient ambient-three" aria-hidden="true">✦</span>

      <header className="topbar">
        <button className="brand" onClick={() => goTo(0)} type="button" aria-label="Start the birthday story again">
          <Teddy className="brand-teddy" /> <span>little day</span>
        </button>
        <span className="top-note"><span className="tiny-heart">♥</span> a birthday story for {recipient}</span>
      </header>

      <section className="story">
        <div className="story-label"><span>MADE WITH LOVE</span><span className="story-label-heart">♡</span><span>JUST FOR {recipient.toUpperCase()}</span></div>

        <div className={`scene scene-${page}`} key={page}>
          <div className="scene-copy">
            {page === 0 && (
              <>
                <span className="eyebrow">A SMALL SURPRISE, WITH A LOT OF LOVE</span>
                <h1>Shivam, this little day is <em>all yours.</em></h1>
                <p className="description">A few thoughtful surprises, a very good cake, and one small reminder of how much you mean.</p>
                <p className="from-note">No rush. There’s a teddy waiting inside. <span>♡</span></p>
              </>
            )}
            {page === 1 && (
              <>
                <span className="eyebrow">THE IMPORTANT PART</span>
                <h1>Today deserves <em>extra frosting.</em></h1>
                <p className="description">Here’s to good cake, easy laughter, and a day that feels unmistakably yours.</p>
                <p className="from-note">The candles are ready when you are. <span>♡</span></p>
              </>
            )}
            {page === 2 && (
              <>
                <span className="eyebrow">A VERY SMALL GAME</span>
                <h1>A little bear has <em>something for you.</em></h1>
                <p className="description">He’s shy, but he has excellent taste in birthday people. Tap the blanket and say hello.</p>
                <p className="from-note">He promises to share his snacks. <span>♡</span></p>
              </>
            )}
            {page === 3 && (
              <>
                <span className="eyebrow">A FEW FAVORITE MOMENTS</span>
                <h1>A little <em>photo album.</em></h1>
                <p className="description">A few favorite snapshots, gathered together just for you.</p>
                <p className="from-note">Wishing you a year full of joy and laughter. <span>♡</span></p>
              </>
            )}
            {page === 4 && (
              <>
                <span className="eyebrow">A WISH FOR THE YEAR AHEAD</span>
                <h1>What are you <em>hoping for?</em></h1>
                <p className="description">Pick the wish that feels right, or write your own. There’s no wrong answer—and no need to wish small.</p>
                <p className="from-note">Your wish deserves a little ceremony. <span>♡</span></p>
              </>
            )}
            {page === 5 && (
              <>
                <span className="eyebrow">TAKE A QUIET MOMENT</span>
                <h1>Make a wish. <em>Keep it close.</em></h1>
                <p className="description">Take a breath, think of something you’d love to see in the year ahead, and tap the cake to blow out the candles.</p>
                <p className="from-note">I hope a little magic finds you. <span>♡</span></p>
              </>
            )}
            {page === 6 && (
              <>
                <span className="eyebrow">ONE LAST LITTLE NOTE</span>
                <h1>Happy birthday, <em>Shivam.</em></h1>
                <p className="description">I hope the year ahead brings good people, new places, calm days, and plenty of reasons to laugh.</p>
                <p className="from-note">You make life a little brighter. <span>♡</span></p>
              </>
            )}
          </div>

          <div className={`stage stage-${page}`}>
            {page === 0 && (
              <button
                className={`envelope-scene ${opened ? "is-open" : ""}`}
                onClick={() => setOpened(true)}
                type="button"
                aria-label={opened ? "Birthday letter for Shivam, opened" : "Open the birthday letter for Shivam"}
                aria-pressed={opened}
              >
                <span className="stage-sparkle sparkle-a" aria-hidden="true">✦</span>
                <span className="stage-sparkle sparkle-b" aria-hidden="true">✿</span>
                <div className="envelope">
                  <div className="letter">
                    {opened ? (
                      <>
                        <span className="letter-greeting">Dear Shivam,</span>
                        <span className="letter-message">Happy birthday. I hope the year ahead brings good company, new adventures, and plenty of moments that feel like you.</span>
                        <span className="letter-signoff">With love, always <b>♡</b></span>
                      </>
                    ) : (
                      <>
                        <span className="letter-teaser">A little note for you</span>
                        <b>♡</b>
                      </>
                    )}
                  </div>
                  <div className="envelope-back" />
                  <div className="envelope-front" />
                  <div className="envelope-flap" />
                  <span className="wax-seal">♥</span>
                </div>
                <span className="floating-heart heart-a" aria-hidden="true">♡</span>
                <span className="floating-heart heart-b" aria-hidden="true">♥</span>
              </button>
            )}
            {page === 1 && (
              <div className="cake-scene">
                <span className="cake-sparkle cake-sparkle-a" aria-hidden="true">✦</span>
                <span className="cake-sparkle cake-sparkle-b" aria-hidden="true">✧</span>
                <BirthdayCake lit={opened} />
                <span className="cake-caption">made with love, obviously</span>
                <span className="cake-teddy"><Teddy /></span>
              </div>
            )}
            {page === 2 && (
              <button
                className={`peekaboo-scene ${opened ? "is-found" : ""}`}
                onClick={() => setOpened(true)}
                aria-label={opened ? "The teddy has been found" : "Tap the blanket to find the teddy"}
                type="button"
              >
                <span className="peek-star peek-star-a" aria-hidden="true">✦</span>
                <span className="peek-star peek-star-b" aria-hidden="true">♡</span>
                <span className="teddy-ears"><i /><i /></span>
                <span className="teddy-face">ʕ&nbsp;•ᴥ•&nbsp;ʔ</span>
                <span className="teddy-bow">♥</span>
                <span className="blanket"><span>{opened ? "THERE YOU ARE" : "a tiny peek?"}</span></span>
                <span className="peek-caption">{opened ? "A birthday hug, from one good friend to another." : "Someone’s hiding under here."}</span>
              </button>
            )}
            {page === 3 && (
              <div className="photo-gallery" aria-label="Birthday photo album">
                <div className="photo-grid">
                  {birthdayPhotos.map((photo, index) => (
                    <figure className={`photo-frame photo-frame-${index + 1}`} key={photo.src}>
                      <img alt={`${recipient}: ${photo.alt}`} src={photo.src} />
                    </figure>
                  ))}
                </div>
                <p className="photo-wish"><span aria-hidden="true">♡</span> May the year ahead be as wonderful as these memories.</p>
              </div>
            )}
            {page === 4 && (
              <div className={`wish-note ${wishSent ? "is-sent" : ""}`}>
                <div className="note-topline"><span>SHIVAM’S BIRTHDAY WISH</span><span aria-hidden="true">♡</span></div>
                {!wishSent ? (
                  <>
                    <p className="note-question">What would you like this year to bring?</p>
                    <div className="wish-choices">
                      {wishIdeas.map((idea) => (
                        <button
                          aria-pressed={wish === idea}
                          className={`wish-choice ${wish === idea ? "is-selected" : ""}`}
                          key={idea}
                          onClick={() => setWish(idea)}
                          type="button"
                        >
                          <span className="choice-heart" aria-hidden="true">{wish === idea ? "♥" : "♡"}</span>
                          {idea}
                        </button>
                      ))}
                    </div>
                    <label className="wish-own-label" htmlFor="wish-input">Or write your own</label>
                    <input
                      className="wish-input"
                      id="wish-input"
                      maxLength={90}
                      onChange={(event) => setWish(event.target.value)}
                      placeholder="Something just for you…"
                      value={wish}
                    />
                    <button
                      className="send-wish-button"
                      disabled={!wish.trim()}
                      onClick={() => wish.trim() && setWishSent(true)}
                      type="button"
                    >
                      Send this wish <span aria-hidden="true">→</span>
                    </button>
                  </>
                ) : (
                  <div className="wish-keepsake" aria-live="polite">
                    <span className="keepsake-star" aria-hidden="true">✦</span>
                    <p className="keepsake-heading">Wish accepted, Shivam.</p>
                    <p className="keepsake-copy">“{wish.trim()}”</p>
                    <span className="keepsake-signoff">I hope it finds its way to you. ♡</span>
                    <span className="keepsake-teddy"><Teddy /></span>
                  </div>
                )}
                <span className="note-signature">WITH LOVE, TODAY AND ALWAYS</span>
              </div>
            )}
            {page === 5 && (
              <button
                className={`cake-scene wish-scene ${opened ? "is-wished" : ""}`}
                onClick={() => setOpened(true)}
                type="button"
                aria-label={opened ? "The candles are out; your wish is on its way" : "Tap to blow out the birthday candles"}
              >
                <span className="wish-star wish-star-a" aria-hidden="true">✦</span>
                <span className="wish-star wish-star-b" aria-hidden="true">✧</span>
                <BirthdayCake lit={!opened} />
                <span className="wish-caption">{opened ? "Your wish is on its way." : "Take a breath, then blow."}</span>
                <span className="wish-teddy"><Teddy /></span>
                {opened && <span className="wish-confetti" aria-hidden="true">✦　♡　✧　✿　✦</span>}
              </button>
            )}
            {page === 6 && (
              <div className={`final-scene ${opened ? "is-open" : ""}`}>
                <span className="final-sparkle final-sparkle-a" aria-hidden="true">✦</span>
                <span className="final-sparkle final-sparkle-b" aria-hidden="true">✧</span>
                <span className="final-sparkle final-sparkle-c" aria-hidden="true">♡</span>
                <article className="final-card">
                  <span className="final-bear"><Teddy /></span>
                  <span className="final-label">A NOTE FOR SHIVAM</span>
                  <span className="final-message">{opened ? "I’m really glad you’re here, and I hope today reminds you how loved you are. Keep this little note for whenever you need it." : "There’s one more thing I wanted you to know."}</span>
                  {opened && <span className="final-signoff">With all my love <b>♥</b></span>}
                </article>
                <span className="final-flower flower-a" aria-hidden="true">✿</span>
                <span className="final-flower flower-b" aria-hidden="true">✿</span>
              </div>
            )}
          </div>

          <div className="action-row">
            {page > 0 && (
              <button className="back-button" onClick={() => goTo(page - 1)} type="button">
                <span aria-hidden="true">←</span> Back
              </button>
            )}
            <button className="primary-button" disabled={!canContinue} onClick={continueStory} type="button">
              <span>
                {page === 0 ? (opened ? "Continue to the cake" : "Open your letter")
                  : page === 1 ? (opened ? "Find the little bear" : "Light the candles")
                    : page === 2 ? (opened ? "See a few memories" : "Find your bear")
                      : page === 3 ? "Write a birthday wish"
                        : page === 4 ? (wishSent ? "Make a wish together" : "Choose a wish first")
                          : page === 5 ? (opened ? "Read your birthday note" : "Make a wish")
                          : opened ? "Read it again" : "Open your note"}
              </span>
              <span className="button-arrow" aria-hidden="true">{isFinalPage && opened ? "↻" : "→"}</span>
            </button>
          </div>
        </div>

        <p className="little-footer">{isFinalPage && opened ? "HAPPY BIRTHDAY, SHIVAM" : "A LITTLE BIRTHDAY STORY"} <span aria-hidden="true">♡</span></p>
      </section>
    </main>
  );
}

export default App;
