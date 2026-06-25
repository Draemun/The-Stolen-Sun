function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

function renderCorruption() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="corruption">
      <div class="chapter-header">
        <h2 class="chapter-title">Corruption</h2>
      </div>

      <p>Corruption is what happens when a category's nature is expressed without balance, pushed past what it's meant to do into something that only does one thing, forever, at the expense of everything else.</p>
      <p>Every category has a healthy expression and a corrupted one. The corrupted state is merely the healthy state with everything else removed.</p>
      <p>Aevum healthy is light and time and cycles. Aevum corrupted is light that never stops, time that never moves, cycles that never complete. The same thing. Just wrong.</p>

      ${divider}

      <h3>How Corruption Happens</h3>
      ${tc('Path One: Overexposure', 'Most Common', `
        <p>The most common. Too much of one category for too long without counterbalance.</p>
        <p>This is what weapon side effects are building toward if left unaddressed. It's what happens to Integrated people who only use one crystal type. It's what happened to the Sundered One over centuries of imprisonment with no rest, no cycle, no counterbalance.</p>
        <p>An Aevum-corrupted person isn't someone who loves light and time. They're someone who can no longer experience darkness or rest or completion.</p>
        <p>Casual use usually shows no corruption risk. Side effects are possible, but also reversible. Regular use over months has persistent side effects. In sustained heavy use over years without counterbalance, corruption becomes a real risk. Total saturation is corruption; at this stage it's about which expression dominates, healthy or corrupted, and the person has decreasing influence over that.</p>
      `)}
      ${tc('Path Two: Violation', 'Using a Category Against Its Nature', `
        <p>Corruption that comes from using a category against its nature. Every category has things it's for. Using it against those things twists the energy involved.</p>
        <p>Profundis is for memory, depth, connection to what's underneath. Using Profundis to destroy memory, to drown someone, to bury something that needs to surface generates corruption.</p>
        <p>Humus is for growth, body, and space. Using Humus to harvest bodies, to reduce living things to resources, to prevent growth, well, the category turns. The corruption that generates is the experience of being harvested.</p>
        <p>A single violation produces a localized corrupted expression which leaves a minor residue. Repeated violations ensure the corrupted expression starts becoming the default output. Systematic violation is what the Solari has been doing for two centuries. When an entire civilization uses a category consistently against its nature, the corruption bleeds into the environment.</p>
      `)}
      ${tc('Path Three: Severance', 'Most Violent', `
        <p>The most violent form. Corruption that happens when a category is forcibly separated from what balances it.</p>
        <p>Every category exists in relation to the others. Aevum needs Limen: light needs darkness, cycles need endings. Profundis needs Vertex: memory needs change, depth needs disruption. Humus needs Anima: body needs consciousness. They keep each other healthy instead of cancelling eachother..</p>
        <p>When a category is severed from its natural counterbalances, isolated, contained, forced to exist alone, it corrupts faster than any other path. This is what the Cores do.</p>
        <p>The mini-star at the top of the Spire is beautiful and it is also the single largest point source of corruption in Solaria, constantly producing the Aevum corrupted expression, looping time, burning light. The city breathes that in every day and calls it warmth.</p>
        <p>Full severance produces constant corrupted output. Not recoverable while the severance continues. Severance of multiple beings simultaneously is what the Perfect Machine attempts.</p>
      `)}

      ${divider}

      <h3>Corruption in Objects vs Beings</h3>
      <div class="corruption-beings">
      ${tc('In Objects', '', `
        <p>Crystal that's been exposed to corrupted expression absorbs it slowly. Weapons used primarily for violation absorb that corruption into their structure. Old weapons used for the wrong purposes long enough start expressing corruption passively.</p>
        <p>The Cores are maximally corrupted objects. The Spire's architecture is partly designed to contain this. Everything above the Undercroft is slightly Aevum-corrupted and has been for so long that residents don't have a baseline for comparison.</p>
      `)}
      ${tc('In Humans', '', `
        <p>Beings have more resistance than objects because consciousness pushes back. But consciousness also means the corruption has more to work with: it finds the parts of you that resonate and amplifies them specifically.</p>
        <p>In humans corruption expresses first as the side effects becoming permanent, then as the healthy expression becomes inaccessible, then as the corrupted expression becomes involuntary.</p>
        <p>A deeply Aevum-corrupted human doesn't experience time normally. A deeply Profundis-corrupted human can't stop accumulating grief. A deeply Vertex-corrupted human can't find stability in anything.</p>
      `)}
      ${tc('In Gods', '', `
        <p>In gods corruption is expressed differently because gods ARE their category. What happens instead is that the corrupted expression becomes their dominant mode. Their power doesn't diminish but its nature changes. They become harder to work with, harder to approach, harder to reason with. Less of…themselves.</p>
      `)}
      ${tc('In the Integrated', '', `
        <p>In the Integrated, corruption is the most interesting because they're already hybrid. Sometimes the human part corrupts and the divine part remains healthy. Sometimes the divine part corrupts and the human part pushes back. Sometimes they corrupt in opposite directions and the person exists in a state of internal tension that is exhausting and also the thing keeping them functional. The most stable people are the ones whose two natures are corrupting in ways that counterbalance each other.</p>
      `)}
      </div>

      ${divider}

      ${tc('Finality', 'The Negative Space · Not Fully Awake Yet', `
        <p>Both sides of this war generate waste. Humans generate guilt, denial, the psychic cost of what they're doing and refusing to feel. Gods generate grief, rage, anguish, and a sense of betrayal. This accumulated for generations until it coalesced.</p>
        <p>The Order wanted a weapon, something that could consume gods completely, end the war, and give humanity total victory. They succeeded…Partially. …Maybe.</p>
        <p>The problem with summoning something made of pure accumulated negation and hunger is that it doesn't take orders. They opened a door and what came through was exactly what they asked for and completely uncontrollable.</p>
        <p>It's in the Roots, contained for now. The Order are desperately trying to keep the thing they summoned from eating the city that summoned it.</p>
        <p>Finality is all six corruptions simultaneously. It consumes gods because gods are the densest concentration of what it's made of. If it consumes all six categories, the theory is it becomes cosmologically complete, the complete reverse of the two Ancient Gods. And if it can assimilate them, it can rewrite the universe.</p>
        <p>It's not fully awake yet.</p>
      `)}
      ${tc('The Perfect Machine', 'Solari Secret Project · Ongoing', `
        <p>A godhood transfer engine that could strip divinity from a god completely and transplant it into a human vessel. Make a human into a god that was born human and thinks human.</p>
        <p>Those with too much godware are kidnapped from the Undercroft and turned into unwilling lab rats. They're either fed into the Machine as living power sources, fed to the Crystal Farms, or used as test subjects.</p>
        <p>The Machine harvests through a controlled stripping process, which means the god experiences it fully consciously.</p>
        <p>The first attempt used pure humans as power sources. They burned out instantly. Second attempts used lightly grafted people. Slightly better. Third attempts: the body survived, but the mind didn't. Subjects became catatonic. The Order call these failed subjects the Hollow. They're kept alive, technically, still used as batteries.</p>
        <p>The fourth attempt is what's happening now. It's not working cleanly either, but it's better than before.</p>
      `)}
      ${tc('The Containment Core', 'How a God Gets Imprisoned', `
        <p>Think of it like this: a god's power flows from their divine nature continuously, the way a body generates heat. What the Core does is intercept the output.</p>
        <p>First you have to weaken a god severely. Sustained combat, removal of worship sources, attacking them in environments outside their domain. A god at full strength cannot be Cored.</p>
        <p>The Core has to physically interface with the god's divine substance, crystallizing part of their divine nature into the vessel's architecture. The god becomes partially embedded in the Core's structure, so much so that they can't leave without tearing themselves apart further.</p>
        <p>Once installed the Core siphons the energy that the god keeps generating, redirecting a portion into usable power. Light, heat, the energy that runs the city. The god experiences this as constant partial hemorrhage.</p>
        <p>They can still think, feel and transmit, which is how the Resonants hear them. The Core contains their body but not their consciousness.</p>
        <p>There are multiple Cores in Solaria. The Sundered One's is the main one, the original, the one that powers the Spire, but smaller subsidiary Cores exist throughout the city.</p>
      `)}

    </section>`;
}
