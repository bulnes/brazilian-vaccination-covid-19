var Main = (() => {

  const getSnippet = () => SnippetLoader.getSnippetData(configureApp, setErrorPage);

  const configureApp = data => {
    DataStorage.setLocalStorage(data.itens || data);
    initApp();
  };

  const setErrorPage = () => {
    const app = document.getElementById('app');
    app.className = '';    
    app.classList.add('app--error');
  };

  const initApp = () => {
    DOM.buildStates();

    const selectedClass = 'state--selected';
    document
      .querySelector('#app__states .state')
      .classList.add(selectedClass);

    DataManipulation.setDataSlots();
    document.getElementById('app').classList.remove('app--loading');
    DOM.preloadImages();
  };

  const start = () => {
    DataLoader.getData({
      success: configureApp,
      error: getSnippet
    });
    
    return true;
  };

  return {
    start
  };
})(); 

window.addEventListener('load', Main.start);
