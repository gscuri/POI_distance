const { findAllPois } = require('../models/findAllPoi');
const { findAllCarList } = require('../models/findAllCar');
const { distancePoiCar } = require('./helpers/distance');
const { poiByPlate } = require('./helpers/orderDistance');
const { timeResult } = require('./helpers/time');

const findAllCarsServices = async ({ placa, data }) => {
  const cordenatesPois = await findAllPois();
  const cordenatesCar = await findAllCarList();

  const haveDate = cordenatesCar.filter(({ data_posicao, placa: carPlate }) => {
    if (placa && data) {
      const date = new Date(data).toDateString();
      const date2 = new Date(data_posicao).toDateString();
      return date === date2 && placa === carPlate;
    }
    if (placa) {
      return placa === carPlate;
    }
    if (data) {
      const date = new Date(data).toDateString();
      const date2 = new Date(data_posicao).toDateString();
      return date === date2;
    }
    if (!placa && !data) {
      return true;
    }
  });

  const distance = await distancePoiCar(haveDate, cordenatesPois);
  const orderPoiByPlate = poiByPlate(distance);
  return timeResult(orderPoiByPlate);
};

module.exports = { findAllCarsServices };
