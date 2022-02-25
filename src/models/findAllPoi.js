const parser = require('csv-parser-sync-plus-promise');

const findAllPois = async () => {
  const listPoi = await parser.readCsvPromise('base_pois_def.csv');
  return listPoi;
};

module.exports = { findAllPois };
