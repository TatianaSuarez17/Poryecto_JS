document.addEventListener("DOMContentLoaded", function() {
    mostrarPuntosClientes();
});

function mostrarPuntosClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    let puntosList = document.getElementById("puntosList");

    clientes.forEach(cliente => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `ID Cliente: ${cliente.id} - Puntos: ${cliente.fidelizacion}`;
        puntosList.appendChild(listItem);
    });
}
