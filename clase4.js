
/*
let name = "Sol";

console.log( name.length )

if( name.length > 7 ){
    console.log(`Hola ${ name }, tu nombre es muy largo` )
}else if( name.length === 7 ){
    console.log( `Hola ${ name }, ¡wow, tu nombre tiene 7 letras!` )
}else{
    console.log( `Hola ${ name }, creo que tu nombre es muy corto` )
}
*/

/*
if( condicion1 ){
    //instrucciones si la condicion1 se cumple
}else if( condicion2 ){
    //instrucciones si la condicion2 se cumple
}else{
    // instruccciones si ni la condicion1 ni la condicion2 se cumplen
}
*/

//Existe relacion entre el indice del ultimo caracter y la longitud de la cadena
// ultimoIndice = string.length - 1 

/*
let cadenaTexto = "Soy un string"
console.log( cadenaTexto.length )
console.log( cadenaTexto[12] ) //Si intentamos accesar a un indice no disponible nos dara undefined
console.log( cadenaTexto.charAt(20) ) //Si intentamos accesar a un indice no disponible nos devuelve una cadena vacia
*/

/*
    Averiguar si una frase contiene una palabra o no, si la contiene 
    tu código debe de generar true, en caso contrario debe de generar false
*/


//FUNCIONES

/*
function nombreDeLaFuncion( parametros ){
    //instrucciones para llevar a cabo cierta tarea especifica
} 
*/

let frase = "Esta es una frase"
let palabra = "gato"

function buscarPalabra( fraseParametro, palabraParametro ){
    return fraseParametro.includes( palabraParametro )
}

let resultado1 = buscarPalabra( frase, palabra )
console.log( resultado1 )
buscarPalabra( "Esta es una frase pasada directamente como argumento", "argumento" )
buscarPalabra( "tengo un gato", palabra )
