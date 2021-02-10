var DOM = (function() {

  var buildStates = function() {
    var structure = [];
    var states = [];

    for (var i = 0; i < states.length; i++) {
      var state = states[i];
      var html = States.getStateHTML(state);
      structure.push(html);
    }

    console.log(structure);
  };

  var changeBackground = function(type) {
    var $bgContainer = document.getElementById('app__map');
    var typeClass = 'map--' + type;

    $bgContainer.className = '';
    $bgContainer.classList.add(typeClass);

    DataManipulation.setDataSlots(type);
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
