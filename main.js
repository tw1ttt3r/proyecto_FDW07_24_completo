function bienvenida() {
    const modal = document.getElementById("modal_bienvenida");
    modal.style.display = 'block';
    modal.getElementsByTagName("button")[0].addEventListener("click", function(event) {
        event.target.parentNode.style.display = 'none';
    });

}

bienvenida();

const tienda = new Tienda(productos);
const galeria = document.getElementById("productos");
tienda.mostrarProductos(galeria)