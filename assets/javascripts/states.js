var States = (function() {

  var statesByRegion = [
    {
      region: 'Norte',
      state: 'Amazonas',
      uf: 'AM',
    },
    {
      region: 'Norte',
      state: 'Roraima',
      uf: 'RR',
    },
    {
      region: 'Norte',
      state: 'Amapá',
      uf: 'AP',
    },
    {
      region: 'Norte',
      state: 'Pará',
      uf: 'PA',
    },
    {
      region: 'Norte',
      state: 'Tocantins',
      uf: 'TO',
    },
    {
      region: 'Norte',
      state: 'Rondônia',
      uf: 'RO',
    },
    {
      region: 'Norte',
      state: 'Acre',
      uf: 'AC',
    },
    {
      region: 'Nordeste',
      state: 'Maranhão',
      uf: 'MA',
    },
    {
      region: 'Nordeste',
      state: 'Piauí',
      uf: 'PI',
    },
    {
      region: 'Nordeste',
      state: 'Ceará',
      uf: 'CE',
    },
    {
      region: 'Nordeste',
      state: 'Rio Grande do Norte',
      uf: 'RN',
    },
    {
      region: 'Nordeste',
      state: 'Pernambuco',
      uf: 'PE',
    },
    {
      region: 'Nordeste',
      state: 'Paraíba',
      uf: 'PB',
    },
    {
      region: 'Nordeste',
      state: 'Sergipe',
      uf: 'SE',
    },
    {
      region: 'Nordeste',
      state: 'Alagoas',
      uf: 'AL',
    },
    {
      region: 'Nordeste',
      state: 'Bahia',
      uf: 'BA',
    },
    {
      region: 'Centro-Oeste',
      state: 'Mato Grosso',
      uf: 'MT',
    },
    {
      region: 'Centro-Oeste',
      state: 'Mato Grosso do Sul',
      uf: 'MS',
    },
    {
      region: 'Centro-Oeste',
      state: 'Goiás',
      uf: 'GO',
    },
    {
      region: 'Centro-Oeste',
      state: 'Distrito Federal',
      uf: 'DF',
    },
    {
      region: 'Sudeste',
      state: 'São Paulo',
      uf: 'SP',
    },
    {
      region: 'Sudeste',
      state: 'Rio de Janeiro',
      uf: 'RJ',
    },
    {
      region: 'Sudeste',
      state: 'Espírito Santo',
      uf: 'ES',
    },
    {
      region: 'Sudeste',
      state: 'Minas Gerais',
      uf: 'MG',
    },
    {
      region: 'Sul',
      state: 'Paraná',
      uf: 'PR',
    },
    {
      region: 'Sul',
      state: 'Rio Grande do Sul',
      uf: 'RS',
    },
    {
      region: 'Sul',
      state: 'Santa Catarina',
      uf: 'SC',
    },
  ];

  var getStatesFromRegion = function() {
    return statesByRegion;
  };

  var getStateHTML = function(state) {
    var stateData = findStateDataByUF(state.uf);

    var $state = document.createElement('div');
    $state.className = 'state';

    var $stateName = document.createElement('span');
    $stateName.className = 'state__name';
    $stateName.innerHTML = stateData.state;

    var $stateUF = document.createElement('span');
    $stateUF.className = 'state__uf';
    $stateUF.innerHTML = stateData.uf;

    $state.appendChild($stateName);
    $state.appendChild($stateUF);

    return $state;
  };

  var findStateDataByUF = function(uf) {
    var data;

    for (var i = 0; i < statesByRegion.length; i++) {
      var stt = statesByRegion[i];
      if (stt.uf.toLowerCase() === uf.toLowerCase()) {
        data = stt;
        break;
      }
    }

    return data;
  };

  return {
    getStatesFromRegion: getStatesFromRegion,
    getStateHTML: getStateHTML,
  };
})();
