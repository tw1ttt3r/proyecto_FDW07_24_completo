class Tienda {
    
    productos = [];

    constructor(productos) {
        this.cargarProductos(productos)
    }

    cargarProductos(productos) {
        this.productos = productos.map((value) => new Producto(value.nombre, "", value.color, value.precio, value.existencia, value.descuento));
    }

    mostrarProductos(elemento) {
        const productosElementos = this.productos.map(value => {
            const el = document.createElement("div");
            const nombre = document.createElement("p");
            nombre.textContent = value.getNombre();
            el.appendChild(nombre);
            return el;
        });

        for (let e of productosElementos) {
            elemento.appendChild(e)
        }

    }
}