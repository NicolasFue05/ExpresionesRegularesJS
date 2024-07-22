// Ejercicio 4

/*
    Escenario:
    La empresa de envios de Amazon Americas necesita saber que el codigo postal de sus
    usuarios es de El pais de estados unidos para poder efectuar sus envios unicamente en
    este pais
    Tarea: Hacer una validacion de formato para el Codigo Postal Americano utilizando
    Expresiones Regulares
*/

// Se obtiene el codigo postal del usuario
const codigoPostal = "12345-6789"

function validarCodigoPostalUSA(codigoPostal) {
    // Expresión regular para validar códigos postales de EE.UU.
    const regex = /^\d{5}(-\d{4})?$/;
    return regex.test(codigoPostal);
}


// si la funcion devuelve verdadero el codigo postal es de EE.UU.
if(validarCodigoPostalUSA(codigoPostal)){
    console.log("El codigo postal es de EE.UU.")
}else{
    console.log("El codigo postal No es de EE.UU.")
}