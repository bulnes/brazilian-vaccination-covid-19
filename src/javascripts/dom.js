var DOM = (function() {

  const buildStates = () => {
    let countryRegion = '';
    
    const statesHTML = [{ 
      uf: 'BR', 
      state: 'Todo o Brasil', 
      region: '' 
    }, ...States.getStates()].map(s => {
      let html = '';
      const { region, uf, state } = s;

      if (countryRegion !== region) {
        countryRegion = region;
        html = `<h3 class="region">${countryRegion}</h3>`;
      }

      html += `
        <div class="state" data-uf="${uf}" onclick="DOM.changeBackground(this, '${uf}')">
          <span class="state__name">${state}</span> 
          <span class="state__uf">${uf}</span>
        </div>
      `;

      return html;
    });

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

    DataManipulation.setDataSlots(type === 'BR' ? '' : type);
  };

  const getPreloadImageTemplate = uf => {
    const name = uf.toUpperCase();
    const src = `assets/images/2560x1440/VACINACAO_${name}_04.png`;

    return `<img alt="preloading" src="${src}">`;
  }

  const preloadImages = () => {
    const images = States.getStates().map(state => getPreloadImageTemplate(state.uf)).join('');

    const $div = document.createElement('div');
    $div.id = 'preload';
    $div.innerHTML = images;

    document.body.appendChild($div);
  };

  return { buildStates, changeBackground, preloadImages };
})();
