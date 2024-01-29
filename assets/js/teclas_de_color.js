
document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        cambiarColor("pink", "key");
    } else if (event.key === "s") {
        cambiarColor("orange", "key");
    } else if (event.key === "d") {
        cambiarColor("deepskyblue", "key");
    } else if (event.key === "q") {
        crearDiv("purple");
    } else if (event.key === "w") {
        crearDiv("gray");
    } else if (event.key === "e") {
        crearDiv("brown");
    }
});

function cambiarColor(color, id) {
    const key = document.getElementById(id);
    key.style.backgroundColor = color;
}

function crearDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "key2";
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
}


