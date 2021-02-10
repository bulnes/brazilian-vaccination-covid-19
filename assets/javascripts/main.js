var Main = (function() {

  var start = function() {
    DataLoader.getData({
      before: function() {
        console.log('iniciando o app');
      },

      success: function(data) {
        console.log('meus dados');
        console.log(data);

        console.log(DOM.buildStates())
      },

      error: function() {
        console.log('algo deu errado');
      },
    });
  };

  return {
    start: start
  };
})(); 

window.addEventListener('load', Main.start);
