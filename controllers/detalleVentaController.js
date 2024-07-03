const db = require('../db/db.js');

const getAllDetalleVenta = (req,res) => {
    const {id_venta} = req.params;
    const sql = "SELECT * FROM detalle_venta WHERE id_venta = ?";
    db.query(sql,[id_venta], (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getDetalleVentaByProductoId = (req,res) => {
    const {id_venta} = req.params;
    const {id_producto} = req.body;
    const sql = 'SELECT * FROM detalle_venta WHERE id_venta = ? AND id_producto = ?';
    db.query(sql,[id_venta,id_producto], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createDetalleVenta = (req,res) => {
    const {id_venta} = req.params;
    const {id_producto,cantidad,observaciones} = req.body;
    const sql = 'INSERT INTO detalle_venta (id_venta,id_producto,cantidad,observaciones) VALUES (?, ?, ?, ?)';
    db.query(sql, [id_venta, id_producto, cantidad, observaciones], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Detalle de Venta creado correctamente", detalle_venta: result });
    });
};

const updateDetalleVenta = (req, res) => {
    const {id_venta} = req.params;
    const {id_producto,cantidad,observaciones} = req.body;
    const sql = 'UPDATE detalle_venta SET cantidad = ?, observaciones = ? WHERE id_venta = ? AND id_producto = ?';
    db.query(sql,[cantidad,observaciones,id_venta,id_producto], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Detalle de Venta actualizado correctamente"});
    });
};

const deleteDetalleVenta = (req, res) => {
    const {id_venta} = req.params;
    const {id_producto} = req.body;
    const sql = 'DELETE FROM detalle_venta WHERE id_venta = ? AND id_producto';
    db.query(sql,[id_venta,id_producto], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Detalle de Venta eliminado correctamente"});
    });
};

module.exports = {
    getAllDetalleVenta,
    getDetalleVentaByProductoId,
    createDetalleVenta,
    updateDetalleVenta,
    deleteDetalleVenta
};