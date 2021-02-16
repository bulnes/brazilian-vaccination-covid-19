import getData from "./data-loader";
import setDataSlots from "./data-manipulation";
import { isValidLocalStorage, setLocalStorage } from "./data-storage";
import { buildStates, preloadImages } from "./dom";

const initApp = () => {
  buildStates();

  const selectedClass = 'state--selected';
  document
    .querySelector('#app__states .state')
    .classList.add(selectedClass);

  setDataSlots();
  document.getElementById('app').classList.remove('app--loading');
  preloadImages();
};

const start = () => {
  const validLocalStorage = isValidLocalStorage();
  if (validLocalStorage) {
    initApp();
    return true;
  }

  getData({
    success: data => {
      setLocalStorage(data);
      initApp();
    }
  });
  
  return true;
};

export default start;
