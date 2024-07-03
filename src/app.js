const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const productoRoutes = require('../routes/productoRoutes.js');
const clienteRoutes = require('../routes/clienteRoutes.js');
const ventaRoutes = require('../routes/ventaRoutes.js');
const detalleVentaRoutes = require('../routes/detalleVentaRoutes.js')

app.use(express.json());
app.use('/producto',productoRoutes);
app.use('/cliente',clienteRoutes);
app.use('/venta',ventaRoutes);
app.use('/venta_detalle',detalleVentaRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
