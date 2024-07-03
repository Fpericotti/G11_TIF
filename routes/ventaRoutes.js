const express = require('express');
const router = express.Router();
const controller = require('../controllers/ventaController.js');

router.get('/', controller.getAllVentas);
router.get('/:id', controller.getVentaById);
router.post('/', controller.createVenta);
router.put('/:id', controller.updateVenta);
router.delete('/:id', controller.deleteVenta);

module.exports = router;