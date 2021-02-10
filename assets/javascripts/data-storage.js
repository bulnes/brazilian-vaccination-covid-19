const DataStorage = (() => {

  const storageKey = 'vaccination:storage';
  const dateKey = 'vaccination:date';

  const getNow = () => (new Date()).toLocaleDateString();

  const isValidLocalStorage = () => 
    localStorage.getItem(storageKey) && 
    localStorage.getItem(dateKey) === getNow();

  const getLocalStorage = () => JSON.parse(localStorage.getItem(storageKey));

  const setLocalStorage = data => { 
    localStorage.setItem(storageKey, JSON.stringify(data));
    localStorage.setItem(dateKey, getNow());
  };

  return {
    isValidLocalStorage,
    getLocalStorage,
    setLocalStorage
  };
})();
