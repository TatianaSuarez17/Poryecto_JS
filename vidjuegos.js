let videojuegos = [];

function agregarVideojuego() {
    let name = document.getElementById("name").value;
    let theme = document.getElementById("theme").value;
    let license = parseInt(document.getElementById("license").value);
    let loyaltyPoints = parseInt(document.getElementById("loyaltyPoints").value);

    if (name && theme && !isNaN(license) && !isNaN(loyaltyPoints)) {
        let id = generarID();
        let videojuego = {id: id, name: name, theme: theme, license: license, loyaltyPoints: loyaltyPoints};
        videojuegos.push(videojuego);

        actualizarLista();
        limpiarCampos();
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
}

function eliminarVideojuego(id) {
    videojuegos = videojuegos.filter(videojuego => videojuego.id !== id);
    actualizarLista();
}

function generarID() {
    return Math.floor(Math.random() * 10000); // Genera un ID aleatorio entre 0 y 9999
}

function actualizarLista() {
    let gameList = document.getElementById("gameList");
    gameList.innerHTML = "";

    videojuegos.forEach(videojuego => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            ID: ${videojuego.id} - 
            Nombre: ${videojuego.name} - 
            Temática: ${videojuego.theme} - 
            Valor Licencia: ${videojuego.license} - 
            Precio Final: $${calcularPrecioFinal(videojuego.license)} - 
            Puntos para Fidelización: ${videojuego.loyaltyPoints} 
            <button onclick="eliminarVideojuego(${videojuego.id})">Eliminar</button>
        `;
        gameList.appendChild(listItem);
    });
}

function guardarVideojuegos() {
    localStorage.setItem('videojuegos', JSON.stringify(videojuegos));
}

document.addEventListener("DOMContentLoaded", function() {
    let storedVideojuegos = localStorage.getItem('videojuegos');
    if (storedVideojuegos) {
        videojuegos = JSON.parse(storedVideojuegos);
        actualizarLista(); // Actualizar la lista de videojuegos al cargar la página
    }
});

function limpiarCampos() {
    document.getElementById("name").value = "";
    document.getElementById("theme").value = "Aventura";
    document.getElementById("license").value = "";
    document.getElementById("loyaltyPoints").value = "";
}


function calcularPrecioFinal(license) {
    let precioAntesIVA = license * 1.04; // Se aplica un impuesto especial del 4%
    let precioFinal = precioAntesIVA * 1.16; // Se aplica el IVA del 16%
    return precioFinal.toFixed(2);
}