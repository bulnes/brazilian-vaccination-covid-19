import { getBrazilPopulation, getState } from "./states";
import { formatNumber } from "./utils";
import getVaccinatedsByUF from "./vacination";

const setRegion = uf => {
  const msg = uf
    ? `Região ${getState(uf).region}`
    : `Território Nacional`;

  document
    .querySelector('#app__numbers .numbers__region')
    .innerHTML = msg;
};

const setState = uf => {
  const msg = uf
    ? getState(uf).state
    : 'Brasil';

  document
    .querySelector('#app__numbers .numbers__state')
    .innerHTML = msg;
};

const setPopulationNumber = uf => {
  const msg = uf ? getState(uf).people : getBrazilPopulation();
  const format = formatNumber(msg);

  document.querySelector('#app__numbers .numbers__population .numbers__number').innerHTML = format;
};

const setApplicationNumber = uf => {
  const total = getVaccinatedsByUF(uf);
  const formatTotal = formatNumber(total);

  document.querySelector('#app__numbers .numbers__applications .numbers__number').innerHTML = formatTotal;
};

const setPercentNumber = uf => {
  const people = uf ? getState(uf).people : getBrazilPopulation();
  const vaccinated = getVaccinatedsByUF(uf);
  const percent = (vaccinated * 100 / people).toFixed(2);
  const format = formatNumber(percent)

  document.querySelector('#app__numbers .numbers__percent .numbers__number').innerHTML = `${format}%`;
};

const setDataSlots = uf => {
  setRegion(uf);
  setState(uf);

  setPopulationNumber(uf);
  setApplicationNumber(uf);
  setPercentNumber(uf);
};

export default setDataSlots;