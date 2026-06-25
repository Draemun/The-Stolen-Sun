const routes = {
  home: renderCover,
  timeline: renderTimeline,
  locations: renderLocations,
  factions: renderFactions,
  gods: renderGods,
  religion: renderReligion,
  crystals: renderCrystals,
  categories: renderCategories,
  corruption: renderCorruption,
  tech: renderTech,
  integrated: renderIntegrated,
  society: renderSociety,
};

function navigate() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const render = routes[hash];
  document.getElementById('app').innerHTML = render ? render() : renderCover();
  window.scrollTo(0, 0);
  initToggles();
  document.dispatchEvent(new CustomEvent('routeRendered', { detail: hash }));
}

function initToggles() {
  document.querySelectorAll(
    '.toggle-card-header, .faction-card-header, .solaria-level-header, .weapon-card-header'
  ).forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement;
      card.classList.toggle('open');
    });
  });
}

window.addEventListener('hashchange', navigate);
navigate();
