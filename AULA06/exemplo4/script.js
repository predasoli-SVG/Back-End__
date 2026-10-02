document.addEventListener("keydown", function(e) {
    const tecla = e.key.toLowerCase(); // Converte para minúsculo para evitar problemas com Caps Lock

    if (tecla === "r") {
        document.body.style.backgroundColor = "red";
    } else if (tecla === "b") {
        document.body.style.backgroundColor = "blue";
    } else if (tecla === "g") {
        document.body.style.backgroundColor = "green";
    }
});
