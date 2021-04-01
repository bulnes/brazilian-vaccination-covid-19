try {
  let port;

  const onHashChange = () => {
    if (port) {
      const { hash } = window.location;
      port.postMessage(hash);
    }
  };

  const onMessage = (e) => {
    if (e.data.startsWith && e.data.startsWith('#')) {
      window.location.hash = e.data.replace('#', '');
    }

    [port] = e.ports;
    if (window.location.hash) {
      port.postMessage(window.location.hash);
    }
  };

  window.addEventListener('message', onMessage);
  window.addEventListener('hashchange', onHashChange);
} catch (e) {
  // unused
}
