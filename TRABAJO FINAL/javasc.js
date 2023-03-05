
let cartel = prompt("¿Es usted mayor de 18 años? Si o No");

console.log (cartel);

if (cartel == "Si") {
    alert ("¡Bienvenid@ a nuestra pagina!")
} else { 
    alert("Usted ingresa a nuestra pagina bajo su responsabilidad");
}

function Cerrar() {
    alert('Usted está saliendo de nuestra pagina')
    return "Te estás saliendo del sitio…";
    
    }

    

    let kmcosto = document.querySelector("#prueba")


function calcenvio (){

    let envio = parseInt(prompt ("¿A cuantos km. se encuentra ud. de San Nicolas?"));

    let impuestos = 120;

    if (envio < 30) {
alert("El costo del envio es de $" + (envio + impuestos + 100) + ". Incluye envio e impuestos")

    } else {
        alert ("El costo del envio es de $" + (envio + impuestos + 200) + ". Incluye envio e impuestos")
    }

}
    
function comprar() {
    alert ("Su tote ha sido agregada al carrito")
}




