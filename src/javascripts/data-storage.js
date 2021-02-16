let mapData = [];

const storageKey = 'vaccination:storage';
const dateKey = 'vaccination:date';

const getNow = () => (new Date()).toLocaleDateString();

export const isValidLocalStorage = () => {
  // localStorage.getItem(storageKey) && 
  // localStorage.getItem(dateKey) === getNow();
  return false;
}

export const getLocalStorage = () => {
  // JSON.parse(localStorage.getItem(storageKey));
  return mapData;
}

export const setLocalStorage = data => {
  // localStorage.setItem(storageKey, JSON.stringify(data));
  // localStorage.setItem(dateKey, getNow());

  mapData = data;
};
