function tc(title, sub, body) {
  return `<div class="toggle-card"><div class="toggle-card-header"><div><div class="toggle-card-title">${title}</div><div class="toggle-card-sub">${sub}</div></div><span class="toggle-card-arrow">▼</span></div><div class="toggle-card-body">${body}</div></div>`;
}

function renderReligion() {
  const divider = `<div class="divider">· · · · · · · · · · · · · · · · · · · ·</div>`;
  return `
    <section class="chapter" id="religion">
      <div class="chapter-header">
        <h2 class="chapter-title">Religion and Beliefs</h2>
      </div>

      <h3>The Faiths</h3>
      ${tc('The Church of the Stolen Sun', 'Official · State Religion', `
        <p>The gods were never benevolent. The original compact was a trap, divine beings extracting worship and sacrifice from humanity under the pretense of protection, keeping humans deliberately small and dependent, but humans awakened and the forbidden ritual was the first act of self-determination.</p>
        <p>The gods withdrew in fear, for humanity had finally reached for something that would have made them equals, and the gods couldn't allow that. The First Harvest was therefore not theft. It was a reclamation.</p>
        <p>The mini-star is a converted power source, divine energy repurposed for human flourishing. The gods don't experience pain because they're not persons. The war is therefore righteous.</p>
        <p>Services are held in the cathedral levels of the Spire and in smaller chapels throughout the Nave. The Undercroft has Solari chapels too, less maintained, more attended out of social obligation than conviction.</p>
        <p>The central ritual involves processed Aevum fragments in ceremonial vessels, light projected through them, the congregation bathed in fragment-light that the Solari uses deliberately for its emotional effects.</p>
        <p>Prayers are addressed to the light itself. There's a theological argument within the Solari about whether this constitutes worship of the Sundered One, which would be deeply problematic, or worship of the principle of human triumph expressed as light, which is fine. This argument has been ongoing for decades.</p>
        <p>The saints are the engineers of the first Core. The martyrs are god-hunters who didn't come back. The heretics are those who venerate the gods; when their shrines appear in the Undercroft the Solari removes them and calls them seditious.</p>
        <p>Children are brought into the faith young. The ceremony at integration has a child receiving their first legal godware. Getting your godware blessed is standard practice. Most people don't think about what it means that the church blesses the product the big corpo sells.</p>
        <p>Any theology that attributes consciousness or suffering to gods is suppressed. Any practice that resembles the old worship is to be done in secret or severe consequences will come.</p>
      `)}
      ${tc('The Old Faith', 'Suppressed · Underground', `
        <p>The Old Faith believes that gods are persons, vast, inhuman, bound by their domains, often indifferent to individual humans, but they still have interiority, with something that functions like feeling.</p>
        <p>The compact was genuinely mutual. Imperfect maybe, sometimes exploitative, but not a trap. The harvest is wrong.</p>
        <p>Some want the compact restored, some want something new, some just want the harvest to stop and believe the rest will follow.</p>
        <p>Services are small, in private homes, occasionally outdoors in dead zones where nobody officially goes. Prayers addressed to specific gods by domain and by whatever name those gods were known in that community's tradition. They offer small things: food, handmade objects, the products of human skill and care.</p>
        <p>Whether the gods receive these offerings is unclear. The names of the "Heretics", people who hid gods in their homes and were killed or kidnapped for it, are passed. People who refused integration and were economically destroyed for it. The shrines in the Undercroft hold their names, small offerings and maybe dead crystals.</p>
      `)}
      ${tc("The God-Hunters' Beliefs", 'Pragmatic · Unresolved', `
        <p>Gods are real and dangerous and bound by specific rules that can be learned and exploited. Whether they have moral status is a question they argue about endlessly and never resolve. What matters is that the job is the job.</p>
        <p>The God-Hunters have official chaplains, blessing equipment, they perform funerals, maintaining the narrative that god-hunting is righteous work. They likely don't believe it.</p>
      `)}

      ${divider}

      <p>If you worshipped a god sincerely, there's a residual covenant. That god cannot directly harm you even now. Even if they wanted to, the old rules still bind them and worship, even past worship, created a contract and only the Primordial Gods can break it.</p>
      <p>People who grew up in old faith communities before conversion to Solari theology are walking around with accidental divine protection they don't know they have, while those who still practice quietly are genuinely safer in god-territory than trained god-hunters and nobody has officially connected those dots.</p>

      ${divider}

      <h3>Language</h3>
      ${tc('The Common Tongue', 'Standardized · Politically Controlled', `
        <p>One dominant language across Solaria and its territories. The Solari standardized it aggressively; dialects exist in frontier communities but they're treated as regional variants.</p>
        <p>Certain words have been shifted, replaced, or retired. The word that used to mean "pray" now means something closer to "request formally." The word that used to mean "god" in a reverential sense now means something closer to "divine entity", stripped of the relational weight the old word carried.</p>
      `)}
      ${tc('The Old Tongue', 'Suppressed · Liturgical', `
        <p>The language of the original compact and exists in old faith communities as a liturgical language. The Solari suppressed it as a spoken language successfully.</p>
        <p>The Resonant sometimes speak fragments of Old Tongue during strong signal events. They don't always know they're doing it. The words they say are coherent, even if they weren't taught the language.</p>
      `)}
      ${tc('Divine Communication', 'Not Human Language', `
        <p>Gods don't communicate in human language by default. You experience something adjacent to meaning, domain-specific, that your brain translates into something you can process.</p>
        <p>Diminished form gods can learn to speak human languages: some speak the Common Tongue, some speak the Old Tongue, some speak whatever the human they're talking to knows best.</p>
        <p>The Resonants are the closest thing to bilingual human-god communication. Some Resonants have developed a practice of responding in feeling and intention. Whether the gods receive this and how is unclear.</p>
      `)}

      ${divider}

      <h3>Naming</h3>
      ${tc('Common Tongue Convention', 'Guild · District · Official', `
        <p>A personal name and a guild or district affiliation marker. In the Nave this is formal: family name, guild name, sometimes both. In the Undercroft it's looser, street names, nicknames…the name your people gave you versus the name on your Lens registration which might not match.</p>
        <p>The Fragment Runner cant is slang built on the Common Tongue with Old Tongue borrowings and entirely invented terms, designed to communicate quickly and without being understood by guild officials or god-hunters.</p>
      `)}
      ${tc('Old Faith Naming', 'Two Names · One Hidden', `
        <p>Old faith communities give children two names, a Common Tongue name for official use and an Old Tongue name used within the community, sometimes the name of a god they're considered to be under the protection of.</p>
      `)}
      ${tc('Runner Names', 'Chosen · First Successful Run', `
        <p>Fragment Runners rename themselves on their first successful run. The new name is chosen. Scholars have a theory about it involving the Old Tongue concept of names as covenants. The Runners themselves mostly don't think about it that deeply. It just feels like the right thing to do.</p>
      `)}

    </section>`;
}
