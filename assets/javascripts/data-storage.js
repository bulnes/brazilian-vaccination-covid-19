const DataStorage = (() => {

  let mapData = [];

  const storageKey = 'vaccination:storage';
  const dateKey = 'vaccination:date';

  const getNow = () => (new Date()).toLocaleDateString();

  const isValidLocalStorage = () => {
    // localStorage.getItem(storageKey) && 
    // localStorage.getItem(dateKey) === getNow();
    return false;
  }

  const getLocalStorage = () => {
    // JSON.parse(localStorage.getItem(storageKey));
    return mapData;
  }

  const setLocalStorage = data => { 
    // localStorage.setItem(storageKey, JSON.stringify(data));
    // localStorage.setItem(dateKey, getNow());

    mapData = data;
  };

  return {
    isValidLocalStorage,
    getLocalStorage,
    setLocalStorage
  };
})();
