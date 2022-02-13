
/* 
USO ESTRICTO DE JAVASCRIPT
-Elima algunos errores silenciosos de js. 
Cosas que mostraban advertencias, ahora lanzan errores
-Corrige errores para permitit optimizaciones
-Prohibe ciertas sintaxis que probablemente se usaran en versiones futuras de ECMAScript
*/

"use strict";

/* DOM
Document Object Model
Una representacion estructurada del documento html
Puede ser modificado con un lenguaje de programacion
*/


//Muestra la coleccion de elementos que corresponde a la 
// etiqueta indicada
let paragraphs = document.getElementsByTagName( "p" )
//console.log( paragraphs[0].innerText )
//console.log( paragraphs[1].innerText )

//Coleccion de elementos que posee la clase indicada
let elementsByClass = document.getElementsByClassName( "product-card" )
//console.log( elementsByClass[0].innerHTML )

//Elemento que posee el id indicado
let elementById = document.getElementById("carrito-compras")
//console.log(elementById)

//Realiza una busqueda a partir de cierto selector 
//y devuelve el primer elemento que coincida

let firstElementP = document.querySelector( "div" )
//console.log( firstElementP )

let firstElementByClass = document.querySelector( ".product-card" )
//console.log( firstElementByClass )

let firstElementById = document.querySelector( "#carrito-compras" )
//console.log( firstElementById )


let collectionElements = document.querySelectorAll( "div" )
//console.log( collectionElements )

let title = document.querySelector( "h1" )
console.log(title.innerText)
title.innerText = "ESTE ES UN NUEVO TITULO"
console.log(title.innerText)


let card = document.querySelector( ".product-card" )

console.log( card.innerHTML )

card.innerHTML += `
    <h2> SOY NUEVO HTML </h2>
    <img src="https://picsum.photos/100/100" alt="">
`
//Agrega una o mas clases
card.classList.add( "nueva-clase", "otra" ) 
console.log( card.classList )

//Elimina la clase indicada
card.classList.remove( "otra" )
console.log( card.classList )

let input = document.getElementsByTagName("input")[0]
console.log( input )



input.setAttribute("type", "text")



