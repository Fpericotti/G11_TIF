const db = require('../db/db.js');

const getAllProductos = (req,res) => {
    const sql = "SELECT * FROM productos";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    })
};

module.exports = {
    getAllProductos,
};