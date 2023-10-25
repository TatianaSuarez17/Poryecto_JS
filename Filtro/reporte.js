document.addEventListener("DOMContentLoaded", function() {
    mostrarPuntosCampers();
});

function mostrarPuntosCampers() {
    let campers = JSON.parse(localStorage.getItem('campers'));
    let puntosList = document.getElementById("campcoins");

    campers.forEach(campers => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `ID Campers: ${campers.id} - Puntos: ${campers.campcoins}`;
        puntosList.appendChild(listItem);
    });
}