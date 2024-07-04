const conexion = require('../db/db');

exports.save = (req, res)=>{
    //Tomo los valores ingresados en create
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;

    conexion.query('INSERT INTO producto SET ?', {nombre:nombre, descripcion:descripcion}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}


exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    conexion.query('UPDATE producto SET ? WHERE id = ?', [{nombre:nombre, descripcion:descripcion}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}