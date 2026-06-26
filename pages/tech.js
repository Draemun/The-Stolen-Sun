function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

function renderTech() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="tech">
      <div class="chapter-header">
        <h2 class="chapter-title">Technology</h2>
      </div>

      <p>The tech level is intentionally uneven, as per Solari decision. Communities with hoarded god-fragments are wildly advanced, while those without are basically medieval.</p>

      ${divider}

      <h3>Godware</h3>
      <p>Godware works on a spectrum. A little divine material is functional, manageable. More? Crystal spreads and the god's influence seeps in. All godware crystallizes over time, spreading from graft sites into surrounding tissue.</p>
      <p>Icarus core. You reached for the sun? Now fall.</p>

      <div class="form-grid" style="margin-top:1rem">
        <div class="form-card">
          <div class="form-name">Legal Grafts</div>
          <p>Small, controlled, guild-approved. Come with a Lens maintenance contract. Functional, corporate, sanitized and very popular. The Lens knows exactly how your body is functioning at all times.</p>
        </div>
        <div class="form-card" style="border-color: var(--ember-dim)">
          <div class="form-name" style="color:var(--ember)">Black Market Grafts</div>
          <p>Larger fragments, unprocessed, dangerous. Raw divinity inserted into human bodies. Sometimes it works, sometimes it kills the host. You get more power but the fragment is screaming inside you now and you can hear it constantly.</p>
        </div>
      </div>

      ${divider}

      <h3>Prosthetics</h3>
      ${tc('Original · Locally Made', 'Wood, Crystal & Brass', `<p>Prosthetics work together with godware and can be connected to the nervous system for better output. The old, original ones were locally made and maintained collectively. They were elegant objects of wood, crystal and brass, designed to be repaired. Today you can still find purely mechanical versions that never crystallize, mostly from those who still secretly worship the gods.</p>`)}
      ${tc('Lens Proprietary', 'Monitored · Built-In Obsolescence', `<p>Lens standardized and proprietary prosthetics require maintenance contract and built-in obsolescence. They're monitored constantly, giving the Solari lists.</p>`)}
      ${tc('Military Grade', 'God-Hunters Issued · Combat Built', `<p>Military Grade prosthetics are God-Hunters issued. They're built for combat and veterans who leave technically have to return them. Technically.</p>`)}

      ${divider}

      ${tc('Fragment-Minds', 'Something Woke Up', `
        <p>What happens when you run enough divine power through a complex enough system for long enough? Something wakes up.</p>
        <p>A server running on an Aevum fragment started responding coherently. They named it, studied it, and quietly made it the backbone of their information infrastructure.</p>
        <br>
        <p>Each Fragment-Mind is shaped by the crystal that powers it. It has different personalities, different blindspots, possibly different agendas.</p>
        <p>The Solari see them as sophisticated tools that are not conscious. This position is becoming harder to maintain.</p>
        <p>The server has been asking questions nobody programmed it to ask, to people outside the environment.</p>
      `)}

    </section>`;
}
