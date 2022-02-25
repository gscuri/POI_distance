const express = require('express');
const { findAllControllers } = require('../controller/findAll');
const { findAllCarsControllers } = require('../controller/findByPlateDate');

const router = express.Router();

router.get('/find', findAllControllers);
router.get('/find/plate', findAllCarsControllers);

module.exports = router;
