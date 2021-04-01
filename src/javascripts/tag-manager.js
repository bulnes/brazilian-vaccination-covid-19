const ACTION_ORIGIN = {
  map: 'clicou-mapa',
  menu: 'clicou-menu',
};

const STATE_LABELS = {
  go: 'goias',
  sp: 'sao-paulo',
  pe: 'pernambuco',
  ac: 'acre',
  am: 'amazonas',
  ma: 'maranhao',
  pa: 'para',
  ro: 'rondonia',
  to: 'tocantins',
  df: 'distrito-federal',
  ms: 'mato-grosso-do-sul',
  mg: 'minas-gerais',
  mt: 'mato-grosso',
  rs: 'rio-grande-do-sul',
  pr: 'parana',
  sc: 'santa-catarina',
  ce: 'ceara',
  pi: 'piaui',
  al: 'alagoas',
  ba: 'bahia',
  es: 'espirito-santo',
  pb: 'paraiba',
  rj: 'rio-de-janeiro',
  rn: 'rio-grande-do-norte',
  se: 'sergipe',
  rr: 'roraima',
  ap: 'amapa',
  br: 'brasil',
};

const SOCIAL_SHARE = [
  'facebook',
  'twitter',
  'whatsapp',
  'linkedin',
];

const handleClickEvent = (hash, origin) => {
  const originToUse = ACTION_ORIGIN[origin];
  const labelToUse = STATE_LABELS[hash];

  window.r7dataLayer.push({
    event: 'engagement.mapa-vacinacao',
    mapaVacinacao: {
      eventCategory: 'engajamento',
      eventAction: originToUse,
      eventLabel: labelToUse,
    },
  });
};

const handleShareEvent = () => {
  try {
    SOCIAL_SHARE.forEach((social) => {
      const button = document.querySelector(`.at-svc-${social}`);
      button.onclick = () => {
        window.r7dataLayer.push({
          event: 'engagement.mapa-vacinacao',
          mapaVacinacao: {
            eventCategory: 'engajamento',
            eventAction: 'compartilhar',
            eventLabel: social,
          },
        });
      };
    });
  } catch (e) {
    // unused
  }
};

export { handleClickEvent, handleShareEvent };
