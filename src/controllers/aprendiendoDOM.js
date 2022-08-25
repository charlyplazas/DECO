// PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS 

// 1. CONTROLANDO EL CONTENIDO
let etiquetatitulo = document.getElementById("titulo")
let etiquetaImagen = document.getElementById("foto")
// 1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA (ELEMENTO)
etiquetatitulo.textContent = " HACE RATO QUE NO SE NA´ DE TI "
// 1.2 MANIPULANDO EL SRC
etiquetaImagen.src = "https://firebasestorage.googleapis.com/v0/b/tiendasurajpc.appspot.com/o/buso.png?alt=media&token=d4435350-bc55-4c62-ae52-252ee27d20ed"

// 2. CONTROLANDO EL DISEÑO
let parrafo = document.getElementById("parrafo")
parrafo.textContent = "Sos mi literatura favorita, el cuento que me cuento antes de dormirme. Sos también mi cielo inentendible, que me gusta así, sin explicaciones. Sos también mi creación, que lleva nada de imaginación, y todo de vos.  Sos también la que no puedo, la manzana que me prohibí siquiera pensar."
//2.1 AGREGANDO UN ESTILO (CLASS)
//TEXT- DANGER
parrafo.classList.add("text-danger", "fs-1", "text-center")
etiquetaImagen.classList.add("d-block", "mx-auto")
//2.2 QUITAR UN ESTILO
parrafo.classList.remove("text-danger")
