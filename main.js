function abrirModal(id_modal, detalle = false, tienda = null) {
    const modal = document.getElementById(id_modal);
    modal.style.display = 'block';
    modal.getElementsByTagName("button")[0].addEventListener("click", function(event) {
        event.target.parentNode.style.display = 'none';
        document.querySelector("#modal_carrito > #detalle_carrito").innerHTML = "";
    });

    if (detalle) {
        const todosLosProductosCarrito = carrito.mostrarProductos(tienda);
        document.getElementById("detalle_carrito").append(...todosLosProductosCarrito);
    }
}

function agregaProductos(producto) {
    console.log(producto)
    console.log(carrito)
    carrito.agregaProducto(producto)
}

abrirModal("modal_bienvenida");

const tienda = new Tienda(productos);
const carrito = new Carrito();
const galeria = document.getElementById("productos");
tienda.mostrarProductos(galeria);
document.getElementById("control_carrito").addEventListener("click", () => abrirModal("modal_carrito", true, tienda));

