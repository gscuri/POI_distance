const express = require('express');
const { findAllControllers } = require('../controller/findAll');
const { findAllCarsControllers } = require('../controller/findAllCar');

const router = express.Router();

router.get('/find', findAllControllers);
router.get('/find/plate', findAllCarsControllers);

module.exports = router;
