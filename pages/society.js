function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

function renderSociety() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="society">
      <div class="chapter-header">
        <h2 class="chapter-title">Society</h2>
      </div>

      <h3>Animals</h3>
      <p>Animals in this world exist on a spectrum of divine influence. The closer to god-territory, the stranger they get.</p>

      ${tc('Normal Range', 'Recognizable · Slightly Off', `
        <p>Cats, dogs, birds. Slightly off in behaviors, more aware, longer lived than they should be, occasionally demonstrating knowledge they shouldn't have.</p>
        <p>The Humus godware that lets you speak with animals reveals that even ordinary animals are having conversations humans were never meant to hear.</p>
      `)}
      ${tc('Border Animals', 'Edge of God-Territory · Saturated', `
        <p>Creatures that live at the edge of god-territory and have been saturated with divine influence over generations. Harder to hurt, harder to frighten, occasionally capable of things that their species shouldn't be capable of.</p>
      `)}
      ${tc('Avatar Vessels', 'Could Be a God · Read the Signs', `
        <p>Gods that enter an animal form. This means any animal in the frontier could potentially be a god wearing that shape. God-hunters learn to read the signs in behavior and awareness, or the way other animals respond to them. Getting it wrong goes badly.</p>
      `)}
      ${tc('Divine Creatures', 'Between Spaces · Old Faith Has Names', `
        <p>Beings that exist in the space between, sustained by the same kind of accumulated divine influence that created Finality but smaller. Some are in the Roots. Some wander dead zones. Some are in the deep ocean. The old faith has names for them. The Solari calls them environmental divine contamination.</p>
        <p>Animals don't experience the world the way humans do. Their relationship to the divine is completely different. There's no worship, no theology, just a direct experience of the world's divine nature. A Humus-grafted person who talks to animals a lot starts seeing the world differently.</p>
      `)}

      ${divider}

      <h3>Godware on Children</h3>
      <p>Godware on children is frowned upon but increasing. This is one of the most disturbing social trends in Solaria.</p>

      ${tc('The Incentive', 'Better Prospects · Class Marker', `
        <p>A child with legal godware has better job prospects, better guild access, better everything. The Lens markets specifically to this anxiety without explicitly targeting children: materials about "early integration" and "developmental enhancement" that are technically about adults but everyone knows what they're really selling.</p>
        <p>The God-Hunters have an unofficial youth program. Not godware yet but training and mentorship, gradually normalized. By the time formal recruitment happens the child has been in the ecosystem for years.</p>
        <p>In the Nave, early godware is becoming a class marker. Families who can afford early legal integration for their children, carefully managed by Lens physicians, are treating it as an investment.</p>
        <p>In the Undercroft, it's desperation and black market risk. Parents who get their children early black market grafts because legal ones are unaffordable, the streets are dangerous and a child with no protection is a child at risk. Some of those children end up hitting the threshold faster than anyone expected and some of them disappear.</p>
      `)}
      ${tc('The Consequences', 'Faster Integration · No Baseline', `
        <p>Some children of Integrated parents show crystallization at birth or shortly after. The Lens calls them Pre-Integrated and has a whole specialized division for managing them that is absolutely not about harvesting data on inherited integration patterns.</p>
        <p>Legal grafts at young ages integrate differently than adult grafts. The body is still developing and the crystal grows with it instead of into it. This sounds like it might be safer, but it actually means the integration is more complete, less separable, more identity-defining. An adult with godware can sometimes imagine who they were without it. A child who grew up integrated cannot.</p>
        <p>The crystallization in children progresses faster. Their immune systems don't fight it the same way. By adolescence, children with early integration show Integration levels that adults twice their age haven't reached.</p>
        <p>Children who are Resonant before they get godware are in the most complicated position. The godware amplifies the Resonance and they hear the signals louder, sooner, with less framework to process what they're receiving. The Solari's monitoring program has a children's division that everyone pretends is a health initiative.</p>
      `)}

      ${divider}

      <h3>Food</h3>
      ${tc('What People Eat', 'Factory Farmed · Functional · Flavourless', `
        <p>Factory farming powered by Humus and Aevum crystal has accelerated food growth, artificial light cycles, and climate control. The food works, it sustains people, but it loses its flavour.</p>
        <p>There's a black market for real food. Frontier communities that still farm traditionally, Humus-grafted people who can coax growth from difficult soil, those who maintain actual gardens sell what they have, albeit more expensively.</p>
        <p>The Nave has restaurants. The Undercroft has communal feeding halls run by guilds or the Solari's welfare arm. The food is the same everywhere. The portion sizes…aren't.</p>
        <p>Water infrastructure is massive and carefully maintained. Clean water access correlates almost exactly with social level. The Spire has pristine water. Parts of the deep Undercroft have water that tastes like dirt and has mild Profundis side effects if consumed long term.</p>
      `)}

      ${divider}

      <h3>Economy</h3>
      ${tc('Official Economy', 'Digital · Tracked · Logged', `
        <p>Credits are digital, tracked, controlled by the Solari's financial infrastructure, which means every transaction is logged, traceable, and available to the right people with the right access.</p>
      `)}
      ${tc('The Informal Economy', 'Favors · Fragments · Untracked', `
        <p>The Undercroft runs on a dual economy: official credits for anything involving guilds or the Solari's systems, and informal exchange for everything else. Favors, crystal fragments, skills, information…The Unmarked network has its own internal currency that isn't tracked.</p>
        <p>Crystal has economic value beyond currency. A raw Vertex fragment is worth a specific number of credits but it's also worth specific favors from specific people and those two values don't always match.</p>
      `)}
      ${tc('The Disappeared', 'Integrated · Economically Erased', `
        <p>The Integrated that disappear are often economically desperate. No guild will register them officially once Integration reaches visible levels. Credit access gets restricted, the Lens flags their accounts. They fall into the informal economy and then out of the formal city entirely. The economic marginalization makes the disappearances easier. Nobody with official credit history vanishing requires paperwork.</p>
      `)}

    </section>`;
}
