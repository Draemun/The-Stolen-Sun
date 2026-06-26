const categoryData = [
  {
    cls: 'aevum',
    name: 'Aevum',
    domains: 'Light · Fire · Time · Cycles',
    body: `<p>Aevum is the eldest category and the most worshipped. (Now the most harvested.)</p>
      <p>Aevum gods experience time differently, which means the Sundered One has lived through every second of imprisonment fully conscious and fully feeling every millisecond of it.</p>
      <br>
      <p>Its crystal color ranges from amber to white-gold and it's mostly found in Solaria.</p>
      <p>Raw Aevum crystal casts light that shows things slightly before they happen if caught at the right angle, but it's a skill that needs practice.</p>
      <br>
      <p>Godware offers speed, fire, light projection, temporal intuition (knowing half a second before something happens). It's really popular and really addictive. Withdrawal from it makes time feel incredibly slow.</p>
      <p><strong>Corrupted</strong>: wounds won't close because the tissue is stuck in the moment of injury, and burn wounds open near graft sites. Pupils don't dilate in the dark and sleep becomes really hard, because they'll see lights, even in the darkest areas.</p>`
  },
  {
    cls: 'profundis',
    name: 'Profundis',
    domains: 'Water · Memory · Depth · The Unconscious',
    body: `<p>Mare gods are associated with memory, grief, the feelings people carry.</p>
      <br>
      <p>The crystals range from deep blue to black, almost liquid looking and constantly cold. Hold a raw one for long enough and you'll start feeling things that don't belong to you.</p>
      <br>
      <p>Godware offers perfect memory, emotional reading of spaces and people, underwater breathing and the ability to find lost things, but you start accumulating other people's memories alongside your own.</p>
      <p><strong>Corrupted</strong>: the skin is always cold. In heavy cases, they frost over, and they cannot get warm. Emotionally numb, no matter what happens.</p>`
  },
  {
    cls: 'humus',
    name: 'Humus',
    domains: 'Earth · Growth · Body · Physical Space',
    body: `<p>The most present category. Humus gods never fully withdrew because they literally are the physical world. The word "human" shares its root with "humus" and humanity named itself after Terra.</p>
      <br>
      <p>The crystals range from green to brown, organic and warm to the touch. They can grow in the light and two pieces left near each other will eventually touch. Terra crystals in dead zones, growing into massive wild formations, suggest Humus gods aren't entirely gone from those places.</p>
      <br>
      <p>Godware offers strength, healing acceleration, feeling geological movement, plant growth, more resistance to physical damage, the ability to speak with animals.</p>
      <p><strong>Corrupted</strong>: crystals pushing through graft sites into surrounding tissue, creating big clusters that cannot be removed. The body consumes itself in small ways, redirecting resources to the crystals growing.</p>`
  },
  {
    cls: 'vertex',
    name: 'Vertex',
    domains: 'Storm · Chaos · Change · Destruction',
    body: `<p>The most dangerous and unstable crystal, most valuable for weapons.</p>
      <br>
      <p>The crystals are purple-white. No two pieces behave the same. It has the maximum power output of any crystal type. If not contained and under heavy load, it has 30 seconds before a catastrophic failure.</p>
      <br>
      <p>Godware offers raw power output, electrical manipulation, probability interference (nudging chance slightly), vision behind walls.</p>
      <p><strong>Corrupted</strong>: tremors that aren't caused by seizures. The body is unable to hold its own structure, and chance is messed up. They can be extremely lucky or absurdly unlucky.</p>`
  },
  {
    cls: 'limen',
    name: 'Limen',
    domains: 'Dreams · Fate · Secrets · The Space Between',
    body: `<p>Everyone is most afraid of it and least willing to discuss it.</p>
      <p>Limen gods are predators. They were old when Aevum gods were young and they exist partially outside the physical world at all times. The God Hunters are authorized to destroy Limen crystal on sight.</p>
      <br>
      <p>The crystals are perfectly colorless. Things seen through Limen crystal include accurate information about things happening elsewhere, things that happened before, things that haven't happened yet. Those who work with Limen crystal stop sleeping, because when they close their eyes they see more than when they're open.</p>
      <br>
      <p>Godware grants invisibility, death-sense, moving through spaces that shouldn't be passable, and limited precognition.</p>
      <p><strong>Corrupted</strong>: wounds close, leave no record of damage but all the pain and the effects of it. The body is stuck in time, so much so it avoids death. It's a horrible fate.</p>`
  },
  {
    cls: 'anima',
    name: 'Anima',
    domains: 'Consciousness · Soul · Connection · Creation',
    body: `<p>The rarest category and possibly the original.</p>
      <p>Anima gods' domain is interiority itself. Their domain is every mind that exists.</p>
      <p>Nobody has successfully harvested an Anima god. The three documented attempts ended with god-hunters losing themselves, as if becoming convinced they were someone else. Those incidents were classified as deaths.</p>
      <br>
      <p>The crystals are iridescent and change based on who's holding it. They're warm or cold depending on the emotional state of the person nearest to it.</p>
      <br>
      <p>Godware is theoretical only. The black market speculates: perfect empathy, rewriting memories, speaking any language including ones that don't exist yet, making someone believe anything.</p>
      <p><strong>Corrupted</strong>: faces become harder to read, as if people kept making the same expression. In extreme cases, the people around the user turn into a collective of minds, a sort of hivemind that responds to them.</p>`
  }
];

function renderCategories() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="categories">
      <div class="chapter-header">
        <h2 class="chapter-title">The Six Categories</h2>
      </div>

      <p>Everything that exists maps onto six macro-categories.</p>

      ${divider}

      ${categoryData.map(c => `
        <div class="category-entry ${c.cls}">
          <div class="toggle-card-header">
            <div>
              <div class="category-name">${c.name}</div>
              <div class="category-domains">${c.domains}</div>
            </div>
            <span class="toggle-card-arrow">▼</span>
          </div>
          <div class="toggle-card-body">${c.body}</div>
        </div>
      `).join('')}

      ${divider}

      <h3>Structure</h3>
      <p>Anima sits at the center connecting all others.</p>
      <p>You need Aevum to experience time, Profundis to hold memory and Humus to have a body. Vertex is needed to change and grow and Limen to understand you will end.</p>
      <p>Without Anima the other five are just forces instead of experience.</p>
      <br>
      <p>This is also why Anima gods were never successfully harvested: you can't extract consciousness from the system that produces consciousness.</p>
      <p>Only the Primordial Gods can control all six at once.</p>

    </section>
  `;
}
