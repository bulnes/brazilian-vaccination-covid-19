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
    const total = Vacination.getVaccinatedsByUF(uf, 1);
    const formatTotal = Utils.formatNumber(total);
    const percentTotal = Utils.calculatePercent(uf, 1);
    const percentTotalFormated = Utils.formatNumber(percentTotal);

    const $applications = document.querySelector('.numbers__applications');
    const $number = $applications.querySelector('.numbers__number');
    const $control = $applications.querySelector('.numbers__progress-control');
    const $counter = $applications.querySelector('.numbers__progress-counter');

    $number.innerHTML = formatTotal;
    $control.style.width = `${percentTotal}%`;
    $counter.innerHTML = `${percentTotalFormated}%`;
  };

  const setPercentNumber = uf => {
    const total = Vacination.getVaccinatedsByUF(uf, 2);
    const totalFormated = Utils.formatNumber(total);
    const percentTotal = Utils.calculatePercent(uf, 2, false);
    const percentTotalFormated = Utils.formatNumber(percentTotal);

    const $percent = document.querySelector('.numbers__percent');
    const $number = $percent.querySelector('.numbers__number');
    const $control = $percent.querySelector('.numbers__progress-control');
    const $counter = $percent.querySelector('.numbers__progress-counter');

    $number.innerHTML = totalFormated;
    $control.style.width = `${percentTotal}%`;
    $counter.innerHTML = `${percentTotalFormated}%`;
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