const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const productoRoutes = require('../routes/productoRoutes.js');

app.use(express.json());
app.use('/producto',productoRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
