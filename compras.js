document.addEventListener("DOMContentLoaded", function() {
    cargarClientes();
    cargarVideojuegos(); // Cargar los videojuegos desde el almacenamiento local
})

function cargarVideojuegos() {
    let videojuegos = JSON.parse(localStorage.getItem('videojuegos'));
    let juegoDropdown = document.getElementById("juego");

    videojuegos.forEach(videojuego => {
        let option = document.createElement("option");
        option.value = videojuego.id;
        option.text = videojuego.name;
        juegoDropdown.appendChild(option);
    });
}
function cargarClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    let clienteDropdown = document.getElementById("cliente");

    clientes.forEach(cliente => {
        let option = document.createElement("option");
        option.value = cliente.id;
        option.text = `${cliente.name} ${cliente.ape}`;
        clienteDropdown.appendChild(option);
    });
}



function realizarCompra() {
    let clienteID = document.getElementById("cliente").value;
    let juegoID = document.getElementById("juego").value;

    let cliente = obtenerClientePorID(clienteID);
    let juego = obtenerJuegoPorID(juegoID);

    if (cliente && juego) {
        let precioFinal = calcularPrecioFinal(juego.license);
        let puntosFidelizacion = juego.loyaltyPoints;

        // Agregar el videojuego a la lista de videojuegos del cliente
        if (!cliente.videojuegos) {
            cliente.videojuegos = [];
        }
        cliente.videojuegos.push(juego);

        // Mostrar resumen de compra
        let resumenContainer = document.getElementById("resumen");
        resumenContainer.innerHTML = `
            <li>Cliente: ${cliente.name} ${cliente.ape}</li>
            <li>Videojuego: ${juego.name}</li>
            <li>Precio Final: $${precioFinal}</li>
            <li>Puntos para Fidelización: ${puntosFidelizacion}</li>
        `;

        // Abonar puntos para fidelización al cliente
        cliente.fidelizacion += puntosFidelizacion;
        localStorage.setItem('clientes', JSON.stringify(clientes));
    } else {
        alert("Cliente o videojuego no encontrado.");
    }
}

function obtenerClientePorID(id) {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    return clientes.find(cliente => cliente.id == id);
}

function obtenerJuegoPorID(id) {
    let videojuegos = JSON.parse(localStorage.getItem('videojuegos'));
    return videojuegos.find(juego => juego.id == id);
}
