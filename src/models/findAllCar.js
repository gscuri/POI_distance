const parser = require('csv-parser-sync-plus-promise');

const findAllCarList = async () => {
  const CarList = await parser.readCsvPromise('posicoes.csv');
  return CarList;
};

module.exports = { findAllCarList };
