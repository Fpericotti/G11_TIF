const express = require('express');
const router = express.Router();

const conexion = require('../db/db');

router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM producto', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    })
});

//Ruta para crear registros
router.get('/create', (req, res)=>{
    res.render('create');
});

//Ruta para editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM producto WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {nombre:results[0]});
        }
    });
});

//Ruta para eliminar registro
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM producto WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
})


//invoco metodos de CRUD
const crud = require('../controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;