const routes = {
  home: renderCover,
  timeline: renderTimeline,
};

function navigate() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const render = routes[hash];
  document.getElementById('app').innerHTML = render ? render() : renderCover();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', navigate);
navigate();
