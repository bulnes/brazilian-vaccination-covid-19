var DataLoader = (function() {

  var defaultFunction = new Function();

  var callbacks = {
    'before': defaultFunction,
    'success': defaultFunction,
    'error': defaultFunction,
  };

  // var src = 'https://enigmatic-inlet-66337.herokuapp.com/';
  var src = 'https://vaccination-api.herokuapp.com/'; // bruno_bulnes

  var getCallbacks = function(cb) {
    if (cb) {
      var keys = Object.keys(cb);
      for (var i = 0; i < keys.length; i++) {
        var index = keys[i];
        callbacks[index] = cb[index] ? cb[index] : callbacks[index];
      }
    }

    return callbacks;
  };

  var getData = function(cb) {
    var callbacks = getCallbacks(cb);
    callbacks.before();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.response);
        callbacks.success(data);
      } 
      else if (xhr.readyState == 4 && xhr.status != 200) {
        callbacks.error();
      }
    };

    xhr.open('GET', src, true);
    xhr.send();
  };

  return {
    getData: getData
  };
})();
