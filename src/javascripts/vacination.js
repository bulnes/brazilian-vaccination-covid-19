import { getLocalStorage } from './data-storage';
import convertToNumber from './helpers/convert-to-number';

const getVaccinatedsByUF = (uf, round) => {
  const data = getLocalStorage();
  const attr = round === 2 ? 'segunda_dose' : 'vacinados';

  if (uf) {
    const states = data.find((state) => state.uf.toLowerCase() === uf.toLowerCase());
    return convertToNumber(states[attr]);
  }

  return data
    .map((state) => convertToNumber(state[attr]))
    .reduce((a, b) => a + b, 0);
};

export default getVaccinatedsByUF;
