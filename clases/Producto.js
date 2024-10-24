class Producto {

    nombre = null;
    categoria = null;
    color = null;
    precio = null;
    existencia = null;
    descuento = null;

    constructor(nombre, categoria, color, precio, existencia, descuento) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.color = color;
        this.precio = precio;
        this.existencia= existencia
        this.descuento = descuento;
    }

    getNombre() {
        return this.nombre;
    }
    
    getCategoria() {
        return this.categoria;
    }
    
    getColor() {
        return this.color;
    }
    
    getPrecio() {
        return this.precio
    }
    
    getExistencia() {
        return this.existencia;
    }
    
    getDescuento() {
        return this.descuento;
    }


}