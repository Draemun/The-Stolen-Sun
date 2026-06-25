function renderCover() {
  return `
    <section class="cover">
      <div class="mini-star">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="12" fill="#C8922A" opacity="0.9"/>
          <line x1="40" y1="4" x2="40" y2="22" stroke="#C8922A" stroke-width="2" opacity="0.6"/>
          <line x1="40" y1="58" x2="40" y2="76" stroke="#C8922A" stroke-width="2" opacity="0.6"/>
          <line x1="4" y1="40" x2="22" y2="40" stroke="#C8922A" stroke-width="2" opacity="0.6"/>
          <line x1="58" y1="40" x2="76" y2="40" stroke="#C8922A" stroke-width="2" opacity="0.6"/>
          <line x1="15" y1="15" x2="27" y2="27" stroke="#C8922A" stroke-width="1.5" opacity="0.4"/>
          <line x1="53" y1="53" x2="65" y2="65" stroke="#C8922A" stroke-width="1.5" opacity="0.4"/>
          <line x1="65" y1="15" x2="53" y2="27" stroke="#C8922A" stroke-width="1.5" opacity="0.4"/>
          <line x1="27" y1="53" x2="15" y2="65" stroke="#C8922A" stroke-width="1.5" opacity="0.4"/>
        </svg>
      </div>
      <h1 class="cover-title">The Stolen Sun</h1>
      <p class="cover-eyebrow">Icarus knew how it would end.  He flew at the sun anyway. <br> He knew what the fall would do to him in the end. <br> He also knew it was worth it to try, just to touch the sun once, if only once.</p>
    </section>
  `;
}
