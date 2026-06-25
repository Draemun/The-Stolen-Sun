const weaponTypes = [
  {
    name: 'Aevum',
    cls: 'aevum',
    tag: 'Common Military Issue',
    body: `<p>The most common military issue. Extended exposure to Aevum weapon fire causes time perception disorders in survivors. Some god-hunters who've been in too many Aevum firefights experience time strangely now.</p>`
  },
  {
    name: 'Profundis',
    cls: 'profundis',
    tag: 'Psychological Warfare',
    body: `<p>Less common, considered for psychological warfare. A Profundis blade wound floods the victim with their worst memories while they're trying to fight. Extended exposure causes other people's memories contaminating your own. Considered deeply unethical even by god-hunter standards, but used anyway.</p>`
  },
  {
    name: 'Humus',
    cls: 'humus',
    tag: 'Anti-God Standard',
    body: `<p>The god-hunters' bread and butter for fighting actual gods. Humus crystal in a weapon disrupts the connection between a god and their domain. A Humus blade wound on a god temporarily severs their domain access. This is how you get gods into a state where they can be Cored. Also used for the containment of those too grafted, which is a whole ethics problem nobody is addressing.</p>`
  },
  {
    name: 'Vertex',
    cls: 'vertex',
    tag: 'Barely Legal · High Risk',
    body: `<p>Barely legal; maximum damage output, catastrophic failure rate. The weapons themselves have a lifespan measured in uses. Vertex crystal under combat load destabilizes fast. A Vertex weapon that fails in your hands is an explosion centered on you. God-hunters who use Vertex weapons are considered either extremely skilled or extremely reckless.</p>`
  },
  {
    name: 'Limen',
    cls: 'limen',
    tag: 'Classified · Destroy After Use',
    body: `<p>God-Hunters only, with specific authorization required and to be destroyed after use. A Limen weapon damages the target's connection to their own existence. Wounds from Limen weapons don't heal normally. The body forgets how to close them. On gods it's worse: a god hit with a Limen weapon partially exists outside their own domain temporarily. This is the only weapon type that can affect a god's True Form.</p>`
  },
  {
    name: 'Anima',
    cls: 'anima',
    tag: 'Theoretical · Unbuilt',
    body: `<p>Theoretical. Nobody has successfully built one.</p>`
  }
];

function renderCrystals() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="crystals">
      <div class="chapter-header">
        <h2 class="chapter-title">Crystals</h2>
      </div>

      <p>Crystal is what divine material becomes on contact with the physical world. This is what godware is made from.</p>
      <p>Crystal grows under the right conditions, very slowly.</p>
      <p>The Solari are trying to farm those, which requires feeding. Nobody outside the Order knows what they're feeding it with.</p>

      ${divider}

      <div class="crystal-grid">
        <div class="crystal-card">
          <div class="crystal-gem"><svg viewBox="0 0 32 32"><polygon points="16,2 28,10 28,22 16,30 4,22 4,10" fill="none" stroke="#8B4A6B" stroke-width="1.5"/><polygon points="16,8 22,12 22,20 16,24 10,20 10,12" fill="rgba(139,74,107,0.3)"/></svg></div>
          <div><div class="crystal-name">Tear Crystal</div><p class="crystal-desc">More of an urban legend, found deepest in the Roots. Said to be formed from divine grief. Weeps, if you believe the people who've held it. The most destructive kind.</p></div>
        </div>
        <div class="crystal-card">
          <div class="crystal-gem"><svg viewBox="0 0 32 32"><polygon points="16,2 26,8 26,24 16,30 6,24 6,8" fill="none" stroke="#7A5518" stroke-width="1.5"/><polygon points="16,7 22,11 22,21 16,26 10,21 10,11" fill="rgba(122,85,24,0.4)"/><line x1="16" y1="2" x2="16" y2="30" stroke="#C8922A" stroke-width="0.5" opacity="0.5"/></svg></div>
          <div><div class="crystal-name">Ancient Fragment</div><p class="crystal-desc">Centuries of crystallization and deeper color. Valuable and loud to those who can hear it. These are the ones that keep Resonants awake.</p></div>
        </div>
        <div class="crystal-card">
          <div class="crystal-gem"><svg viewBox="0 0 32 32"><polygon points="16,2 28,12 24,28 8,28 4,12" fill="none" stroke="#F0B84A" stroke-width="1.5"/><polygon points="16,8 24,15 21,24 11,24 8,15" fill="rgba(240,184,74,0.25)"/><circle cx="16" cy="16" r="3" fill="rgba(240,184,74,0.6)"/></svg></div>
          <div><div class="crystal-name">Raw Fragment</div><p class="crystal-desc">Broken geode exterior, with a pulsing interior light. Casts shadows in wrong directions and makes nearby metal hum. Powerful.</p></div>
        </div>
        <div class="crystal-card">
          <div class="crystal-gem"><svg viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" fill="none" stroke="#A89878" stroke-width="1.5"/><rect x="11" y="11" width="10" height="10" fill="rgba(168,152,120,0.2)"/></svg></div>
          <div><div class="crystal-name">Processed Fragment</div><p class="crystal-desc">Guild-cut, refined and cleaned. The refining process muted its power.</p></div>
        </div>
        <div class="crystal-card">
          <div class="crystal-gem"><svg viewBox="0 0 32 32"><polygon points="16,2 20,14 30,16 20,18 16,30 12,18 2,16 12,14" fill="none" stroke="#D85A30" stroke-width="1.5"/><polygon points="16,8 18,14 24,16 18,18 16,24 14,18 8,16 14,14" fill="rgba(216,90,48,0.2)"/></svg></div>
          <div><div class="crystal-name">Scar Crystal</div><p class="crystal-desc">Crystals that manifested where divine power touched the world violently. Unstable and cheap.</p></div>
        </div>
        <div class="crystal-card">
          <div class="crystal-gem"><svg viewBox="0 0 32 32"><polygon points="16,4 26,16 16,28 6,16" fill="none" stroke="#3A3530" stroke-width="1.5"/><polygon points="16,10 22,16 16,22 10,16" fill="rgba(58,53,48,0.5)"/></svg></div>
          <div><div class="crystal-name">Dead Crystal</div><p class="crystal-desc">Spent and burned out. The poorest people build with it.</p></div>
        </div>
      </div>

      ${divider}

      <h3>Crystal in Weapons</h3>
      <p>Crystal in weapons works on the principle of domain expression: the weapon channels whatever category the crystal belongs to, amplifying and directing it.</p>
      <p>Raw crystal in a weapon is unstable and dangerous to the wielder. Processed crystals are safer but weaker. Military-grade weapons use specially refined crystal with containment architecture built into the weapon itself.</p>

      <div class="weapon-grid">
        ${weaponTypes.map(w => `
          <div class="weapon-card ${w.cls}">
            <div class="weapon-card-header">
              <div>
                <div class="weapon-card-name">${w.name}</div>
                <div class="weapon-card-tag">${w.tag}</div>
              </div>
              <span class="toggle-card-arrow">▼</span>
            </div>
            <div class="weapon-card-body">${w.body}</div>
          </div>`).join('')}
      </div>

      ${divider}

      <p>Mixed crystal weapons exist, but they're dangerous and expensive. Combining categories in a single weapon requires careful architecture to prevent the crystals from interfering with each other. The most sought after combination is Aevum-Humus; Aevum-Vertex exists in black market weapons and has a nickname among Fragment Runners that translates roughly to "last resort."</p>
      <p>Weapons degrade their crystals really quickly. There's 21 combinations: 6 mono types (one theoretical), and 15 duals (5 theoretical).</p>
      <p>The black market godware surgeon in the Undercroft basement has a sideline in managing weapon side effects for people who can't go to official Lens physicians because their weapon loadout isn't supposed to exist.</p>

    </section>
  `;
}
