var DOM = (function() {

  var buildStates = function() {
    var structure = [];
    var states = States.getStatesFromRegion();

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
  };

  return {
    buildStates: buildStates,
    changeBackground: changeBackground
  };
})();
