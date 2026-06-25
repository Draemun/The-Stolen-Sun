function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

const solariaLevels = [
  { level: 'Level I', name: 'The Spire', sub: 'Apex', body: `<p>That's where the mini-star lives, contained in a cathedral-machine. Guild-priests who maintain it live here and nobody enters without permission.</p><p>Every arch, every doorway, every sight line oriented upward as if the structure itself is an act of worship toward what it imprisons.</p>` },
  { level: 'Level II', name: 'The Nave', sub: 'Upper City', body: `<p>The wealthy, guild masters and politicians live here. You can find clean hardware, legal markets, and actual sunlight.</p><p>Medici palace aesthetics but frescoes are circuit diagrams in gold leaf and crystals are used decoratively.</p><p>Private gardens have engineered nature, where trees grow toward fragment-light instead of sunlight.</p>` },
  { level: 'Level III', name: 'The Undercroft', sub: 'Lower City', body: `<p>Centuries of construction with no master plan. Crystal can be found everywhere but it's the cheap kind.</p><p>Guild territories are marked by crystal colors and it shifts as you cross from one faction's streets to another.</p><p>It's loud, crowded and smells like ozone, street food and something faintly electric.</p>` },
  { level: 'Level IV', name: 'The Roots', sub: 'Below Ground', body: `<p>You are not supposed to be here.</p><p>It's the original wound, where stone and crystal grew wild and their formations were as big as a building. The flora and fauna there is luminescent.</p><p>The crystal has faces in it if you look too long, but the Solari says that's pareidolia.</p><p>Finality is here, still assembling itself.</p>` }
];

function renderLocations() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
  <section class="chapter" id="locations">
      <div class="chapter-header">
        <h2 class="chapter-title">Locations</h2>
      </div>

      <h3>Solaria</h3>
      <p class="chapter-lead">The City of Dreams and City of Graves</p>
      <p style="margin-top:1rem">Solaria was built on where the Sundered One fell and the first mini-star was lit here. The city grew around it and everything else on the planet exists in relation to Solaria.</p>

      ${divider}

      <div class="solaria-map">
        ${solariaLevels.map(l => `
          <div class="solaria-level">
            <div class="solaria-level-header">
              <span class="solaria-level-num">${l.level}</span>
              <span class="solaria-level-name">${l.name}</span>
              <span class="solaria-level-sub">${l.sub}</span>
              <span class="toggle-card-arrow">▼</span>
            </div>
            <div class="solaria-level-body">${l.body}</div>
          </div>`).join('')}
      </div>

      ${divider}

      <h3>Beyond the City</h3>
      ${tc('The Territories', 'Feudal · Dependent', `<p>Beyond Solaria, feudal lords buy fragments from the city. They're resentful and incredibly dependent. The relationship between Solaria and its territories is the imperial center and province. Protection? More like extraction.</p>`)}
      ${tc('The Frontier', 'God-Controlled · Lawless', `<p>The places gods still partially control. It's dangerous and lawless. This is where god-hunters operate and black market fragments originate. The physical world behaves differently here.</p>`)}
      ${tc('Dead Zones', 'Scorched · Abandoned', `<p>Places where a god scorched or shattered in retaliation. Crystal grows wild here, massive formations screaming in frequencies animals flee. Nobody stays long.</p>`)}

      ${divider}

      <h3>World Conditions</h3>
      ${tc('The Sky', 'Permanent Eclipse', `<p>The sky stays in permanent eclipse nowadays. There's no natural day/night cycle anymore and the city runs on artificial light.</p><p>The Solari's official position is that the eclipse is a temporary condition that will resolve when the war is won.</p>`)}
      ${tc('The Weather', 'Wrong · God-Influenced', `<p>The weather still exists but it's wrong. Rain happens but it's warm and slightly the wrong color.</p><p>Storms are Vertex god activity and they're more frequent and more violent than natural storms should be. The anti-storm infrastructure in Solaria is extensive. In the Undercroft people can tell a natural storm from a god by sound.</p>`)}
      ${tc('The Stars', 'Gone · Theological Question', `<p>The Stars are gone. The Primordial Gods are associated with what's above the eclipse. Whether the stars still exist above it is a theological question the Solari avoids carefully.</p>`)}
      ${tc('The Seas', 'God-Controlled · Navigable', `<p>The seas are god controlled but navigable with the right technology. They have insane anti-tsunami tech, early warning systems, detection arrays that read water pressure changes before they become waves.</p><p>Ships are heavily reinforced with Humus crystal which grounds the vessel against Profundis interference. Navigation uses Profundis godware. The best navigators are slightly mad from accumulated ocean memories that aren't theirs. Fragment Runners who specialize in sea routes are their own subspecialty. They're rarer and more expensive.</p><p>The deep ocean is god territory. Humans only dare threading on the surface. Other continents probably exist. Whether anyone has successfully made extended contact is a question. There might be civilizations that handled the Fracture completely differently but…The seas being god-controlled means Solaria doesn't know for certain.</p>`)}

    </section>`;
}
