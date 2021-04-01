const convertToNumber = (value) => {
  const num = String(value).replace(/\D/g, '');
  const con = Number(num);

  return Number.isNaN(con) ? 0 : con;
};

export default convertToNumber;
