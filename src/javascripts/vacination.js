import { getLocalStorage } from "./data-storage";
import { convertToNumber } from "./utils";

const getVaccinatedsByUF = uf => {
  const data = getLocalStorage();

  if (uf) {
    const { vacinados } = data.find(state => state.uf.toLowerCase() === uf.toLowerCase());
    return convertToNumber(vacinados);
  }

  return data
    .map(state => convertToNumber(state.vacinados))
    .reduce((a, b) => a + b, 0);
} 

export default getVaccinatedsByUF;