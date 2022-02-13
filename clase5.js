
/*
    ESTRUCTURAS DE CONTROL

    CICLOS / BUCLE
    Estructuras que me permiten llevar a cabo un proceso determinado numero de veces
    
    FOR 

    for( let contador = valorInicial ; condicion ; contador++ ){
        //instrucciones que se van a repetir en cada iteracion del ciclo    
    } 

    incremento --> contador ++
    decremento --> contador --
*/
/*
for( let i = 0; i <= 10 ; i++ ){
    console.log( i )
}

console.log( "Acabó el for" )
*/

/*
    iteracion   valori  console.log(i)  modificacioni
    1           i = 0   0               i = i + 1 = 0 + 1 = 1
    2           i = 1   1               i = i + 1 = 1 + 1 = 2
    ...
    11          i = 10 10               i = i + 1 = 10 + 1 = 11 
*/


/*
ARREGLOS / ARRAYS
Estructuras que me permiten agrupar otros datos y asignarles una posicion

                indice 0    indice 1    indice2 ...
let arreglo = [ elemento1, elemento2, elemento3,... ]
*/

let arregloDatos = [ "cadena de texto", 10, true ]
console.log( arregloDatos )

console.log( typeof arregloDatos[0] )
console.log( typeof arregloDatos[1] )
console.log( typeof arregloDatos[2] )

const ARREGLO_FRUTAS = [ "fresa", "manzana", "guayaba", "limon" ]
console.log( ARREGLO_FRUTAS )

//Puedo llevar a cabo modificaciones en un arreglo guardado 
//en una constante porque no implica reasignaciones
ARREGLO_FRUTAS.push( "aguacate" )
console.log( ARREGLO_FRUTAS )

//Esto no es posible, porque es una reasignacion
//ARREGLO_FRUTAS = [ "fresa", "manzana", "guayaba", "limon", "aguacate", "sandia" ]

let arregloNombres = [ "Brenda", "Jesus", "Daniel", "German" ]
let arregloNombres2 = arregloNombres

console.log( arregloNombres )
console.log( arregloNombres2 )

arregloNombres2.push( "Samantha" )

console.log( arregloNombres )
console.log( arregloNombres2 )


//spread operator 
//let arregloCopia = [ "Brenda", "Jesus", "Daniel", "German" ]
let arregloCopia = [ ...arregloNombres ]
console.log( arregloCopia )

arregloCopia.push( "Benjamin" )
console.log( arregloNombres )
console.log( arregloNombres2 )
console.log( arregloCopia )


//PROPIEDAD LENGTH
//Devuelve la cantidad de elementos que conforman al arreglo
//indiceUltimoElemento = arreglo.length - 1
console.log( arregloCopia.length )
console.log( [].length )


let arregloAnimales = [ "gato", "hamster" ]
//push --> agrega uno o mas elementos al final del arreglo
let valorDevueltoPush = arregloAnimales.push( "perro", "serpiente" )
console.log( arregloAnimales )
console.log( valorDevueltoPush )