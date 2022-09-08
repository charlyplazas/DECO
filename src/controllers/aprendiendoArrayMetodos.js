let productos = [

  {
    nombre: "Trunk Italy",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/baul%20italia.webp?alt=media&token=64f57567-37fb-48af-ac81-167bd0809081", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/baul%20italia1.webp?alt=media&token=2891545d-d01d-4a5c-a841-843c6fb7a075"],
    precio: 104,
    popularidad: 5,
    descripcion: "Wood Finish, Mdp Material, Natural/White color, Not Included: At Deco we want you to feel like you're at home, that's why we set the photos of the products on the page to give you a perspective of how they look in a space, but this does not include any decorations, accessories, or additional pieces that accompany it"
  },

  {
    nombre: "Norway Mirror",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/ESPEJO%20NORUEGA.webp?alt=media&token=2f436e50-1dd0-4a80-9fd1-f414a3f120c9", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/ESPEJO%20NORUEGA1.webp?alt=media&token=42d45245-01ac-4f82-b94d-c1dd52ab1155"],
    precio: 79,
    popularidad: 4,
    descripcion: "Wood Finish, Mdp Material, Natural/White color, Not Included: At Deco we want you to feel like you're at home, that's why we set the photos of the products on the page to give you a perspective of how they look in a space, but this does not include any decorations, accessories, or additional pieces that accompany it"
  },

  {
    nombre: "Nordic Desk",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/ESCRITORIO%20NORDICO.webp?alt=media&token=e0f58ab0-e234-45b9-9eb5-55687c0fd242", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/ESCRITORIO%20NORDICO1.webp?alt=media&token=53b49925-977a-41f8-b5a1-a800fa674649"],
    precio: 135,
    popularidad: 3,
    descripcion: "Wood Finish, Mdp Material, Natural/White color, Not Included: At Deco we want you to feel like you're at home, that's why we set the photos of the products on the page to give you a perspective of how they look in a space, but this does not include any decorations, accessories, or additional pieces that accompany it"
  },

  {
    nombre: "Pyramidal Pot",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/MATERA%20PIRAMIDAL.webp?alt=media&token=5b5ebc8c-13ff-4aac-b1a0-a61fde366be2","https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/MATERA%20PIRAMIDAL1.webp?alt=media&token=2ff2c640-bfa8-48d7-b472-396e13e16a17" ],
    precio: 33,
    popularidad: 3,
    descripcion: "Steel and plastic material, luxury finish"
  },


  {
    nombre: "Victory Beanbag",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/PUFF%20VICTORIA.webp?alt=media&token=057a1402-866d-45d1-a2ed-2cd02ce1f98f", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/PUFF%20VICTORIA%201.webp?alt=media&token=213cc2ba-8c63-40c8-84e7-315a729b19ba"],
    precio: 56,
    popularidad: 1,
    descripcion: "Mdf wood material, high luxury textile in more than 5 colors"
  },

  {
    nombre: "Venice Chair",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/SILLA%20VENECIA.webp?alt=media&token=6290ce67-008a-47d9-9005-4600d1f6d0cd", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/SILLA%20VENECIA1.webp?alt=media&token=e18a0d69-6fed-425e-a2db-49bf7faded51"],
    precio: 22,
    popularidad: 2,
    descripcion: "Rigid plastic material, high quality textile"
  },
  {
    nombre: "Shoe Rack Millan",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/ZAPATERO.webp?alt=media&token=efda6d52-3c6b-42d2-b58b-9c16c22600a4", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/ZAPATERO1.webp?alt=media&token=b416645c-d22b-4ebc-bf26-11d737d05a1e"],
    precio: 79,
    popularidad: 3,
    descripcion: "Mdf wood material, Cedar finishes "
  },
  {
    nombre: "Dinora Buffet",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/BUFFET%20DINORA%201.webp?alt=media&token=7690eefa-5c45-4d84-933b-bdd54c5fa5a9", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/BUFFET%20DINORA.webp?alt=media&token=b7306eaa-d74e-4db6-a66d-93d470dc8bdd"],
    precio: 239,
    popularidad: 5,
    descripcion: "Mdf wood material, Cedar finishes, metal base"
  },
  {
    nombre: "Berlin Ded",
    fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/cama%20Berlin.jpg?alt=media&token=85591cab-221e-4d3d-a682-a255769b4aa6", "https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/cama%20berlin1.webp?alt=media&token=ccb45f7f-ddea-46fa-b91b-b9485a53ba6b"],
    precio: 239,
    popularidad: 5,
    descripcion: "Mdf wood material, Cedar finishes, metal base"
  },

]


let fila = document.getElementById("fila")

//recorriendo el arreglo

productos.forEach(function (producto) {
  //creando un div desde JS
  let columna = document.createElement("div")
  columna.classList.add("col")

  //creando un tarjeta
  let tarjeta = document.createElement("div")
  tarjeta.classList.add("card", "shadow", "text-center", "h-100")

  //creando una imagen
  let imagen = document.createElement("img")
  imagen.classList.add("img-fluid", "w-100")
  imagen.src = producto.fotos[0]

  //detectando evento de mouse
  imagen.addEventListener("mouseover", function () {
    imagen.src = producto.fotos[1]
  })

  imagen.addEventListener("mouseleave", function () {
    imagen.src = producto.fotos[0]
  })
  imagen.addEventListener("click", function (){
    imagen.src=producto.fotos[0]
  })
  //creando un titulo

  let nombre = document.createElement("h3")
  nombre.classList.add("h3", "text-center", "fw-bold")
  nombre.textContent = producto.nombre

  // crear precio

  let precio = document.createElement("h2")
  precio.classList.add("text-center", "fw-bold")
  precio.textContent = " $ " + producto.precio

  /// creando popularidad

  let popularidad = document.createElement("h5")
  popularidad.classList.add("d-none","text-center", "fw-bold")
  popularidad.textContent = producto.popularidad

  /// Creando popularidad tienda 

  let contenedorEstrellas = document.createElement("div"); 
  for (let i = 1; i <= producto.popularidad; i++) {
    let estrella = document.createElement("i");

    estrella.classList.add("bi", "bi-star-fill", "text-warning");
    contenedorEstrellas.appendChild(estrella);
  }

  //creando descripcion
  let descripcion = document.createElement("p", "ps-5")
  descripcion.classList.add("text-dark")
  descripcion.textContent = producto.descripcion

  //definciendo padres e hijos (es decir que etiqueta va primero y cual va dentro de cual) se una el appenChild

  tarjeta.appendChild(imagen)
  tarjeta.appendChild(nombre)
  tarjeta.appendChild(precio)
  tarjeta.appendChild(popularidad)
  tarjeta.appendChild(contenedorEstrellas)
  tarjeta.appendChild(descripcion)
  columna.appendChild(tarjeta)
  fila.appendChild(columna)
})