let id = document.getElementById("id");
let namer = document.getElementById("namer");
let telf = document.getElementById("telf");
let correo = document.getElementById("correo");
let gruCam = document.getElementById("gruCam");
let campcoins = document.getElementById("campcoins");
let registro = document.getElementById("registro")

let campers=[]


function agreCampers(event){
    event.preventDefault();

    let id = document.getElementById("id").value;
    let namer = document.getElementById("namer").value;
    let telf = document.getElementById("telf").value;
    let correo = document.getElementById("correo").value;
    let gruCam = document.getElementById("gruCam").value;
    let campcoins = document.getElementById("campcoins").value;

    let table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);

    let cells = [];
    for (let i = 0; i < 7; i++) {
        cells.push(newRow.insertCell(i));
    }

    cells[0].innerHTML = id;
    cells[1].innerHTML = namer;
    cells[2].innerHTML = telf;
    cells[3].innerHTML = correo;
    cells[4].innerHTML = gruCam;
    cells[5].innerHTML = campcoins;

    document.getElementById("id").value = "";
    document.getElementById("namer").value = "";
    document.getElementById("telf").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("gruCam").value = "";
    document.getElementById("campcoins").value = "";

};


function addCamperToLocalStorage(camper) {
    let campers = getItemsFromLocalStorage();
    camper.push(campers);
    localStorage.setItem("items", JSON.stringify(campers));
}


function getItemsFromLocalStorage() {
    let campers = JSON.parse(localStorage.getItem("campers")) || [];
    return campers;
}

function modiCampers(){
    let idModificar = parseInt(prompt("Ingrese el ID del camper que desea modificar"));

    if (!idModificar){
        alert("No se encontro al camper.");
        return;
    }

    let camperEncontrado = []
    for(let i =0; i <campers.length; i++){
        if (campers[i].id === idModificar){
            camperEncontrado = true;
            console.log(camperEncontrado)

            let newNamer = prompt("Nuevo nombre (deje en blanco si no desea modificar):");
            let newTelf = prompt("Nuevo teléfono (deje en blanco si no desea modificar):");
            let newCorreo = prompt("Nuevo correo electrónico (deje en blanco si no desea modificar):");
            let newgruCam = prompt("Nuevo grupo de Campus(deje en blanco si no desea modificar):");
            let newcampcoins = prompt("Nuevos campcoins (deje en blanco si no desea modificar):");
            
                if (newNamer !== "") {
                    campers[i].namer = newNamer;
                }
                if (newTelf !== "") {
                    campers[i].telf = newTelf;
                }
                if (newCorreo !== "") {
                    campers[i].correo = newCorreo;
                }
                if (newgruCam !== "") {
                    campers[i].gruCam = newgruCam;
                }
                if (newcampcoins !== "") {
                    campers[i].campcoins = newcampcoins;
                }

                alert("Camper modificado con éxito.");
                break;
            }
    º   }
        if (!camperEncontrado) {
            alert("No se encontró un camper con ese ID.");
        }
}


function elimiCampers() {
    let idEliminar = prompt("Ingrese el ID del camper que desea eliminar:");

    if (!idEliminar) {
        alert("No se ingresó un ID válido.");
        return;
    }

    let camperEncontrado = false;

    for (let i = 0; i < campers.length; i++) {
        if (campers[i].id === idEliminar) {
            camperEncontrado = true;

            // Eliminamos el cliente de la lista
            campers.splice(i, 1);

            alert("Camper eliminado con éxito.");
            break;
        }
    }

    if (!camperEncontrado) {
        alert("No se encontró un camper con ese ID.");
    }


    localStorage.setItem('campers', JSON.stringify(campers));
}



function resetearBusqueda() {
    var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.display = "";
    }
  
    document.getElementById("search").value = "";
}

registro.addEventListener("click",agreCampers);