const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoController.js');

router.get('/', controller.getAllProductos);

module.exports = router;