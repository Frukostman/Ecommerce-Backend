  class Productos {

    fs = require("fs")

    constructor() {
        this.productos = [];
    }

    listar() {
        return this.productos;
    }

    buscarPorId(id) {
        let idNumero = Number(id)
        let producto = this.productos.find(p => p.id === idNumero);
         return producto || { error: `producto con id ${id} no encontrado`};
    }

    guardar(prod) {

        prod.id = this.productos.length + 1;
        prod.timestamp = Date.now();

        try { 
            this.fs.promises.writeFile('./files/listadoProductos.txt', JSON.stringify(this.productos, null, "\t"));
            
        } catch (error) {
            console.log('el archivo no se pudo guardar', error)
        }
        
        return this.productos.push(prod);
    }

    actualizar(id, datos) {
        datos.id = Number(id);
        let index = this.productos.findIndex(p => p.id === id);
        this.productos.splice(index, 1, datos);
        return this.productos;
    }

    borrar(id) {
        let index = this.productos.findIndex(p => p.id == id);
        return this.productos.splice(index, 1);
    }
}

module.exports = new Productos();