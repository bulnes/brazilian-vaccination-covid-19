const Utils = (() => {

  return {
    formatNumber: value => Number(value).toLocaleString('pt-BR'),

    convertToNumber: value => {
      const num = String(value).replace(/\D/g, '');
      const con = Number(num);

      return isNaN(con) ? 0 : con;
    },

    calculatePercent: (uf, round, formated) => {
      const people = uf ? States.getState(uf).people : States.getBrazilPopulation();
      const vaccinated = Vacination.getVaccinatedsByUF(uf, round);
      const percent = (vaccinated * 100 / people).toFixed(2);
      return formated ? Utils.formatNumber(percent) : percent;
    }
  }
})();