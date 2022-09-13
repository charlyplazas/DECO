let carrito;
if (JSON.parse(localStorage.getItem("carrito")) != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let pildora = document.getElementById("pildora");
  pildora.textContent = carrito.length;
} else {
  carrito = [];
}
let carritoMemoria = JSON.parse(localStorage.getItem("carrito"));
