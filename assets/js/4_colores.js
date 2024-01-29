const azul = document.querySelector("#azul");
const rojo = document.querySelector("#rojo");
const verde = document.querySelector("#verde");
const amarillo = document.querySelector("#amarillo");

function pintar() {
    this.style.backgroundColor = "black";
}

azul.addEventListener("click", pintar);
rojo.addEventListener("click", pintar);
verde.addEventListener("click", pintar);
amarillo.addEventListener("click", pintar);