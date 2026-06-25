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
  society: renderSociety,
  integrated: renderIntegrated,
};

function navigate() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const render = routes[hash];
  document.getElementById('app').innerHTML = render ? render() : renderCover();
  window.scrollTo(0, 0);
  updateActiveLink(hash);
  initToggles();
  document.dispatchEvent(new CustomEvent('routeRendered', { detail: hash }));
}

function initToggles() {
  document.querySelectorAll(
    '.toggle-card-header, .faction-card-header, .solaria-level-header, .weapon-card-header'
  ).forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('open');
    });
  });
}

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

function updateActiveLink(hash) {
  document.querySelectorAll('.sidebar a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + hash);
  });
}

const pageIndex = {};

function buildSearchIndex() {
  Object.keys(routes).forEach(key => {
    const html = routes[key]();
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    pageIndex[key] = {
      title: key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      content: tmp.textContent
    };
  });
}

function toggleSearch() {
  const box = document.getElementById('searchBox');
  box.classList.toggle('active');
  if (box.classList.contains('active')) document.getElementById('searchInput').focus();
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const results = document.getElementById('searchResults');
  if (!query) { results.style.display = 'none'; return; }
  if (!Object.keys(pageIndex).length) buildSearchIndex();
  const matches = Object.keys(pageIndex)
    .filter(k => pageIndex[k].content.toLowerCase().includes(query))
    .map(k => {
      const idx = pageIndex[k].content.toLowerCase().indexOf(query);
      const snippet = pageIndex[k].content.substring(Math.max(0, idx - 40), idx + query.length + 60).trim();
      return { key: k, title: pageIndex[k].title, snippet };
    });
  if (matches.length) {
    results.innerHTML = matches.map(m => `
      <div class="search-result-item" onclick="goSearch('${m.key}')">
        <div class="search-result-title">${m.title}</div>
        <div class="search-result-snippet">…${m.snippet}…</div>
      </div>`).join('');
    results.style.display = 'block';
  } else {
    results.innerHTML = '<div class="search-result-item"><div class="search-result-snippet">No results</div></div>';
    results.style.display = 'block';
  }
}

function goSearch(key) {
  window.location.hash = key;
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchBox').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', e => {
    const menu = document.getElementById('burgerMenu');
    if (menu && !menu.contains(e.target)) {
      document.getElementById('sidebar').classList.remove('open');
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) {
      const results = document.getElementById('searchResults');
      const box = document.getElementById('searchBox');
      if (results) results.style.display = 'none';
      if (box) box.classList.remove('active');
    }
  });

  window.addEventListener('hashchange', navigate);
  navigate();
});
