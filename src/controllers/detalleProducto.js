console.log("DECO");

//Llamar al memoria
let producto = JSON.parse(localStorage.getItem("producto"));
console.log(producto);

let carrito;
if (JSON.parse(localStorage.getItem("carrito")) != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let pildora = document.getElementById("pildora");
  pildora.textContent = carrito.length;
} else {
  carrito = [];
}
let carritoMemoria = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoMemoria);

//referenciar la imagen del producto
let nombre = document.getElementById("nombreInfo");
nombre.textContent = producto.nombre;

let foto = document.getElementById("imagenInfo");
foto.src = producto.foto;

let descripcion = document.getElementById("descripcionInfo");
descripcion.textContent = producto.descripcion;

let precio = document.getElementById("precioInfo");
precio.textContent = producto.precio;

let pildora = document.getElementById("pildora");
console.log(pildora.textContent);

//escucho el click en el boton añadir carrito

let botonAgregarCarrito = document.getElementById("botonAgregarCarrito");
botonAgregarCarrito.addEventListener("click", function (evento) {
  let cantidad = document.getElementById("cantidadProducto");
  cantidad = cantidad.value;

  //un carrito es un arreglo de objetos
  //el arreglo debe arrancar vacio

  //agregamos la cantidad al objeto prodcunto

  producto.cantidad = cantidad;
  console.log(producto);

  //agregamos el producto al carroto de compra
  carrito.push(producto);
  console.log(carrito);
  //agregando el carrito a la memoria
  localStorage.setItem("carrito", JSON.stringify(carrito));

  //pintando  la pildora con la cantidad de productos

  let cantidadCarrito = carrito.length;
  pildora.textContent = cantidadCarrito;
});

/* para crear etiquetas desde java en html se llama traversing*/
//tareas tener el index terminado personalizado
//el index debe viajar a la tienda de productos
//diseño tienda
//popularidad debe salir en estrellas
//la cantidad solo debe permitir valores a 1
//

/*let popularidad=document.getElementById("popularidadInfo")    
popularidad.textContent=producto.popularidad*/

//Traer el contenedor de estrellas
let contenedorEstrellas = document.getElementById("contenedorEstrellas");
let popularidadInfo = document.getElementById("popularidadInfo")
for (let i = 1; i <= producto.popularidad; i++) {
  let estrella = document.createElement("i");

  estrella.classList.add("bi", "bi-star-fill","text-warning");
  contenedorEstrellas.appendChild(estrella);
}

let botonAgregar = document.getElementById("botonAgregarCarrito");
botonAgregar.addEventListener("click", function () {
  let cantidad = document.getElementById("cantidad").value;
  producto.cantidad = " Cantidad: " + cantidad;

  console.log(carrito);
  carrito.push(producto); //agrega un elemento a un arreglo

  //almacenar en memoria el carrito
  localStorage.setItem("carrito", JSON.stringify(carrito));

  //traigo la pildora
  let pildora = document.getElementById("pildora");
  pildora.textContent = carrito.length;
});
