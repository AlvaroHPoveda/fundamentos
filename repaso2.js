
let globos = [
    {
        color: "amarillo"
    },
    {
        color: "amarillo"
    },
    {
        color: "rojo"
    },
    {
        color: "azul"
    },
    {
        color: "amarillo"
    },
    {
        color: "amarillo"
    },
    {
        color: "rojo"
    },
    {
        color: "verde"
    },
     {
        color: "negro"
    },
]

//recorrer el arreglo y sacar elemento por elemento
//evaluar el color del globo y "añadirlo" donde corresponda
//si es un color nuevo: añado una nueva caja, le coloco el 
//nombre del color que corresponde y guardo EL PRIMER globo de ese color
//Si es un color que ya existe simplemente lo agregamos a donde corresponde

/*
colores = {
    amarillo: 1,
    rojo: 1
}
*/

let contadorColores = {}

for( let i = 0; i < globos.length; i++ ){
    if ( contadorColores[ globos[i].color ] ) {
        //Ya existe la propiedad
        contadorColores[ globos[i].color ] += 1
        //  contadorColores[ globos[i].color ] =  contadorColores[ globos[i].color ] + 1
    } else {
        //aun no existe la propiedad
        contadorColores[ globos[i].color ] = 1
    }
}
console.log( contadorColores )
/*
    agregar una propiedad --> objeto[nuevaPropiedad] = valor inicial
    modificar una propiedad --> objeto[propiedad] = nuevo valor
*/

/*
Tendremos una variable maxNumber para guardar el numero mas grande
Vamos a comparar cada valor con maxNumber. Cuando el valor sea mayor a maxNumber, 
reasignaremos el valor a maxNumber --> maxNumber = valor
*/

let maxNumber = 0
let mostRepeated = null
for( const color in contadorColores ){
    if( maxNumber < contadorColores[ color ] ){
        maxNumber = contadorColores[ color ]
        mostRepeated = color
    }
}

console.log( `El color de globos mas repetido es ${mostRepeated} con una cantidad de ${ maxNumber } globos` )


let arreglo1 = [ 1, 2, 3 ]
let arreglo2 = [ 4, 5, 6 ]

console.log( arreglo1.concat( arreglo2 ) )

//Crear una funcion que reciba un arreglo de numeros como parameto y 
//retorne un arreglo que contenga unicamente los numeros positivos 

let numbersArray = [ -2, 5, 7, -10, -8, 0, 2 , 11, -15] // --> [ 5, 7, 2, 11 ]

function getPositiveNumbers( numbers ) {
    let positiveNumbers = []

    for( let i = 0; i < numbers.length; i++ ){
        if( numbers[i] > 0 ){
            positiveNumbers.push( numbers[i] )
        }
    }

    return positiveNumbers
}

getPositiveNumbers( numbersArray )

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

//Una funcion que busque a un usuario con ayuda de su url de fb y lo devuelva

function findUser( users, fbUrl ) {
    for( let i = 0; i < users.length; i++ ){
        if( users[i].social[0].url === fbUrl ){
            return users[i]
        }
    }
}

let userFound = findUser( users, "facebook/andrea" )
console.log( userFound )