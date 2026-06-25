const factionsData = [
  { name: 'The Solari' , color: 'var(--gold)', body: `<p>The Solari is a guild-church with ruling power that controls the mini-star, power distribution, and…everything honestly.</p><p>It's internally fracturing between conservatives who want status quo, expansionists who want to harvest more gods, and a secret sect, the Order, who have been listening to what comes through the star and, terrified by what it's saying and doing terrible things to contain it.</p>` },
  { name: 'The Order', color: 'var(--ember)', body: `<p>They compose the inner Circle of the Solari that knows what nobody else does: the mini-star is destabilizing slowly, the Sundered One's transmissions are becoming coherent, and the crystallization in Integrated people is a side effect of the god doing something with their fragment.</p><p>Finality is in the Roots and the negotiations with it have stalled badly. They've been managing this for decades under the belief that containment is better than revealing truth.</p><p>Back then, they'd summoned Finality as a weapon to win a war they wanted to start, but it didn't take orders. Now they're sitting on top of it trying to keep it contained while building something they think will let them ascend before it wakes fully.</p>` },
  { name: 'The God-Hunters', tag: 'Military-Industrial · Frontier', color: 'var(--crystal-earth)', body: `<p>It's a military-industrial organization officially licensed to find and harvest divine fragments. They control frontier territory, maintain their own armies and hold exclusive rights to certain dead zones.</p><p>Their relationship with the Solari is…complicated, as they are officially subordinate, but practically autonomous.</p>` },
  { name: 'The Lens', tag: 'Godware Corporation · Monopoly', color: 'var(--crystal-sea)', body: `<p>A Godware corporation who has monopoly over raw fragments; they refine them into usable modifications and licensed godware physicians control the legal modification market.</p><p>They're deeply invested in keeping black market grafts illegal. They're sitting on research about crystallization they are absolutely not sharing.</p><p>Their maintenance contracts mean they know exactly where every registered godware user is and how their body is functioning at all times.</p>` },
  { name: 'The Resonants', tag: 'Fragment-Sensitive · Monitored', color: 'var(--crystal-profundis)', body: `<p>Fragment-Sensitive people who can hear through the fragments; they're considered mad.</p><p>The Solari monitors them closely, so much so few have begun to disappear…</p>` },
  { name: 'The Grafted', tag: 'Godware Users · Hunted', color: 'var(--crystal-storm)', body: `<p>They're a demographic of people with godware, ranging from single legal eye-mods to walking disasters held together by spite and divine power.</p><p>Crystallization spreads from graft sites into surrounding tissue. The Lens calls it Integration and says it's cosmetic, but it's false information.</p><p>People so saturated with godware cross a biological threshold where they end up more god than human. (They're called the Integrated.)</p><p>Gods don't recognize them as kin and they want their parts back, while humans see them as unpredictable and dangerous. Both sides hunt them.</p><p>Some are being kidnapped and fed into the crystal farms or to the Perfect Machine as living power sources. The ones who escaped that fate are the angriest people alive.</p>` },
  { name: 'Fragment Runners', tag: 'Black Market · Frontier', color: 'var(--text-secondary)', body: `<p>Those who go to the frontier, find raw divine material and bring it back to sell it to people who can't afford guild-processed godware. They're extremely dangerous.</p><p>Every runner carries a dead crystal. Superstition says it confuses divine detection. It probably doesn't work but they do it anyway.</p>` }
];

function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

function renderFactions() {
  return `
    <section class="chapter" id="factions">
      <div class="chapter-header">
        <h2 class="chapter-title">Factions</h2>
      </div>
      <div class="faction-grid">
        ${factionsData.map(f => `
          <div class="faction-card" style="--faction-color:${f.color}">
            <div class="faction-card-header">
              <div><div class="faction-card-name">${f.name}</div><div class="faction-card-tag">${f.tag}</div></div>
              <span class="toggle-card-arrow">▼</span>
            </div>
            <div class="faction-card-body">${f.body}</div>
          </div>`).join('')}
      </div>
    </section>`;
}
