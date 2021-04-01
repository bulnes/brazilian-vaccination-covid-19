import setDataSlots from './data-manipulation';
import { getState, getStates } from './states';
import { handleClickEvent } from './tag-manager';

const zoomState = (id = 'br') => {
  const TIMESTEP_IN = 0.8;
  const TIMESTEP_OUT = 0.5;
  const SCALE_OUT = 1;
  const SCALE_IN = 3;

  const ID_TO_USE = id.toLowerCase();

  const STATE_COORDS = {
    go: { x: '-26%', y: '-6%', scale: SCALE_IN },
    sp: { x: '-32%', y: '-50%', scale: SCALE_IN },
    pe: { x: '-105%', y: '47%', scale: SCALE_IN },
    ac: { x: '112%', y: '38%', scale: SCALE_IN },
    am: { x: '78%', y: '77%', scale: SCALE_IN },
    ma: { x: '-55%', y: '67%', scale: SCALE_IN },
    pa: { x: '-5%', y: '78%', scale: SCALE_IN },
    ro: { x: '63%', y: '32%', scale: SCALE_IN },
    to: { x: '-36%', y: '40%', scale: SCALE_IN },
    df: { x: '-37%', y: '-6%', scale: SCALE_IN },
    ms: { x: '9%', y: '-37%', scale: SCALE_IN },
    mg: { x: '-55%', y: '-28%', scale: SCALE_IN },
    mt: { x: '16%', y: '16%', scale: SCALE_IN },
    rs: { x: '0%', y: '-106%', scale: SCALE_IN },
    pr: { x: '-12%', y: '-72%', scale: SCALE_IN },
    sc: { x: '-15%', y: '-91%', scale: SCALE_IN },
    ce: { x: '-95%', y: '68%', scale: SCALE_IN },
    pi: { x: '-72%', y: '59%', scale: SCALE_IN },
    al: { x: '-113%', y: '40%', scale: SCALE_IN },
    ba: { x: '-81%', y: '13%', scale: SCALE_IN },
    es: { x: '-84%', y: '-33%', scale: SCALE_IN },
    pb: { x: '-112%', y: '57%', scale: SCALE_IN },
    rj: { x: '-72%', y: '-49%', scale: SCALE_IN },
    rn: { x: '-112%', y: '61%', scale: SCALE_IN },
    se: { x: '-110%', y: '35%', scale: SCALE_IN },
    rr: { x: '55%', y: '117%', scale: SCALE_IN },
    ap: { x: '-9%', y: '116%', scale: SCALE_IN },
    br: { x: '0%', y: '0%', scale: SCALE_OUT },
  };

  window.gsap.to('.map-svg', TIMESTEP_OUT, {
    scale: SCALE_OUT,
    x: '0%',
    y: '0%',
    ease: 'power4.inOut',
  });

  window.gsap.to('.map-svg', TIMESTEP_IN, {
    scale: STATE_COORDS[ID_TO_USE].scale,
    x: STATE_COORDS[ID_TO_USE].x,
    y: STATE_COORDS[ID_TO_USE].y,
    ease: 'power4.inOut',
  });
};

const changeSelected = (el, hash, origin = '') => {
  const hashToUse = hash.toLowerCase();

  const selectedClass = 'state--selected';
  const selectedStateClass = 'map-svg--selected';

  document.querySelectorAll('.map-state--path').forEach((state) => state.classList.remove(selectedStateClass));

  const svgMap = [...document.querySelectorAll('.map-state--path')];

  if (hashToUse !== 'br') {
    const selectedState = svgMap.find((s) => s.getAttribute('id') === hashToUse);
    selectedState.classList.add(selectedStateClass);
  }

  zoomState(hashToUse);

  document
    .querySelectorAll('#app__states .state')
    .forEach((state) => state.classList.remove(selectedClass));

  el.classList.add(selectedClass);

  window.location.hash = hashToUse;

  if (window.innerWidth <= 575) {
    el.scrollIntoView({ inline: 'center' });
  }

  if (origin) {
    handleClickEvent(hashToUse, origin);
  }

  setDataSlots(hashToUse === 'br' ? '' : hash);
};

window.changeSelected = changeSelected;

const handleHash = (hash) => {
  let hashToUse = hash ? hash.substr(1) : window.location.hash.substr(1);
  if (hashToUse !== '') {
    if (!getState(hashToUse.toUpperCase())) {
      hashToUse = 'br';
    }

    const element = document.querySelector(`[data-uf=${hashToUse.toUpperCase()}]`);
    changeSelected(element, hashToUse);
  }
};

const buildStates = () => {
  let countryRegion = '';

  const statesHTML = [{
    uf: 'BR',
    state: 'Todo o Brasil',
    region: '',
  }, ...getStates()].map((s) => {
    let html = '';
    const { region, uf, state } = s;

    if (countryRegion !== region) {
      countryRegion = region;
      html = `<h3 class="region">${countryRegion}</h3>`;
    }

    html += `
      <div class="state" data-uf="${uf}" onclick="changeSelected(this, '${uf}', 'menu')">
        <span class="state__name">${state}</span> 
        <span class="state__uf">${uf}</span>
      </div>
    `;

    return html;
  });

  document.getElementById('app__states').innerHTML = statesHTML.join('');

  document.querySelectorAll('.map-state--path').forEach((state) => {
    state.addEventListener('click', () => {
      const element = document.querySelector(`[data-uf=${state.id.toUpperCase()}]`);
      changeSelected(element, state.id, 'map');
    });
  });

  window.addEventListener('hashchange', handleHash(window.location.hash));
};

export {
  buildStates, changeSelected, zoomState, handleHash,
};
