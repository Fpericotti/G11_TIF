const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const productoRoutes = require('../routes/productoRoutes.js');
const clienteRoutes = require('../routes/clienteRoutes.js');
const ventaRoutes = require('../routes/ventaRoutes.js');
const detalleVentaRoutes = require('../routes/detalleVentaRoutes.js')

app.set()
app.use(express.json());
app.use('/producto',productoRoutes);
app.use('/cliente',clienteRoutes);
app.use('/venta',ventaRoutes);
app.use('/venta_detalle',detalleVentaRoutes);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('../routes/router.js'));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})