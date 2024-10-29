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

    mostrarProductos(tienda) {
        const detalle = this.productos.reduce((acumulador, detalle) => {
            const producto = tienda.buscarProductoXId(detalle.producto);
            const container = document.createElement("div");
            const nombre = document.createElement("p");
            nombre.textContent = producto.getNombre();
            const img = document.createElement("img");
            img.src = producto.getImage(producto.getId());
            img.alt = `producto_${producto.getNombre()}`;
            const precio = document.createElement("p");
            precio.textContent = producto.getPrecio();
            const cantidad = document.createElement("p");
            cantidad.textContent = detalle.cantidad;
            const total = document.createElement("p");
            total.textContent = (detalle.cantidad * producto.getPrecio());
            container.appendChild(nombre);
            container.appendChild(img);
            container.appendChild(precio);
            container.appendChild(cantidad);
            container.appendChild(total);
            container.style.display = 'flex';
            container.style.gap = '4px';
            container.style.justifyContent = 'space-around';
            return [ ...acumulador, container ];
        }, []);
        return detalle;
    }

    pagar() {}

    limpiarCarrito() {}

    recuperarUltimoCarrito() {}

}