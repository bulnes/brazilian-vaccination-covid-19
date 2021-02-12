const Vacination = (() => {

  return {
    getVaccinatedsByUF: uf => {
      const data = DataStorage.getLocalStorage();

      if (uf) {
        const { vacinados } = data.find(state => state.uf.toLowerCase() === uf.toLowerCase());
        return Utils.convertToNumber(vacinados);
      }

      return data
        .map(state => Utils.convertToNumber(state.vacinados))
        .reduce((a, b) => a + b, 0);
    } 
  }
})();