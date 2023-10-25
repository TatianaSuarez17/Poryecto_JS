let id = document.getElementById("id");
let namer = document.getElementById("namer");
let ape = document.getElementById("ape");
let telf = document.getElementById("telf");
let correo = document.getElementById("correo");
let feNa = document.getElementById("feNa");
let nacionalidad = document.getElementById("nacionalidad");
let registro = document.getElementById("registro")

let clientes = []


function Validaciones() {
    if (correo.value.trim() === "") {
        alert("Error, complete el correo electrónico");
        return false;
    } else if (!correo.value.includes("@")) {
        alert("Correo no válido");
        return false;
    }


    if (name.value.trim() === "") {
        alert("Error, complete el nombre");
        return false;
    }

    if (ape.value.trim() === "") {
        alert("Error, complete el apellido");
        return false;
    }

    if (feNa.value.trim() === "") {
        alert("Error, complete la fecha de nacimiento");
        return false;
    }

    if (nacionalidad.value.trim() === "") {
        alert("Error, complete la nacionalidad");
        return false;
    }

    if (telf.value.trim() === "") {
        alert("Error, complete el teléfono");
        return false;
    }

    return true;
}

function agreCliente(event) {
    event.preventDefault();

    let id = document.getElementById("id").value;
    let namer = document.getElementById("namer").value;
    let ape = document.getElementById("ape").value;
    let telf = document.getElementById("telf").value;
    let correo = document.getElementById("correo").value;
    let feNa = document.getElementById("feNa").value;
    let nacionalidad = document.getElementById("nacionalidad").value;

    
    let table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);

    
    let cells = [];
    for (let i = 0; i < 7; i++) {
        cells.push(newRow.insertCell(i));
    }

    
    cells[0].innerHTML = id;
    cells[1].innerHTML = namer;
    cells[2].innerHTML = ape;
    cells[3].innerHTML = telf;
    cells[4].innerHTML = correo;
    cells[5].innerHTML = feNa;
    cells[6].innerHTML = nacionalidad;

    
    document.getElementById("id").value = "";
    document.getElementById("namer").value = "";
    document.getElementById("ape").value = "";
    document.getElementById("telf").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("feNa").value = "";
    document.getElementById("nacionalidad").value = "";
}


document.addEventListener("DOMContentLoaded", function() {
    let storedClientes = localStorage.getItem('clientes');
    if (storedClientes) {
        clientes = JSON.parse(storedClientes);
    }
});

function ModiClientes() {
        let idModificar = parseInt(prompt("Ingrese el ID del cliente que desea modificar"));
    
        if (!idModificar) {
            alert("No se ingresó un ID válido.");
            return;
        }
    
        let clienteEncontrado = false;
    
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === idModificar) {
                clienteEncontrado = true;
    
            let newName = prompt("Nuevo nombre (deje en blanco si no desea modificar):");
            let newApe = prompt("Nuevo apellido (deje en blanco si no desea modificar):");
            let newTelf = prompt("Nuevo teléfono (deje en blanco si no desea modificar):");
            let newCorreo = prompt("Nuevo correo electrónico (deje en blanco si no desea modificar):");
            let newFeNa = prompt("Nueva fecha de nacimiento (deje en blanco si no desea modificar):");
            let newNacionalidad = prompt("Nueva nacionalidad (deje en blanco si no desea modificar):");
    
                if (newName !== "") {
                    clientes[i].name = newName;
                }
                if (newApe !== "") {
                    clientes[i].ape = newApe;
                }
                if (newTelf !== "") {
                    clientes[i].telf = newTelf;
                }
                if (newCorreo !== "") {
                    clientes[i].correo = newCorreo;
                }
                if (newFeNa !== "") {
                    clientes[i].feNa = newFeNa;
                }
                if (newNacionalidad !== "") {
                    clientes[i].nacionalidad = newNacionalidad;
                }
    
                alert("Cliente modificado con éxito.");
                break;
            }
        }
    
        if (!clienteEncontrado) {
            alert("No se encontró un cliente con ese ID.");
        }
    
        // Actualizamos el localStorage después de la modificación
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }

function EliminarCliente() {
        let idEliminar = prompt("Ingrese el ID del cliente que desea eliminar:");
    
        if (!idEliminar) {
            alert("No se ingresó un ID válido.");
            return;
        }
    
        let clienteEncontrado = false;
    
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === idEliminar) {
                clienteEncontrado = true;
    
                // Eliminamos el cliente de la lista
                clientes.splice(i, 1);
    
                alert("Cliente eliminado con éxito.");
                break;
            }
        }
    
        if (!clienteEncontrado) {
            alert("No se encontró un cliente con ese ID.");
        }
    

        localStorage.setItem('clientes', JSON.stringify(clientes));
}

function buscarClientes() {
        var searchTerm = document.getElementById("search").value.toLowerCase();
        var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        var rows = table.getElementsByTagName("tr");
      
        for (var i = 0; i < rows.length; i++) {
          var cols = rows[i].getElementsByTagName("td");
          var found = false;
      
          for (var j = 1; j < cols.length; j++) {
            var text = cols[j].innerText.toLowerCase();
      
            if (text.includes(searchTerm)) {
              found = true;
              break;
            }
          }
      
          if (found) {
            rows[i].style.display = "";
          } else {
            rows[i].style.display = "none";
          }
        }
 }
      
function resetearBusqueda() {
        var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        var rows = table.getElementsByTagName("tr");
      
        for (var i = 0; i < rows.length; i++) {
          rows[i].style.display = "";
        }
      
        document.getElementById("search").value = "";
}
 