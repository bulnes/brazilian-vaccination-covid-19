const formatNumber = value => Number(value).toLocaleString('pt-BR');

const convertToNumber = value => {
  const num = String(value).replace(/\D/g, '');
  const con = Number(num);

  return isNaN(con) ? 0 : con;
};

export { formatNumber, convertToNumber };
