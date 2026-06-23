const express = require('express');
const router = express.Router();
const {getHomepage, getABC, getHoiVanh} = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoivanh', getHoiVanh);

module.exports = router;