// Ejercicio 3

/*
Escenario:
    La empresa Movistar necesita comprobar que un numero de telefono es 
    internacional para poder acceder a sus paquetes de datos exclusivos
    Tarea: Hacer una validacion de formato para el numero de telefono internacional
    utilizando Expresiones Regulares
*/

// se obtiene el numero de telefono internacional del usuario
const numeroInternaciol = "+1 123 456 7890"
// Expresión regular para validar números de teléfono internacionales
const regex = /^\+(?:[1-9]\d{0,2})\s?(?:\d\s?){6,14}\d$/;


function validarNumeroInternacional(numero) {
    return regex.test(numero);
}

// Si la funcion devuelve verdadero se transforma el formato a uno mas lejible
if(validarNumeroInternacional(numeroInternaciol)){
    console.log("El numero es Internacional")
}else{
    console.log("El numero No es Internacional")
}