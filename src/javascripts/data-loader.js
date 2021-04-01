const defaultFunction = () => {};

const defaultCallbacks = {
  before: defaultFunction,
  success: defaultFunction,
  error: defaultFunction,
};

const src = 'https://sc.r7.com/vacinometro/vacinometro.json';

const getCallbacks = (cb) => {
  if (cb) {
    const keys = Object.keys(cb);
    for (let i = 0; i < keys.length; i += 1) {
      const index = keys[i];
      defaultCallbacks[index] = cb[index] ? cb[index] : defaultCallbacks[index];
    }
  }

  return defaultCallbacks;
};

const getData = (cb) => {
  const callbacks = getCallbacks(cb);
  callbacks.before();

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      callbacks.success(data);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      callbacks.error();
    }
  };

  xhr.open('GET', src, true);
  xhr.send();
};

export default getData;
