let carrito = JSON.parse(localStorage.getItem("carrito"));
let totalCompra = document.getElementById("totalCompra");
let bandera = true;

//
let factura = document.getElementById("factura");

let total = 0;

//compruebo el estado del carrito de compras
if (carrito == null) {
  //poner un total en cero
  totalCompra.textContent = "Total: $0";

  let fila = document.createElement("div");
  fila.classList.add("row", "my-5", "justify-content-center");

  let columna = document.createElement("div");
  columna.classList.add("col-12", "col-md-5");

  let imagen = document.createElement("img");
  imagen.classList.add("img-fluid", "w-100");
  imagen.src = "../../assets/img/carritoVacio.png";

  let mensaje = document.createElement("h3");
  mensaje.classList.add("text-center");
  mensaje.textContent =
    "Tu carrito está vacío, llénalo de súper ofertas y estilo";

  columna.appendChild(imagen);
  columna.appendChild(mensaje);
  fila.appendChild(columna);
  factura.appendChild(fila);
} else {
  //recorro el carrito
  carrito.forEach(function (producto) {
    let fila = document.createElement("div");
    fila.classList.add(
      "row",
      "my-5",
      "justify-content-center",
      "mt-5",
      "shadow",
      "p-3"
    );

    let columna1 = document.createElement("div");
    columna1.classList.add("col-12", "col-md-5");

    let columna2 = document.createElement("div");
    columna2.classList.add(
      "col-12",
      "col-md-3",
      "border-end",
      "align-self-center"
    );

    let columna3 = document.createElement("div");
    columna3.textContent = "Subtotal";
    columna3.classList.add(
      "col-12",
      "col-md-3",
      "align-self-center",
      "fs-1",
      "text-center"
    );

    let foto = document.createElement("img");
    foto.classList.add("img-fluid", "w-100");
    foto.src = producto.foto;

    let nombre = document.createElement("h2");
    nombre.classList.add("text-center");
    nombre.textContent = producto.nombre;

    let descripcion = document.createElement("h5");
    descripcion.classList.add("text-center", "text-muted", "mt-5");
    descripcion.textContent = producto.descripcion;

    let cantidad = document.createElement("h4");
    cantidad.classList.add("text-center", "mt-5");
    cantidad.textContent = " Amount: " + producto.cantidad;

    let precio = document.createElement("h4");
    precio.classList.add("text-center");
    precio.textContent = " Unit Value: " + producto.precio;

    let subtotal = document.createElement("h2");
    subtotal.classList.add("fw-bold", "bg-dark", "text-white", "text-center");

    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.precio * producto.cantidad);

    let subtotalCalculado = producto.precio.split("$")[1] * producto.cantidad;
    console.log(subtotalCalculado);
    subtotal.textContent = "$" + subtotalCalculado;

    //EL TOTAL (LA SUMATORIA DE LOS SUBTOTALES)
    total = total + subtotalCalculado;
    console.log(total);
    //poner un total en cero
    totalCompra.textContent = "US $ " + total;

    let botonLimpiar = document.getElementById("botonLimpiar");
    botonLimpiar.addEventListener("click", function () {
      //limpio el carrito de la memoria
      localStorage.removeItem("carrito");

      //Recaegar la pagina
      window.location.href = "./resumenCompra.html";
    });

    columna1.appendChild(foto);
    columna2.appendChild(nombre);
    columna2.appendChild(descripcion);
    columna2.appendChild(cantidad);
    columna2.appendChild(precio);
    columna3.appendChild(subtotal);
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    factura.appendChild(fila);
  });
}

let conversor = document.getElementById("convertir");
conversor.classList.add("btn", "btn-dark");
conversor.textContent = "Convert to COP";

conversor.addEventListener("click", function () {
  let COP = 4300;
  let operacion = 0;
  operacion = "COP " + total * (COP / 1);
  totalCompra.textContent = operacion;
  conversor.textContent = "Convert to USD";

  if (bandera == true) {
    conversor.addEventListener("click", function () {
        totalCompra.textContent = "US$ " + total;
        conversor.textContent = "Convert to COP";
    });
    bandera = !bandera;
  } else {
    conversor.addEventListener("click", function () {
        totalCompra.textContent = operacion;
        conversor.textContent = "Convert to USD";
    });
    bandera = !bandera;
  }
});
