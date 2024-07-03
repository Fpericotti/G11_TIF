const db = require('../db/db.js');

const getAllVentas = (req,res) => {
    const sql = "SELECT * FROM venta";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getVentaById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM venta WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createVenta = (req,res) => {
    const {id_cliente,fecha,medio_pago} = req.body;
    const sql = 'INSERT INTO venta (id_cliente, fecha, medio_pago) VALUES (?, ?, ?)';
    db.query(sql, [id_cliente, fecha, medio_pago], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Venta creada correctamente", id_venta: result.insertId });
    });
};

const updateVenta = (req, res) => {
    const {id} = req.params;
    const {id_cliente,fecha,medio_pago} = req.body;
    const sql = 'UPDATE venta SET id_cliente = ?, fecha = ?, medio_pago = ? WHERE id = ?';
    db.query(sql,[id_cliente,fecha,medio_pago,id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Venta actualizada correctamente"});
    });
};

const deleteVenta = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM venta WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Venta eliminada correctamente"});
    });
};

module.exports = {
    getAllVentas,
    getVentaById,
    createVenta,
    updateVenta,
    deleteVenta
};