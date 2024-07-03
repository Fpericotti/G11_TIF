const db = require('../db/db.js');

const getAllClientes = (req,res) => {
    const sql = "SELECT * FROM cliente";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getClienteById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM cliente WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createCliente = (req,res) => {
    const {nombre,email,telefono} = req.body;
    const sql = 'INSERT INTO cliente (nombre, email, telefono) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, telefono], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Cliente creado correctamente", id_cliente: result.insertId });
    });
};

const updateCliente = (req, res) => {
    const {id} = req.params;
    const {nombre, email, telefono} = req.body;
    const sql = 'UPDATE cliente SET nombre = ?, email = ?, telefono = ? WHERE id = ?';
    db.query(sql,[nombre,email,telefono,id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Cliente actualizado correctamente"});
    });
};

const deleteCliente = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM cliente WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Cliente eliminado correctamente"});
    });
};

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};