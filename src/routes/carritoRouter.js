const express = require('express');
// importo modulo creador de productos
const Carrito = require('../api/carrito');
//seteo el router
const routerCarrito = express.Router();

//GET listado 
routerCarrito.get('/carrito/listar',(req, res) => {
    res.json(Carrito.listar())
})
//GET producto por ID 
routerCarrito.get('/carrito/listar/:id',(req, res) => {
    let { id } = req.params;
    res.json(Carrito.buscarPorId(id));
})
//POST de un producto nuevo sin ID
routerCarrito.post('/carrito/agregar',(req,res) => {
  console.log(Carrito)
  let prodGuardado = Carrito.guardar(req.body)
  res.send("Producto guardado")
  res.send(prodGuardado)
})
//DELETE de un producto con ID
routerCarrito.delete('/carrito/borrar/:id',(req,res) => {
  let { id } = req.params;
  res.json(Carrito.borrar(id));
})

module.exports = routerCarrito;