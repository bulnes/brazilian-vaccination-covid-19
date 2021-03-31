const States = (() => {

  const states = [
    {
      region: 'Norte',
      state: 'Amazonas',
      uf: 'AM',
      people: 4207714,
    },
    {
      region: 'Norte',
      state: 'Roraima',
      uf: 'RR',
      people: 631181,
    },
    {
      region: 'Norte',
      state: 'Amapá',
      uf: 'AP',
      people: 861773,
    },
    {
      region: 'Norte',
      state: 'Pará',
      uf: 'PA',
      people: 8690745,
    },
    {
      region: 'Norte',
      state: 'Tocantins',
      uf: 'TO',
      people: 1590248,
    },
    {
      region: 'Norte',
      state: 'Rondônia',
      uf: 'RO',
      people: 1796460,
    },
    {
      region: 'Norte',
      state: 'Acre',
      uf: 'AC',
      people: 894470,
    },
    {
      region: 'Nordeste',
      state: 'Maranhão',
      uf: 'MA',
      people: 7114598,
    },
    {
      region: 'Nordeste',
      state: 'Piauí',
      uf: 'PI',
      people: 3281480	,
    },
    {
      region: 'Nordeste',
      state: 'Ceará',
      uf: 'CE',
      people: 9187103,
    },
    {
      region: 'Nordeste',
      state: 'Rio Grande do Norte',
      uf: 'RN',
      people: 3534165,
    },
    {
      region: 'Nordeste',
      state: 'Pernambuco',
      uf: 'PE',
      people: 9616621,
    },
    {
      region: 'Nordeste',
      state: 'Paraíba',
      uf: 'PB',
      people: 4039277,
    },
    {
      region: 'Nordeste',
      state: 'Sergipe',
      uf: 'SE',
      people: 2318822,
    },
    {
      region: 'Nordeste',
      state: 'Alagoas',
      uf: 'AL',
      people: 3351543,
    },
    {
      region: 'Nordeste',
      state: 'Bahia',
      uf: 'BA',
      people: 14930634,
    },
    {
      region: 'Centro-Oeste',
      state: 'Mato Grosso',
      uf: 'MT',
      people: 3526220,
    },
    {
      region: 'Centro-Oeste',
      state: 'Mato Grosso do Sul',
      uf: 'MS',
      people: 2809394,
    },
    {
      region: 'Centro-Oeste',
      state: 'Goiás',
      uf: 'GO',
      people: 7113540,
    },
    {
      region: 'Centro-Oeste',
      state: 'Distrito Federal',
      uf: 'DF',
      people: 3055149,
    },
    {
      region: 'Sudeste',
      state: 'São Paulo',
      uf: 'SP',
      people: 46289333,
    },
    {
      region: 'Sudeste',
      state: 'Rio de Janeiro',
      uf: 'RJ',
      people: 17366189,
    },
    {
      region: 'Sudeste',
      state: 'Espírito Santo',
      uf: 'ES',
      people: 4064052,
    },
    {
      region: 'Sudeste',
      state: 'Minas Gerais',
      uf: 'MG',
      people: 21292666,
    },
    {
      region: 'Sul',
      state: 'Paraná',
      uf: 'PR',
      people: 11516840,
    },
    {
      region: 'Sul',
      state: 'Rio Grande do Sul',
      uf: 'RS',
      people: 11422973,
    },
    {
      region: 'Sul',
      state: 'Santa Catarina',
      uf: 'SC',
      people: 7252502,
    },
  ];

  return {
    getStates: () => states,

    getState: (uf) => 
      States
        .getStates()
        .find(state => state.uf.toLowerCase() === uf.toLowerCase()),

    getBrazilPopulation: () => 
      States
        .getStates()
        .map(state => state.people)
        .reduce((a,b) => a + b, 0),
  };
})();
