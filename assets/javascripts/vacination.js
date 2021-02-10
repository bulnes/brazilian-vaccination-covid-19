const Vacination = (() => {

  return {
    getVaccinatedsByUF: uf => {
      const data = DataStorage.getLocalStorage();

      
      if (uf) {
        return data.find(state => state.uf.toLowerCase() === uf.toLowerCase()).vacinados;
      }

      return data.map(state => Number(state.vacinados)).reduce((a, b) => a + b, 0);
    } 
  }
})();