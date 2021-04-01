import { getState, getBrazilPopulation } from '../states';
import getVaccinatedsByUF from '../vacination';
import formatNumber from './format-number';

const calculatePercent = (uf, round, formated) => {
  const people = uf ? getState(uf).people : getBrazilPopulation();
  const vaccinated = getVaccinatedsByUF(uf, round);
  const percent = ((vaccinated * 100) / people).toFixed(2);
  return formated ? formatNumber(percent) : percent;
};

export default calculatePercent;
