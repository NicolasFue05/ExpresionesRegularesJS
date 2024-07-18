# Expresiones Regulares (Regex) en JavaScript

## ¿Qué son las expresiones regulares?

Las expresiones regulares, también conocidas como regex, son patrones de búsqueda y manipulación de texto. Permiten encontrar ciertos patrones dentro de cadenas de texto, realizar reemplazos y validar formatos de datos. Son extremadamente útiles en la programación y en el procesamiento de texto en general.

## ¿Cómo se usan en JavaScript?

En JavaScript, las expresiones regulares se pueden crear utilizando el objeto `RegExp` o utilizando la notación literal `/.../`. A continuación se muestra un ejemplo básico de cómo utilizar expresiones regulares en diferentes contextos:

### Ejemplos de uso

1. **Búsqueda de patrones:**

   ```javascript
   // Definir una expresión regular para buscar direcciones de correo electrónico
   var pattern = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;

   // Texto de ejemplo
   var texto = "Ejemplo de correo: usuario@example.com";

   // Buscar la coincidencia
   var resultado = pattern.exec(texto);

   if (resultado) {
       console.log("Correo encontrado:", resultado[0]);
   } else {
       console.log("Correo no encontrado.");
   }
    ```

En este texto la expresion regular `/.../'se utiliza para buscar direcciones de correo electronico en el texto.

## Recursos
Recursos utilizados para aprender más sobre expresiones regulares en JavaScript:
- Documentación oficial de MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp]
- Sitio Web de Regex101: [https://regex101.com/]

### Autor
[NicolasFue05][https://github.com/NicolasFue05]