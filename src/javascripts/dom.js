import setDataSlots from "./data-manipulation";
import { getStates } from "./states";

const buildStates = () => {
  let countryRegion = '';
  
  const statesHTML = [{ 
    uf: 'BR', 
    state: 'Todo o Brasil', 
    region: '' 
  }, ...getStates()].map(s => {
    const { region, uf, state } = s;
    let header = '';

    if (countryRegion !== region) {
      header = `<h3 class="region">${region}</h3>`;
    }

    const stateHTML = document.createElement('div');
    stateHTML.setAttribute('data-uf', uf);
    stateHTML.classList.add('state');
    stateHTML.onclick = changeBackground;
    stateHTML.innerHTML = `
      <span class="state__name">${state}</span> 
      <span class="state__uf">${uf}</span>
    `;

    return `${header} ${stateHTML.outerHTML}`;
  });

  console.log(statesHTML);

  document.getElementById('app__states').innerHTML = statesHTML.join('');
};

const changeBackground = function(el, type) {
  const $bgContainer = document.getElementById('app__map');
  const typeClass = 'map--' + type.toLowerCase();
  const selectedClass = 'state--selected';

  $bgContainer.className = '';
  $bgContainer.classList.add(typeClass);

  document
    .querySelectorAll('#app__states .state')
    .forEach(state => state.classList.remove(selectedClass));

  el.classList.add(selectedClass);

  setDataSlots(type === 'BR' ? '' : type);
};

const getPreloadImageTemplate = uf => {
  const name = uf.toUpperCase();
  const src = `assets/images/2560x1440/VACINACAO_${name}_04.png`;

  return `<img alt="preloading" src="${src}">`;
}

const preloadImages = () => {
  const images = getStates().map(state => getPreloadImageTemplate(state.uf)).join('');

  const $div = document.createElement('div');
  $div.id = 'preload';
  $div.innerHTML = images;

  document.body.appendChild($div);
};

export { buildStates, changeBackground, preloadImages };
