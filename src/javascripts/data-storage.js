let mapData = [];

// const storageKey = 'vaccination:storage';
// const dateKey = 'vaccination:date';

const getNow = () => (new Date()).toLocaleDateString();

const isValidLocalStorage = () => false;

const getLocalStorage = () => mapData;

const setLocalStorage = (data) => {
  // localStorage.setItem(storageKey, JSON.stringify(data));
  // localStorage.setItem(dateKey, getNow());
  mapData = data;
};

export {
  getNow, isValidLocalStorage, getLocalStorage, setLocalStorage,
};
