// Ejercicio 1 

/* 
Escenario:
    La empresa Campuslands recopilo los datos de una de sus paginas web,
    Campuslands necesita verificar que el numero de telefono que el incliente ingrese
    sea Colombiano
    Tarea: Hacer una validacion de formato para el numero de telefono utilizando Expresiones Regulares
*/




// Expresion regular para validar un numero de telefono Colombiano

function validateColombianNumber(number){
    // Eliminar los espacios al comienzo y al final 
    var number = number.trim()
    
    const pattern = /^(?:\+57|57)?([1-9]{1}[0-9]{6,9})$/; // Uso de la Expresion Regular
    
    // se declara una variable isColombian con el valor false por defector para verificar si el numero es colombiano
    let isColombian = false;
    
    // si el numero es colombiano devuelve el valor de la variable isColombian como {true}
    if(pattern.test(number)){
        isColombian = true
    }

    // convierte el numero en un codigo mas legible a la consola
    if(isColombian) {
         // Eliminar cualquier signo de más o espacios que puedan quedar
         number = number.replace(/[^\d]/g, '');
        
         // Formatear el número según el patrón deseado: +(57) 310 2199774
         var formattedNumber = `+(${number.substring(0, 2)}) ${number.substring(2, 5)} ${number.substring(5)}`;
         
         console.log(formattedNumber); // Output: +(57) 310 2199774
         
         return formattedNumber;
     } else {
         console.log("El número no es colombiano.");
         return null;
     }

}

var numberPhone = " +573102199774" // Numero de telefono obtenido en los datos del usuario

validateColombianNumber(numberPhone);
