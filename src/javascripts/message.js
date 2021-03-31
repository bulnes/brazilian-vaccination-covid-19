try {
  let port;
  window.addEventListener('message', onMessage);
  window.addEventListener('hashchange', onHashChange);

  function onHashChange() {
    if (port) {
      const { hash } = window.location;
      port.postMessage(hash);
    }
  }

  function onMessage(e) {
    if (e.data.startsWith('#')) {
      window.location.hash = e.data.replace('#', '');
    }

    port = e.ports[0];
    if (window.location.hash) {
      port.postMessage(window.location.hash);
    }
  }
} catch (e) {}