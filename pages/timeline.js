const timelineEntries = [
  {
    era: 'The Pact',
    body: `Back in the day, it was chaos. There were gods, with powers beyond understanding, and humans, co-existing in the lands the gods so kindly gifted them. It wasn't a horrible time.\n\nHumanity and gods held a covenant: worship, sacrifices and reverence in exchange for fertile land, predictable seasons and calm seas.\n\nHumanity was small, the deal felt fair…so they accepted, and for centuries all functioned flawlessly. Turns out, humanity got good at things. Agriculture scaled, cities appeared…but to the big dogs, sacrifices started feeling less like gratitude and more like taxation.`
  },
  {
    era: 'The Fracture',
    body: `Humanity performed a ritual explicitly forbidden to them, trying to reach for divine knowledge.\n\nInstead, they gave fertile ground for the formation of Finality, something that was never meant to exist. The gods tried to block it before it was too late, then withdrew in disgust…and perhaps grief. They stopped the rains and made those bountiful harvests fail. Humanity grew too comfortable and needed to be humbled.\n\n…It did not work.`
  },
  {
    era: 'Starvation',
    body: `The crops failed, the seas became hostile, the sun was in a constant ecliptic state with no more day nor night.\n\nHumanity, once cooperating with nature, fractured into desperate groups, constantly at each other's throats. Resources dwindled and so did their numbers, so much so the gods didn't even need to attack them.\n\nBut out of that desperation, the first communities reformed around shared survival. And the first God Hunters appeared, people so done begging for mercy that decided to take instead.`
  },
  {
    era: 'Year Zero',
    body: `There was once an unnamed lesser god, left dying after a forgotten skirmish with their kin, leaking their power into the world. A human could never wish to murder a god…but a higher god could absolutely destroy them.\n\nThe lesser god was found by engineers, desperate survivors and heretics, who built a containment vessel, capturing them, burning them and turning their essence into pure light. That was the first community to light up after decades of darkness and cold.\n\nThat moment started the myth: some saw that desperate bunch as heroes, others say they damned everyone. The truth might be in between.`
  },
  {
    era: 'The Long War',
    body: `The gods noticed one of theirs was being used for energy. After all, how dare they desecrate one of their kind?\n\nBut humanity had momentum and greed, and the gods, bound by the covenant and their own domains, could not simply erase what was done. Not even the Primordial Gods could step in without risking releasing something far stronger and more dangerous into the world.\n\nSo the war began, with no clear frontlines. Some gods have gone MIA. Humanity controls more territories than ever.`
  },
  {
    era: 'Now',
    body: `Things are uneasy and complicated for everyone.\n\nThe system humanity depends on is silently beginning to fail, and the people running it are doing horrible things to keep it going.\n\nMost of mankind doesn't even know what's going on.`
  }
];

function renderTimeline() {
  return `
    <section class="chapter" id="timeline">
      <div class="chapter-header">
        <h2 class="chapter-title">Timeline</h2>
        <p class="chapter-lead">Humanity overreached, refused to repent and reacted furiously. They stole the light to power their machines. Now they're locked in a war neither side can cleanly win, running on power that was never theirs. And something they accidentally made in the process is waking up underneath them.</p>
      </div>

      <div class="tl-track">
        <div class="tl-line"></div>
        ${timelineEntries.map((e, i) => `
          <div class="tl-node-wrap">
            <button class="tl-node" data-index="${i}" aria-expanded="false">
              <span class="tl-dot"></span>
              <span class="tl-era">${e.era}</span>
            </button>
          </div>
        `).join('')}
      </div>

      <div class="tl-panel" id="tl-panel" hidden>
        <div class="tl-panel-era" id="tl-panel-era"></div>
        <div class="tl-panel-body" id="tl-panel-body"></div>
      </div>
    </section>
  `;
}

function initTimeline() {
  const nodes = document.querySelectorAll('.tl-node');
  const panel = document.getElementById('tl-panel');
  const panelEra = document.getElementById('tl-panel-era');
  const panelBody = document.getElementById('tl-panel-body');
  let active = null;

  nodes.forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.index;
      if (active === i) {
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('active');
        active = null;
        return;
      }
      nodes.forEach(n => { n.setAttribute('aria-expanded', 'false'); n.classList.remove('active'); });
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('active');
      active = i;
      const entry = timelineEntries[i];
      panelEra.textContent = entry.era;
      panelBody.innerHTML = entry.body.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
      panel.hidden = false;
    });
  });
}

document.addEventListener('routeRendered', () => {
  if (document.getElementById('tl-panel')) initTimeline();
});
