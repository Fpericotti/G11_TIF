const db = require('../db/db.js');

const getAllProductos = (req,res) => {
    const sql = "SELECT * FROM producto";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getProductoById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM producto WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createProducto = (req,res) => {
    const {nombre,descripcion,precio} = req.body;
    const sql = 'INSERT INTO producto (nombre, descripcion, precio) VALUES (?, ?, ?)';
    db.query(sql, [nombre, descripcion, precio], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Producto creado correctamente", id_producto: result.insertId });
    });
};

const updateProducto = (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion, precio} = req.body;
    const sql = 'UPDATE producto SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?';
    db.query(sql,[nombre,descripcion,precio,id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Producto actualizado correctamente"});
    });
};

const deleteProducto = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM producto WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Producto eliminado correctamente"});
    });
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};