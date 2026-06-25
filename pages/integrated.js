function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

function renderIntegrated() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="integrated">
      <div class="chapter-header">
        <h2 class="chapter-title">The Integrated</h2>
        <p class="chapter-lead">People so saturated with godware they crossed a biological threshold where they end up more god than human. Gods don't recognize them as kin and want their parts back. Humans see them as unpredictable and dangerous. Both sides hunt them.</p>
      </div>

      ${tc('The Threshold', 'When You Stop Being Just Human', `
        <p>Godware works on a spectrum. A little divine material is functional, manageable. At some point the crystal stops being something you carry and starts overriding who you are.</p>
        <p>The Lens calls it Integration and frames it as cosmetic. It is not cosmetic. The crystallization spreading from graft sites into surrounding tissue is the god's substance rewriting the host's biology, slowly, irreversibly.</p>
        <p>It's a gradual shift where one day you realize the crystal has opinions and some of them feel like yours.</p>
      `)}

      ${divider}

      ${tc('How You Get There', 'Legal · Black Market · Inevitability', `
        <p>Legal grafts are small and controlled. The Lens manages the rate of integration carefully, mostly because a fully Integrated person stops being a customer and becomes a liability.</p>
        <p>Black market grafts get you there faster. Larger fragments, unprocessed, inserted into a body that wasn't prepared for them. The power is real, but so is the acceleration.</p>
        <p>Some people hit the threshold without trying. Accumulated legal grafts over years, a childhood integration that grew with the body, a single black market graft that went further than expected...The Integrated are not all people who chose this.</p>
        <p>The Lens knows exactly when someone is approaching the threshold. Their maintenance contracts give them full biological monitoring. They flag the accounts, restrict credit access, and stop offering appointments. By the time someone realizes what's happening, the formal economy has already let them go.</p>
      `)}

      ${divider}

      ${tc('How the World Treats Them', 'Hunted From Both Sides', `
        <p>Gods don't recognize them as kin, but rather as stolen pieces, and they want those pieces back. The divine substance in an Integrated person still registers as part of the god it came from and the god can feel it.</p>
        <p>Humans see them as unpredictable and dangerous. Visible crystallization reads as contamination. Guild registration closes off and housing becomes difficult. The Solari's official position is that heavy Integration is a personal health failure and the result of poor choices.</p>
        <p>God-hunters have authorization to contain Integrated people above certain thresholds. Contain is the official word. What it means in practice depends on who's doing it.</p>
      `)}

      ${divider}

      ${tc('The Crystal Farms & the Perfect Machine', 'Living Power Sources', `
        <p>Some Integrated people are kidnapped from the Undercroft. The disappearances are basically invisible: no official credit history, no guild registration, no one filing reports.</p>
        <p>They end up in one of two places. The Crystal Farms use Integrated bodies as accelerants for crystal growth. The divine saturation in their tissue produces faster, denser crystal than any other method. They are kept alive because living hosts produce more than dead ones.</p>
        <p>The Perfect Machine uses them as power sources for the godhood transfer process. The early attempts burned through unmodified humans instantly. Integrated people last longer. The ones whose minds survived the process in any functional state are the ones the Order is most interested in now.</p>
        <p>The Solari created the conditions that produced Integration through unregulated godware, criminalized the result, then began harvesting the victims to power a machine that would benefit only the Order. The people they broke are literally fueling the system's apotheosis.</p>
      `)}

      ${divider}

      ${tc('The Ones Who Got Away', 'The Angriest People Alive', `
        <p>Some escaped the farms and some figured out what was happening early enough to disappear into the Undercroft's informal economy before the Lens could flag them.</p>
        <p>Some work with Fragment Runners, some have found their way to The Pack and some are just surviving, which in their circumstances is already a full-time occupation.</p>
        <p>The most stable ones are those whose human and divine natures are corrupting in ways that counterbalance each other. The internal tension is exhausting. It is also, sometimes, the thing keeping them functional.</p>
      `)}

    </section>`;
}
