
/*const USER = {
    name: "Brenda Gonzalez",
    edad: 26,
    email: "brenda@academlo.com",
    pasatiempos: [ "hornear", "cantar", "programar" ],
    vacunacionCompleta: true,
    mascotas:{
        name: "Juno",
        especie: "Gato"
    },
    saludar: function(){
        console.log( "Hola! mi nombre es Brenda" )
    },
    nombreDelMetodo(params) {
        console.log( "soy un metodo" )
    }
}

//accesar al valor de una propiedad
console.log( USER.name )
//accesar al valor de una propiedad cuando la propiedad tiene forma de string
console.log( USER["edad"] )

function extraerPropiedad(propiedad) {
    console.log( USER[propiedad] )
}

extraerPropiedad( "pasatiempos" )

//Crear una nueva propiedad
//objeto.propiedad = "valor que quiero guardar"

//Modificar una propiedad existente
//objeto.propiedad = "el nuevo valor"

//Eliminar una propiedad
//delete objeto.propiedad

delete USER.email
console.log( USER )


delete USER.mascotas.especie
console.log( USER )

USER.mascotas.especie = "Gato"
USER.mascotas.comidaFavorita = "Croquetas"
console.log( USER )

console.log( USER.pasatiempos )
console.log( USER.pasatiempos[0] )

USER.pasatiempos.push( "leer" )
console.log( USER.pasatiempos )

*/


const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

console.log( users[0].social[0].url )

//Generar una lista de nombres de todos los usuarios

/*
let usersNames = []

usersNames.push( users[0].name )
usersNames.push( users[1].name )
usersNames.push( users[2].name )
usersNames.push( users[3].name )
usersNames.push( users[4].name )

console.log( usersNames )
*/
/*
    Estructura de un for que recorrera un arreglo

    for( let i = 0; i < arreglo.length; i++ ){
        //lo que queremos llevar a cabo con cada uno de los elementos

        let elementoActual = arreglo[i]
    }
*/


let usersNames = []

for( let i = 0; i < users.length; i++ ){
    usersNames.push( users[i].name )
}

console.log( usersNames )

//funcion que determine si un numero es par o impar


//Determinar si el numero genera residuo al dividirse entre2  (modulo)
//Si el residuo es = 0 --> el numero es par
//si el residuo != 0 --> el numero NO es par --> es impar

/*
function determinarNumero( numero ) {
    let residuo = numero % 2
    if( residuo === 0 ){
        return `El numero ${ numero } es par`
    }else{
        return `El numero ${ numero } es impar`
    }
}
console.log( determinarNumero( 10 ) )
console.log( determinarNumero( 9 ) )
*/

let arregloDesordenado = [ {name: "Susanita", age: 60 }, {name: "Brenda", age: 26 }, {name: "Pedrito", age: 12 } ]

console.log( arregloDesordenado.sort(function compareNumbers(a, b) {
  return a.age - b.age;
}) )