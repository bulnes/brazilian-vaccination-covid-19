const DataManipulation = (() => {

  const setRegion = uf => {
    const msg = uf 
      ? `Região ${States.getState(uf).region}` 
      : `Território Nacional`;

    document
      .querySelector('#app__numbers .numbers__region')
      .innerHTML = msg;
  };

  const setState = uf => {
    const msg = uf 
      ? States.getState(uf).state
      : 'Brasil';

    document
      .querySelector('#app__numbers .numbers__state')
      .innerHTML = msg;
  };

  const setPopulationNumber = uf => {
    const msg = uf ? States.getState(uf).people : States.getBrazilPopulation();
    const format = Utils.formatNumber(msg);

    document.querySelector('#app__numbers .numbers__population .numbers__number').innerHTML = format;
  };

  const setApplicationNumber = uf => {
    const total = Vacination.getVaccinatedsByUF(uf);
    const formatTotal = Utils.formatNumber(total);

    document.querySelector('#app__numbers .numbers__applications .numbers__number').innerHTML = formatTotal;
  };

  const setPercentNumber = uf => {
    const people = uf ? States.getState(uf).people : States.getBrazilPopulation();
    const vaccinated = Vacination.getVaccinatedsByUF(uf);
    const percent = (vaccinated * 100 / people).toFixed(2);
    const format = Utils.formatNumber(percent)

    document.querySelector('#app__numbers .numbers__percent .numbers__number').innerHTML = `${format}%`;
  };

  return { 
    setDataSlots: uf => {
      setRegion(uf);
      setState(uf);

      setPopulationNumber(uf);
      setApplicationNumber(uf);
      setPercentNumber(uf);
    },
  };
})();