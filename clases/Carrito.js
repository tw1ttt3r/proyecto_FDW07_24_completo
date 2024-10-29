class Carrito {

    productos = [];
    cache = [];
    codigoPromocion = null;

    agregaProducto(producto) {
        const existe = this.productos.filter((value) => value.producto === producto.getId());
        if (existe.length === 0) {
            // { producto, cantidad }
            this.productos.push({ producto: producto.getId(), cantidad: 1 });
        } else {
            const nuevoCarrito = this.productos.map((elemento) => {
                if(elemento.producto === producto.getId()) {
                    return { ...elemento, cantidad: elemento.cantidad + 1 }
                }
                return elemento;
            });
            this.productos = [ ...nuevoCarrito ]
        }
    }

    quitarProducto() {}

    mostrarProductos() {
        console.log(this.productos)
    }

    pagar() {}

    limpiarCarrito() {}

    recuperarUltimoCarrito() {}

}