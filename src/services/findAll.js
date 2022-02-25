const { findAllPois } = require('../models/findAllPoi');
const { findAllCarList } = require('../models/findAllCar');
const { distancePoiCar } = require('./helpers/distance');
const { poiByPlate } = require('./helpers/orderDistance');
const { timeResult } = require('./helpers/time');

const findAllServices = async () => {
  const cordenatesPois = await findAllPois();
  const cordenatesCar = await findAllCarList();
  const distance = distancePoiCar(cordenatesCar, cordenatesPois);
  const orderPoiByPlate = poiByPlate(distance);
  return timeResult(orderPoiByPlate);
};

module.exports = { findAllServices };
