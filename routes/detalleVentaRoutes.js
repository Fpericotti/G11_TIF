const express = require('express');
const router = express.Router();
const controller = require('../controllers/detalleVentaController.js');

router.get('/:id', controller.getAllDetalleVenta);
router.get('/:id', controller.getDetalleVentaByProductoId);
router.post('/:id', controller.createDetalleVenta);
router.put('/:id', controller.updateDetalleVenta);
router.delete('/:id', controller.deleteDetalleVenta);

module.exports = router;