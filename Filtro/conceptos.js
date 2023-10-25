let conceptos = []

function agreConcep() {


    let id = generarID();
    let name = document.getElementById("name").value;
    let valorCamp = document.getElementById("valorCamp").value;

    
    let table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);

    
    let cells = [];
    for (let i = 0; i < 7; i++) {
        cells.push(newRow.insertCell(i));
    }

    
    cells[0].innerHTML = id;
    cells[1].innerHTML = name;
    cells[2].innerHTML = valorCamp;
   
    
    document.getElementById("name").value = "";
    document.getElementById("valorCamp").value = "";
}


document.addEventListener("DOMContentLoaded", function() {
    let storedClientes = localStorage.getItem('clientes');
    if (storedClientes) {
        clientes = JSON.parse(storedClientes);
    }
});
function eliConcep(id){
    conceptos= conceptos.filter(concepto => concepto.id !== id)
    actualizaLista();z
}

function guardarConcep() {
    localStorage.setItem('conceptos', JSON.stringify(conceptos));
}



function generarID() {
    return Math.floor(Math.random() * 10000); 
}

