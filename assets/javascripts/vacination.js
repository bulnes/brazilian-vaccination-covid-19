const Vacination = (() => {

  return {
    getVaccinatedsByUF: (uf, round) => {
      const data = DataStorage.getLocalStorage();
      const attr = round === 2 ? 'segunda_dose' : 'vacinados';

      if (uf) {
        const state = data.find(state => state.uf.toLowerCase() === uf.toLowerCase());
        return Utils.convertToNumber(state[attr]);
      }

      return data
        .map(state => Utils.convertToNumber(state[attr]))
        .reduce((a, b) => a + b, 0);
    } 
  }
})();