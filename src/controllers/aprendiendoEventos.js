let etiquetaBoton=document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS!!
etiquetaBoton.addEventListener("click",function(){
    console.log("estoy haciendo clic")
        let titulo=document.getElementById("titulo")
        titulo.textContent="hola soy Stiven"

let mensaje=document.getElementById("mensaje")
mensaje.textContent="van a ganar"
mensaje.classList.add("text-danger")
let foto=document.getElementById("foto")
foto.src="https://www.elespectador.com/resizer/Xh4c2rI5GquDGRJZJgNog3aCg5g=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/AX3H7HQFNJHRXPJLPX66TXAJ5E.jpg"
})