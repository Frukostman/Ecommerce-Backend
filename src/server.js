//importo express
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'))


// importo rutas de Router PRODUCTOS y las utilizo con el prefijo /api
const routerProductos = require('./routes/productosRouter')
app.use('/api', routerProductos)
// importo rutas de Router CARRITO y las utilizo con el prefijo /api
const routerCarrito = require('./routes/carritoRouter')
app.use('/api', routerCarrito)

// obtengo el puerto del enviroment o lo seteo por defecto
const puerto = process.env.PORT || 8080;

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('Error en el servidor:', error);
});