function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

const godLaws = [
  { num: 'I', body: `Gods are bound to their category. An Aevum god can burn you but cannot drown you. A Profundis god cannot touch you in a desert. Humanity's strategy is engineering environments where the relevant god has no power.` },
  { num: 'II', body: `Divine power is not infinite. It's fueled by belief, prayer, and attention. Cutting off worship is like cutting supply lines. Gods weaken as humanity stops fearing them. Solari's replacement theology was the most effective weapon ever deployed.` },
  { num: 'III', body: `You can't kill the sun, but you can chip off a piece of it. The god is still out there, still functioning and angry, but missing something. Every mini-star is an ongoing wound on a deity and every fragment burned is felt.` },
  { num: 'IV', body: `Gods are bound by rules they set themselves, like old oaths, cosmic laws and the terms of the original pact. Humanity found the loopholes and used them. A god cannot strike someone who used to worship them, nor can it enter a space consecrated to another god, unless the deity allows it.` }
];

const godForms = [
  { name: 'True Form', body: `Incomprehensible for the human mind, a domain-made-manifest. The sea god IS the sea. They cannot hide among humans and they can barely interact with physical space without destroying it.` },
  { name: 'Avatar Form', body: `A chosen physical vessel, mostly animal. It's powerful but bound by physical rules now. The vessel can be wounded or killed, which destroys the avatar but not the god.` },
  { name: 'Diminished Form', body: `Gods weakened by lack of worship or fragment harvest can shrink to something almost human. It's dangerous for them but grants access to human spaces. A god walking in a city is a god in pain, or a god with a very specific agenda.` }
];

const majorGods = [
  { name: 'The Primordial Gods', tag: 'Neutral · All Six Categories', body: `<p>The first two gods ever created, perfect opposites of the others; they sacrificed pieces of themselves to the Tree of Life to create more gods, seeking help in their functions…and perhaps company.</p><p>They control all six categories and stay mostly neutral to the war going on. Their main concern is Finality and ensuring the protection of the Tree of Life.</p>` },
  { name: 'The Sundered One', tag: 'Aevum · Partially Harvested', body: `<p>An Aevum lesser god, partially harvested and feeling every single second of it. They enraged a stronger god, risking their life for it.</p><p>They're not the same god they were. The transmissions the Resonant receive come from them; whether those transmissions are threats, pleas, or something without a human name…nobody agrees. The Solari has recordings they won't share.</p>` },
  { name: 'The Pack', tag: 'Active · Guerrilla', body: `<p>Gods who banded together after many withdrew. They're the most active in the war, using guerrilla tactics, infiltration and working through the Resonant and secretly sympathetic humans.</p><p>They're the most human in their behavior. At least some members are currently in Solaria.</p>` },
  { name: 'The Hidden', tag: 'Diminished · Unknown Numbers', body: `<p>Gods who diminished themselves and walked into human cities. They're unknown in numbers and in agendas. Some have been hiding so long they've half-forgotten what they are, some are spies and fell in love with humans and stayed.</p><p>The god-hunters have a detection method with roughly 60% accuracy. The consequences of the other 40% are what you'd expect.</p>` },
  { name: 'The Consumed', tag: 'Fully Harvested · Trapped', body: `<p>Gods constantly fully harvested, unable to access their true form anymore. The sealed Roots beneath the city contain something the Solari says is residual energy.</p><p>…Residual energy does not leave marks on walls.</p>` }
];

function renderGods() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="gods">
      <div class="chapter-header">
      <h2 class="chapter-title">Gods</h2>
      </div>

      <p>Gods cannot be killed. They can be endlessly tortured, weakened to an almost human state, harvested repeatedly…but they always come back.</p>
      <p>No new gods are being created because of the war, but the existing ones are still out there, still powerful, still furious.</p>
      <p>Humanity is slowly winning. The gods still standing are the ones who survived this long, which means they're the dangerous ones.</p>
      <p>When a god is maimed, the severed part crystalizes and their divine substance becomes physical. This can be harvested, processed and used. A god respawns eventually, feeling everything that was taken from them.</p>
      <p>Solari's official theology says gods don't experience pain. Of course…</p>

      ${divider}

      <h3>The Four Laws</h3>
      <div class="law-grid">
        ${godLaws.map(l => `<div class="law-tile"><div class="law-num">${l.num}</div><p>${l.body}</p></div>`).join('')}
      </div>

      ${divider}

      <h3>Forms</h3>
      <div class="form-grid">
        ${godForms.map(f => `<div class="form-card"><div class="form-name">${f.name}</div><p>${f.body}</p></div>`).join('')}
      </div>

      ${divider}

      <h3>Schools of Thought</h3>
      <p>Over the decades, gods developed two schools of thought.</p>
      <p>Some are wrathful and fighting humanity directly, trying to reclaim their fragments by force. These are the ones that often get hunted. They're powerful and dangerous, but losing slowly.</p>
      <p>Others, realizing fighting is losing, started encouraging their own harvest. They let some of their parts spread into the population; they build influence slowly through thousands of hosts. They invest in humans, for some reason or another and are somewhat still worshipped.</p>

      ${divider}

      <h3>Major Gods</h3>
      ${majorGods.map(g => tc(g.name, g.tag, g.body)).join('')}

      ${divider}

      ${tc('True Death & the Core-Self', 'Classified · Most Dangerous Knowledge', `
        <p>Gods respawn from the Tree of Life; they can be maimed, harvested, weakened to almost human state, but they come back.</p>
        <p>But true death is possible if another god consumes their Self-Core, the crystallized center of a god's divine nature, the part that makes them specifically THEM rather than just a mass of divine energy.</p>
        <p>Every god has one. It's the hardest part to access, the most protected, the thing that would form last when they respawn and first when they die.</p>
        <p>When a god consumes another god's Core-Self, they absorb that god's domain. The more Core-Selves consumed the more powerful and the more fractured the god is.</p>
        <p>The consumed god is truly gone. The Tree of Life registers the loss as one fewer thread in the divine fabric and the Primordial Gods feel every true death.</p>
        <p>Too many true deaths and the cosmological system starts losing structural integrity. This is also what Finality does, but faster, and it annihilates domains instead of integrating them. A god consumed by Finality doesn't add to it. It just ceases. Which is worse.</p>
        <p>Some gods have been killing other gods to gain power. The war created cover for internal divine politics that were already complicated. The Pack is partly formed around mutual protection from this.</p>
        <p>The God-Hunters don't know about Core-Selves officially, but the Order do. The fact that divine true-death is possible and that the mechanism involves consuming the Core-Self is the most classified piece of information in Solaria, because if humans knew it was possible to truly kill a god, the war's logic changes entirely and becomes something nastier.</p>
        <p>Fragment Runners have folklore about "god hearts", objects of immense power found rarely in dead zones. They fetch extraordinary prices, but nobody who sells one knows exactly what they're selling.</p>
      `)}

    </section>`;
}
