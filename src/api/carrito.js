class Carrito {
  idCarrito = 0
  timestamp 

  //seteo una lista de Carrito vacia
    constructor() {
      this.idCarrito = this.idCarrito+1
      this.productos = []
      this.timestamp = Date.now()
    }   
    //METODOS

    listar() {
      if (this.productos.length>0) {            
        return this.productos
    } else {
        return '{error: "El carrito se encuentra vacio."}'
    }
}

  buscarPorId(id) {
      let idNumero = Number(id)
      let producto = this.productos.find(p => p.id === idNumero);
       return producto || { error: `producto con id ${id} no encontrado`};
  }

  guardar(prod) {
    console.log(prod)
      prod.id = this.productos.length + 1;
      prod.timestamp = Date.now();

      //guardar en filesystem con async

      return this.productos.push(prod);
  }

  borrar(id) {
      let index = this.productos.findIndex(p => p.id == id);
      return this.productos.splice(index, 1);
  }
  
  }
  
  // exporto el modulo Carrito
  module.exports= new Carrito;