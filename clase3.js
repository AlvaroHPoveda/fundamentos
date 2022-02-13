//OPERADORES DE COMPARACIÓN
/*
console.log( "10" == 10 )
console.log( "10" === 10 )

console.log( NaN == NaN ) //Es el unico valor
console.log( Infinity === Infinity )

console.log( null == undefined )
console.log( null === undefined )

console.log( undefined == "" )
console.log( null == "" )
console.log( "" === " " )

//Diferente a !=

console.log( 10 != 50 )
console.log( 10 != 10 )
console.log( 10 != "10" )
console.log( 10 !== "10" )
console.log( "brenda" !== "BRENDA" )
*/

//Menor que /menor o igual que

/*console.log( 10 < 50 )
console.log( 15 < 5 )
console.log( 15 < 15 )
console.log( 10 < 10.5 )
console.log( 100 < Infinity )
console.log( 15 <=15  )
console.log( Infinity <= Infinity  )

console.log( "Brenda" < "brenda" )

//Mayor que / mayor o igual que

console.log( 15 > 10 )
console.log( 0 > 5 )
console.log( 3 > 3 )
console.log( 3 >= 3 )
*/

//OPERADORES LÓGICOS

//NOT / negacion --> Invierte en valor de verdad del dato al cual es aplicado
let verdadero = true
let falso = false

console.log( !verdadero )
console.log( !falso )

//AND  --> Se obtiene un valor verdadero unicamente cuando ambos operandos son verdaderos

console.log( verdadero && verdadero ) //true
console.log( verdadero && falso ) //false
console.log( falso && verdadero ) //false
console.log( falso && falso ) //false

//OR --> Basta con que uno de los dos operandos sea verdadero para obtener un resultado verdadero

console.log( verdadero || verdadero ) //true
console.log( verdadero || falso ) //true
console.log( falso || verdadero ) //true
console.log( falso || falso ) //false


console.log( ( 10 < 5 ) && ( 0 < 5 ) )
console.log( ( 10 < 5 ) || ( 0 < 5 ) )




//Condicionales

/*
    CONDICION
        LA CONDICION SE CUMPLE
            Instrucciones que se llevan a cabo si la condicion se cumple
        LA CONDICION NO SE CUMPLE
            Instrucciones alternas
            Se pasa a la siguiente instruccion

    if( condicion ){
        lleva a cabo ciertas instrcciones
    }else{
        instrucciones alternas
    }
*/

let contraseña = ""
let correo = "correo de usuario"

if( {} ){
    //instrcciones a ejecutar si la condicion se cumple
    console.log( "La condicion es verdadera" )
} else{
    //instrucciones alternas
    console.log( "La condicion no se cumplió" )
}


