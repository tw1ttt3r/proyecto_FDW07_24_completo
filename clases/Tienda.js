class Tienda {
    
    productos = [];

    constructor(productos) {
        this.cargarProductos(productos)
    }

    cargarProductos(productos) {
        this.productos = productos.map((value) => new Producto(value.nombre, "", value.color, value.precio, value.existencia, value.descuento, value.id));
    }

    mostrarProductos(elemento) {
        const productosElementos = this.productos.map(value => {
            const el = document.createElement("div");
            const img = document.createElement("img");
            img.src = value.getImage(value.getId());
            img.alt = `producto_${value.getNombre()}`;
            const nombre = document.createElement("p");
            nombre.textContent = value.getNombre();
            const precio = document.createElement("p");
            precio.textContent = value.getPrecio();
            const existencia = document.createElement("p");
            existencia.textContent = `Unidades disponibles: ${value.getExistencia()}`;
            el.appendChild(nombre);
            el.appendChild(img);
            el.appendChild(precio);
            el.appendChild(existencia);
            el.style.border = '1px solid black';
            el.style.padding = '4px';
            el.style.display = 'flex';
            el.style.flexDirection = 'column';
            el.style.alignItems = 'center';
            el.style.borderRadius = '8px';
            const botones = document.createElement("div");
            const botonAgrega = document.createElement("button");
            botonAgrega.textContent = 'Agregar';
            botonAgrega.addEventListener("click", () => agregaProductos(value));
            botones.appendChild(botonAgrega);
            el.appendChild(botones);
            return el;
        });

        for (let e of productosElementos) {
            elemento.appendChild(e)
        }
    }

    buscarProductoXId(id_producto) {
        const productoBuscado = this.productos.filter((producto) => producto.getId() === id_producto);
        return productoBuscado[0];
    }
}