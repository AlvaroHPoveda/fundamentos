



/*function populateArray(numero, limite) {
    let multiplosArray = []

    for( let i = numero + 1; i < limite; i++ ){
        if( (i % numero) === 0 ){
            multiplosArray.push(i)
        }
    }

    return multiplosArray
}*/

function  populateArray(numero, limite) {
    let multiplosArray = []
    for( let i = numero + numero ; i < limite; i +=numero ){
        multiplosArray.push(i)
    }
    return multiplosArray
}

let resultado = populateArray( 13, 100 )

//console.log( resultado )



let arregloPar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]  //.length = 10  --> 5
                 /*  0  1  2  3  4  5  6  7  8  9
                        .length/2 -1, .length / 2
                   [1, 2, 3, 4] //4  --> 2
                    0  1  2  3
*/

let arregloImpar = [ 1, 2, 3, 4, 5 ] // .length = 5 --> 2.5
//                  0   1  2  3  4

function middleNumber( array ){
    let longitud = array.length
    let resto = longitud % 2


    if( resto === 0 ){ //es par
        let nuevoArreglo = [ array[ (array.length / 2) - 1 ], array[ array.length / 2  ] ]
        return nuevoArreglo
    }else{ // no es par

    }

}

//console.log( middleNumber( arregloPar ) )

//propiedad = "name", "age", "email"
//objeto.propiedad === value
//objeto[propiedad] === value

/*
let users = [ { name: 'Georg', email: 'georg@academlo.com', }, { name: 'Andrea', email: 'andrea@gmail.com', } ]
let attendance = [ { email: 'andrea@gmail.com', attendance: false }, { email: 'georg@academlo.com', attendance: true }, ]

function mergeData( users, attendance ){

    for( let i = 0; i < users.length; i++  ){
        for( let j = 0; j < attendance.length; j++ ){
            if( users[i].email === attendance[j].email ){
                //users[i].attendance = attendance[j].attendance
                users[i] = Object.assign(users[i], attendance[j] )
            }
        }
    }
    return users
}

console.log( mergeData( users, attendance) )


let objeto = {
    name : "Brenda", 
    lastName : "Gonzalez",
    age: 26,
    hobbies : [ "leer", "hornear", "acariciar gatos" ]
}

for( const propiedad in objeto){
    console.log( `El valor de la propiedad ${ propiedad } es : ${ objeto[propiedad] }` )
}

*/



function sumEvens( start, end ){
    let suma = 0

    for( let i = start + 1; i < end; i++ ){
        if( (i % 2) === 0 ) suma += i
    }

    console.log( suma )
}

sumEvens( 19, 30 )

