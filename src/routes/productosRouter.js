const express = require('express');
// importo modulos
const Productos = require('../api/productos');
const validacionAdmin = require ('../validation/validacionAdmin')
//seteo el router
const routerProductos = express.Router();

//GET listado 
routerProductos.get('/productos/listar',(req, res) => {
    res.json(Productos.listar())
})
//GET producto por ID 
routerProductos.get('/productos/listar/:id',(req, res) => {
    let { id } = req.params;
    res.json(Productos.buscarPorId(id));
})
//POST de un producto nuevo sin ID
routerProductos.post('/productos/agregar', validacionAdmin ,(req,res) => {
  let prodGuardado = Productos.guardar(req.body)
  res.send("Producto guardado")
  res.send(prodGuardado)
})
//PUT de un producto nuevo con ID
routerProductos.put('/productos/actualizar/:id', validacionAdmin ,(req,res) => {
  let { id } = req.params
  let producto = req.body
  res.send("Producto actualizado")
  res.json(Productos.actualizar(id, producto));
})
//DELETE de un producto con ID
routerProductos.delete('/productos/borrar/:id', validacionAdmin ,(req,res) => {
  let { id } = req.params;
  res.json(Productos.borrar(id));
})

module.exports = routerProductos;