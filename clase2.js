
//Caracteristicas
/*
    -Alto nivel
    -Interpretado
    -Tipado dinamico
    -Multiparadigma
    -Case sensituve
    -no necesita forzosamente punto y coma, excepto 
    cuando la siguiente instruccion empieza con [], (), {}
*/

//VARIABLES
/*
    -camelCase 
    -nombres significativos
    -Pueden iniciar con $ o _
*/

/*var userName = "Brenda";
let otherUserName = "Alvaro";

console.log( userName );

userName = "Otro nombre";

console.log( userName );

for( let i = 0; i < 1; i++ ){
    var variableUno = 10
    let variableDos = 15

    console.log( variableUno )
    console.log( variableDos )
};

console.log( variableUno );
*/
//console.log( variableDos );


//Constantes --> valores fijos a los cuales no podemos reasignarles un valor
/*const PI = 3.1416
const E = 2.7

console.log( PI )

let age 
console.log( age )
age = 26
console.log( age )
*/

/*
//Cuando declaramos una constante es necesario asignarle un valor.
const CONSTANT_VALUE

CONSTANT_VALUE = "Un valor constante"
console.log( CONSTANT_VALUE )
*/

//TIPOS DE DATOS

/*
    -STRING/CADENA DE TEXTO
        let cadenaDeTexto = "Esta es una cadena de texto";
        let otraCadenaDeTexto = 'También soy una cadena de texto';
        let cadenaTextoNumero = "10"

        console.log( cadenaDeTexto );
        console.log( otraCadenaDeTexto );

    -NUMBER/NUMEROS
        let numeroEntero = 10;
        let numeroDecimal = 3.1416;

        console.log( numeroDecimal, numeroEntero );

        //Numeros especiales: Son considerados numeros, pero NO se comportan como numeros

        //Infinity, -Infinity
        //NaN --> Not A Number --> Se obtiene al realizar operaciones que NO producen resultados significativos
        //NaN es de tipo numerico 

        console.log( Infinity - Infinity )

        //BOOLEANOS
        let verdadero = true
        let falso = false

        //Truthy y falsie --> valores booleanos instrinsecos a cada valor
        
            Falsy
                0
                ""
                null
                undefined
                NaN

            Truthy
                '0'
                'false'
                []
                {}

    -VALORES VACIOS
        //undefined --> No hay valor porque no esta definido todavía
        //null --> No existe. No hay valor porque asi se indico 

        let variableSinInicializar = null

        console.log( variableSinInicializar )

        Sirven para denotar la ausencia de valor significativo. 
        Son tipos de datos primitivos PERO NO TRAEN INFORMACION CONSIGO

        Cuando una operacion no produce un valor significativo produce 
        undefined simplemente porque TIENE que producir algun valor
*/

//OPERADORES

//Operadores de asignación
// =
let numeroPar = 20
// +=
numeroPar += 10
console.log( numeroPar )
//-=
//*=


//OPERADORES ARITMETICOS
//Nos permiten realizar operaciones aritmeticas con datos de tipo numero

console.log( 10 + 15 )
console.log( 15 - 5 )
console.log( 10 * 10 )
console.log( 20 / 5 )
console.log( 5 % 2 )

console.log( "10" + 15 )
console.log( typeof("10" + 15) )

console.log( 10 - "15" )
console.log( "15" - 10 )


//Conversion explicita --> convierte un dato a tipo numero
//parseInt( dato )

let randomNumber = "15"
console.log( 10 + randomNumber )

randomNumber = parseInt( randomNumber )
console.log( typeof randomNumber )
console.log( 10 + randomNumber )

let number = 10

console.log( number.toString() )
 