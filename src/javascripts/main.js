import getData from './data-loader';
import setDataSlots from './data-manipulation';
import { setLocalStorage } from './data-storage';
import { buildStates } from './dom';
import getSnippetData from './snippet-loader';
import redirectToRightDatabase from './snippet-use-checker';
import './message';

const initApp = () => {
  buildStates();

  if (window.location.hash === '') {
    const selectedClass = 'state--selected';
    document
      .querySelector('#app__states .state')
      .classList.add(selectedClass);
  }

  setDataSlots();
  document.getElementById('app').classList.remove('app--loading');
};

const configureApp = (data) => {
  setLocalStorage(data.itens || data);
  initApp();
};

const setErrorPage = () => {
  const app = document.getElementById('app');
  app.className = '';
  app.classList.add('app--error');
};

const getSnippet = () => getSnippetData(configureApp, setErrorPage);

const start = () => {
  redirectToRightDatabase(getSnippet, () => {
    getData({
      success: configureApp,
      error: getSnippet,
    });
  });
};

window.addEventListener('load', start);
