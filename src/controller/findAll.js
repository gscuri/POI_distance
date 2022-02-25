const { findAllServices } = require('../services/findAllPoi.js');

const findAllControllers = async (_req, res, next) => {
  try {
    const results = await findAllServices();
    return res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllControllers };
