var Main = (() => {

  const initApp = () => {
    DataManipulation.setDataSlots();
    DOM.preloadImages();
    document.getElementById('app').classList.remove('app--loading');
  };

  const start = () => {
    const validLocalStorage = DataStorage.isValidLocalStorage()
    if (validLocalStorage) {
      initApp();
      return true;
    }

    DataLoader.getData({
      success: data => {
        DataStorage.setLocalStorage(data);
        initApp();
      }
    });
    
    return true;
  };

  return {
    start
  };
})(); 

window.addEventListener('load', Main.start);
