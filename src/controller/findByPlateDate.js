const { findAllCarsServices } = require('../services/findByPlateDate');

const findAllCarsControllers = async (req, res, next) => {
  try {
    const { placa, data } = req.body;
    const get = await findAllCarsServices({ placa, data });
    return res.status(200).json(get);
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllCarsControllers };
