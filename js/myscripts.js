
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
let categoria = document.getElementById("categoria");
let botonCalcular = document.getElementById("botonCalcular");
let cantidad = document.getElementById("cantidad");




function validarNombre() {
    if (nombre.value.length < 3) {
        document.getElementById("errorNombre").innerHTML = "Nombre no válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "Nombre válido";
    }
}

function validarApellido() {
    if (apellido.value.length < 3) {
        document.getElementById("errorApellido").innerHTML = "Apellido no válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "Apellido válido";
    }
}


function validarCorreo() {
    if (!expRegular.test(correo.value)) {
        document.getElementById("errorCorreo").innerHTML = "Correo no válido";
    } else {
        document.getElementById("errorCorreo").innerHTML = "Correo válido";
    }
}

function totalPagar() {

    if (categoria.value == 1) {
        let pagar = cantidad.value * 40;
        document.getElementById("total").innerHTML = "Total a pagar: $" + pagar;
        
    } else {

        if (categoria.value == 2) {
            let pagar = cantidad.value * 100;
            document.getElementById("total").innerHTML = "Total a pagar: $" + pagar;
            return pagar;
        } else {

            if (categoria.value == 3) {
                let pagar = cantidad.value * 170;
                document.getElementById("total").innerHTML = "Total a pagar: $" + pagar;
                return pagar;
            } else {
                if (categoria.value == 4) {
                    let pagar = cantidad.value * 200;
                    document.getElementById("total").innerHTML = "Total a pagar: $" + pagar;
                    return pagar;
                }

            }

        }
    }

}


botonCalcular.addEventListener("click", validarNombre);
botonCalcular.addEventListener("click", validarApellido);
botonCalcular.addEventListener("click", validarCorreo);
botonCalcular.addEventListener("click", totalPagar);

