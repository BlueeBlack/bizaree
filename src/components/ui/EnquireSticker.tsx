/** Spinning circular "ENQUIRE NOW" sticker linking to the enquiry form. */
export function EnquireSticker() {
  return (
    <a className="sticker" href="#contact" aria-label="Enquire now">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path
            id="stickerCircle"
            d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
          />
        </defs>
        <circle cx="60" cy="60" r="58" className="sticker-bg" />
        <text className="sticker-text">
          <textPath href="#stickerCircle">
            ENQUIRE NOW ✦ ENQUIRE NOW ✦ ENQUIRE NOW ✦
          </textPath>
        </text>
        <path
          className="sticker-drop"
          d="M60 44c0 0-9 11-9 16.5a9 9 0 0 0 18 0C69 55 60 44 60 44Z"
        />
      </svg>
    </a>
  );
}
