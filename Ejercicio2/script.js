/* Escenario:
    La empresa Google necesita comprobar que los usuarios que se esten registrando en su nuevo plataforma tengan un correo de google alojado en el sistema
    Tarea: Hacer una validacion de formato para el correo electronico de google utilizando Expresiones Regulares
*/

// Se obtiene el correo electronico que ingresa el usuario
const correoUser = "nicolasfue05@gmail.com"
const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|googlemail\.com)$/; // Expresión regular para validar correos de Google

function validarCorreoGoogle(correo) {
    // se eliminan los espacios al comienzo y al final del correo para evitar errores
    correo = correo.trim()
    return regex.test(correo);
}

// Devolver el formato de manera mas legible en consola dependiendo del return de la funcion
if(validarCorreoGoogle(correoUser)){
    console.log("El correo electronico SI se encuentra en el sistema y hace parte de los correos de Google")
}else{
    console.log("El correo electronico NO se encuentra en el sistema y NO hace parte de los correos de Google")
}