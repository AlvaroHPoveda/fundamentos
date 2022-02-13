
/*
-   Obtener la longitud de la última palabra de 
    una frase cualquiera
-   Reemplazar la última palabra de una frase 
    cualquiera por la palabra gato
*/

/*
    -Necesito ubicar el ultimo espacio dentro de la frase
    -Despues de ese espacio, y hasta llegar al final de la cadena
        estara delimitada la ultima palabra
    -Cuando tengo el pedazo de la cadena de texto que contiene la ultima palabra
        la puedo almacenar
    -Mido su longitud
    -Devuelvo el valor de la longitud
*/

let something = "esta es una frase cualquiera"

function countLastWord( frase ) {
    let lastSpaceIndex = frase.lastIndexOf( " " )
    let word = frase.slice( lastSpaceIndex + 1 )

    return word.length
}

console.log( countLastWord( something ) )
console.log( countLastWord( "esta es una frase distinta" ) )

function replaceLastWord( frase ){
    let lastSpaceIndex = frase.lastIndexOf( " " )
    let substringPhrase = frase.slice( 0, lastSpaceIndex + 1 )
    let newPhrase = substringPhrase + "gato"

    return  newPhrase
}
console.log( replaceLastWord( "Esta es una prueba frase de prueba" ) )