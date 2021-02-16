var defaultFunction = new Function();

var callbacks = {
  'before': defaultFunction,
  'success': defaultFunction,
  'error': defaultFunction,
};

var src = 'https://sc.r7.com/vacinometro/vacinometro.json';

var getCallbacks = function (cb) {
  if (cb) {
    var keys = Object.keys(cb);
    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      callbacks[index] = cb[index] ? cb[index] : callbacks[index];
    }
  }

  return callbacks;
};

var getTodaySrc = function () {
  var data = new Date();
  var today = [
    data.getFullYear(),
    data.getMonth() + 1,
    data.getUTCDate()
  ].join('-');

  return src + '?' + today;
};

const getData = function (cb) {
  var callbacks = getCallbacks(cb);
  callbacks.before();

  var src = getTodaySrc();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
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

export default getData;