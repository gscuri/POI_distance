const { findAllPois } = require('../models/findAllPoi');
const { findAllCarList } = require('../models/findAllCar');
const { distancePoiCar } = require('./helpers/distance');
const { poiByPlate } = require('./helpers/orderDistance');
const { timeResult } = require('./helpers/time');

const findAllServices = async () => {
  const cordenatesPois = await findAllPois();
  const cordenatesCar = await findAllCarList();
  const distance = await distancePoiCar(cordenatesCar, cordenatesPois);
  const orderPoiByPlate = poiByPlate(distance);
  const dateResult = timeResult(orderPoiByPlate);

  return dateResult;
};

module.exports = { findAllServices };
