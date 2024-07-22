// Ejercicio 5

/*
Escenario:
    El colegio de Secundaria Instituto Maria Mercedez necesita verificar los nombres de los
    estudiantes que se llamen Santiago para hacerles una prueba cognitiva
    Tarea: Hacer una validacion de formato Para saber el nombre del estudiante
*/

// Se obtiene el nombre del estudiante
const nombreEstudiante = "Santiago"

function validarNombreEstudiante(nombre) {
    // Expresión regular para validar el nombre "Santiago"
    const regex = /^Santiago$/i;
    return regex.test(nombre);
}


// Si la funcion es verdadera se entrega el formato en uno mas legible
if(validarNombreEstudiante(nombreEstudiante)){
    console.log("El estudiante se llama Santiago")
}else{
    console.log("El estudiante No se llama Santiago")
}