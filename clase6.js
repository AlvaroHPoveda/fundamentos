
//métodos importantes de los arreglos

//let animales = []
//push --> sirve para añadir uno o mas elementos al final de un arreglo, 
//devuelve la nueva longitud del arreglo
/*animales.push( "gato", "perro" )
console.log( animales )*/

//pop --> eliminar el ULTIMO elemento de un arreglo
//devuelve el elemento eliminado
/*
let elementoEliminado = animales.pop()
console.log( `el elemento eliminado fue ${elementoEliminado} `)
console.log( animales )*/

//unshift --> agrega elementos AL INICIO del arreglo
// devuelve la nueva longitu del arreglo


/*let nuevaLongitud = animales.unshift( "hamster", "tigre" )
console.log( `la nueva longitud del arreglo es: ${ nuevaLongitud }` )
console.log( animales )*/

//shift --> elimina el PRIMER elemento de un arreglo y devuelve el valor eliminado

/*let primerElementoEliminado = animales.shift()
console.log( `el elemento que se eliminó fue ${ primerElementoEliminado }` )
console.log( animales )*/

//splice --> me permite eliminar y agregar elementos a parti de un indice

//eliminar elementos

/*let meses = [ "enero", "febrero", "marzo", "abril", "domingo", "lunes","noviembre", "diciembre" ]

let indexStart = meses.indexOf( "domingo" )

meses.splice( indexStart, 2 )
console.log( meses )

let indexAbril = meses.indexOf( "abril" )
console.log( indexAbril )

meses.splice( indexAbril + 1 , 0, "mayo", "junio", "julio" )

console.log( meses )
*/

//slice --> extrae una copia de una parte del arreglo
//devuelve un nuevo arreglo con los elementos extraidos
/*
let numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let rango = numeros.slice( )
rango.push( 11 )
console.log( rango )
console.log( numeros )
*/
//split --> separa una cadena de texto en pequeños pedazos y los añade como elementos de un arreglo
/*
let frase = "Mi nombre es Brenda y tengo 26 años"

let palabrasArray = frase.split( " " )

console.log( palabrasArray )

console.log( palabrasArray[3] )
*/
//join --> une todos los elementos de un arreglo para formar una cadena de texto
/*let nuevaCadena = palabrasArray.join( " " )
console.log( nuevaCadena )
*/

//OBJETOS
/* 
Son abstracciones de objetos reales
Poseen propiedades ( caracteristicas )
Tienen metodos, ( acciones )
Object 
let objeto = {
    propiedad : valor,
    propiedad2 : valor2,
    key : value,
    clave : valor,
    metodo : function( parametros ){
        //accion a realizar
    },
}
*/

const objetoJuno = {
    especie : "Gato",
    nombre: "Juno",
    edad: 4,
    color: "Calico",
    hobbies: [ "dormir", "acurrucarse", "saltar por las noches" ],
    statusSalud: {
        vacunacion : true,
        desparacitacion: true,
    },
    ronronear: function() {  
        console.log( "prrrrrrrrrrr" )
    },
}

let nombreMascota = objetoJuno.nombre
console.log( nombreMascota )

console.log( objetoJuno.hobbies )
console.log( objetoJuno.comidaFavorita )

//accesar a un metodo
objetoJuno.ronronear()

console.log( objetoJuno.hobbies[1] )
console.log( objetoJuno.statusSalud.vacunacion )

//Otra manera de accesar a los valores de las propiedades
console.log( objetoJuno["especie"] )



//Maneras de modificar un objeto

objetoJuno.color = "Colorcitos"
console.log( objetoJuno.color )

objetoJuno.comidaFavorita = "Croquetas"

console.log( objetoJuno.comidaFavorita )
console.log( objetoJuno )


//extraer propiedades de forma dinamica
function extraerPropiedad( propiedad ){
    console.log( typeof propiedad )
    console.log( objetoJuno[ propiedad ] )
}

extraerPropiedad( "hobbies" )
extraerPropiedad( "nombre" )