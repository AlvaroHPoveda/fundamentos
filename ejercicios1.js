



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

    //console.log( suma )
}

sumEvens( 19, 30 )


//ENCONTRAR EL NUMERO DE ESTUDIANTES DE UN PAIS


let students = [ { name: 'Georg', email: 'georg@academlo.com', country_id: 1, }, { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2, }, { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2, } ];
let countries = [ { id: 1, name: 'Mexico', }, { id: 2, name: 'Colombia', } ];
let countryName = 'Colombia'


function countStudentCountry( students, countries, countryName ) {
    //relacionar countryName con un id

    let idCountry = null;
    let counter = 0;

    for( let i = 0; i < countries.length; i++ ){
        if( countries[i].name === countryName ){
            idCountry = countries[i].id
        };
    };

    for( let i = 0; i < students.length; i++ ){
        if( students[i].country_id === idCountry ){
            //counter = counter + 1
            counter += 1
        };
    };

    return counter
}
console.log( countStudentCountry( students, countries, "Mexico" ) )



let objeto = {
    name: "Brenda",
    age: 26,
    propiedad: "valor", 
    mascotas:{
        name: "Juno"
    }
}

for( const propiedad in objeto  ){
    console.log( propiedad )
    console.log( objeto[propiedad] )
}

//objeto.propiedad
//objeto["propiedad"]


//Generar una lista de usuarios activos

let users = [
    { name: "Brenda", personalInformation:{ status: "active", favoriteDrink:"whisky", hobbie:"something"} },
    { name: "Jerson",  personalInformation:{ status: "active",favoriteDrink:"whisky" , hobbie:"something"}},
    { name: "Jorge", personalInformation: null },
    { name: "Erick", personalInformation:{ status: "active", favoriteDrink:"coffe", hobbie:"something"} },
    { name: "Georg",  personalInformation: null},
    { name: "Karen",  personalInformation:{ status: "active",favoriteDrink:"beer" , hobbie:"something"}},
    { name: "Ana", personalInformation:{ status: "active", favoriteDrink:"soda" , hobbie:"something"}},
    { name: "Daniel",  personalInformation: null },
    { name: "Gabriel", personalInformation:{ status: "active", favoriteDrink:"beer" , hobbie:"something"}},
    { name: "Juan Pablo",  personalInformation:{ status: "active",favoriteDrink:"soda", hobbie:"something" }},
    { name: "Israel", personalInformation:{ status: "active", favoriteDrink:"whisky", hobbie:"something" }},
    { name: "Leonardo",  personalInformation: null }
]

function getActiveUsers( users ){  
    let usuarioActivos = []

    for( let i = 0; i < users.length; i++ ){
        if( users[i].personalInformation != null   ){
            usuarioActivos.push( users[i] )
        }
    }

    return usuarioActivos
}
//console.log( getActiveUsers( users ) )


//Paginacion
//Funcion que va a devolver los elementos de un arreglo en bloques de 2
// usuarios y la pagina  


function pagination( users, page ){
    //USUARIOS VAN A TENER EL SIGUIENTE INDICE:   (page * 2) - 2, (page * 2) - 1
    usersPage = []
    if( users[ (page * 2) - 2 ] ){
        usersPage.push( users[ (page * 2) - 2 ] )
    }

    if( users[ (page * 2) - 1 ] ){
        usersPage.push( users[ (page * 2) - 1 ] )
    }

    return usersPage
}

console.log( pagination( users, 3 ) )

//A partir de un arreglo de usuarios, contar a cuantas personas les gusta cada una de las bebidas


function countFavoriteDrinks( users ) {
    let usuarioActivos = []

    for( let i = 0; i < users.length; i++ ){
        if( users[i].personalInformation != null   ){
            usuarioActivos.push( users[i] )
        }
    }

    let contadorBebidas = {}

    for( let i = 0; i < usuarioActivos.length; i++ ){
   
        let bebida = usuarioActivos[i].personalInformation.favoriteDrink

        if( contadorBebidas[bebida] ){
            //Ya existe la propiedad
            //contadorBebidas[bebida] = contadorBebidas[bebida] + 1
            contadorBebidas[bebida] += 1

        }else{
            //Aun no existe la propiedad
            contadorBebidas[bebida] = 1
        }
    }
    return contadorBebidas
}

let contador = countFavoriteDrinks( users )
//console.log( contador )

function worstDrink( objetoContador ) {
    
    let masPequeño = Infinity
    let bebidaMenosVotada = null

    for (const bebida in objetoContador ) {

        console.log( objetoContador[bebida], masPequeño  )
        if( objetoContador[bebida] < masPequeño ){
            masPequeño = objetoContador[bebida]
            bebidaMenosVotada = bebida
        }   
    }

    return bebidaMenosVotada
}

console.log(  worstDrink( contador ) )