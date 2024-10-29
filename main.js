function bienvenida(id_modal) {
    const modal = document.getElementById(id_modal);
    modal.style.display = 'block';
    modal.getElementsByTagName("button")[0].addEventListener("click", function(event) {
        event.target.parentNode.style.display = 'none';
    });
}

function agregaProductos(producto) {
    console.log(producto)
    console.log(carrito)
    carrito.agregaProducto(producto)
    carrito.mostrarProductos();
}

bienvenida("modal_bienvenida");

const tienda = new Tienda(productos);
const carrito = new Carrito();
const galeria = document.getElementById("productos");
tienda.mostrarProductos(galeria);