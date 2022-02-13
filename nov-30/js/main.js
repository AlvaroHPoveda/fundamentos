

"use strict"

/*let body = document.querySelector("body")

//.createElement() me permite crear un elemento
let title = document.createElement("h1")

//Agregar atributos
title.id = "title"
title.className = "title-class"

title.textContent = "ESTE ES UN TITULO DINAMICO"

let span = document.createElement("span") 
span.textContent = "span"

title.appendChild( span )

//Inserta un elemento como ultimo hijo de otro elemento
body.appendChild( title )


//Inserta un elemento antes de los hijos que ya existen en otro elemento
let img = document.createElement("img")
img.src = "https://picsum.photos/seed/picsum/200/300"

body.prepend( img )


//Elimina elementos del DOM
let paragraph = document.getElementsByTagName("p")[0]

paragraph.remove()
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
        email: 'daniela@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
      {
        name: 'Brenda',
        age: 26,
        email: 'brenda.unam.mx',
        social: [
            { name: 'facebook', url: 'facebook/brenda' },
            { name: 'twitter', url: 'twitter/brenda' }
        ],
        gender: 'Female'
    },
]


let contenedor = document.getElementById("user-container")

/*contenedor.innerHTML = `
    <div class="user-card">
        <h3>NOMBRE DEL USUARIO</h3>
        <h4>EDAD: 00 </h4>
        <h4>EMAIL: email@email.com </h4>
        <a href="facebook.com">Facebook</a>
        <a href="twitter.com">Twitter</a>
    </div>
`
*/


/*let fragment = new DocumentFragment()

for(let i = 0; i < users.length; i++ ){

    let card = document.createElement("div")
    card.className = "user-card"

    let name = document.createElement("h3")
    name.textContent = `${ users[i].name }`

    let age = document.createElement("h4")
    age.textContent = `EDAD: ${ users[i].age }`

    let email = document.createElement("h4")
    email.textContent = `EMAIL: ${ users[i].email }`

    let fb = document.createElement("a")
    fb.href = `${users[i].social[0].url }`
    fb.textContent = `${ users[i].social[0].name }`

    let twitter = document.createElement("a")
    twitter.href = `${users[i].social[1].url}`
    twitter.textContent = `${users[i].social[1].name}`

    card.appendChild( name )
    card.appendChild( age )
    card.appendChild( email )
    card.appendChild( fb )
    card.appendChild( twitter )

    //contenedor.appendChild( card )
    fragment.appendChild( card )
}

contenedor.appendChild( fragment )

*/

let fragmentFake = `` 
/*for( let i = 0; i < users.length ; i++ ){
    fragmentFake += `
        <div class="user-card">
            <h3>${users[i].name }</h3>
            <h4>EDAD: ${ users[i].age } </h4>
            <h4>EMAIL: email@email.com </h4>
            <a href="facebook.com">Facebook</a>
            <a href="twitter.com">Twitter</a>
        </div>
    `
}
contenedor.innerHTML = fragmentFake
*/
/*for of

for( let elementos of iterable ){
    //instrucciones que se van a repetir con cada variable
}*/

/*for( let elemento of users ){
    fragmentFake += `
        <div class="user-card">
            <h3>${elemento.name }</h3>
            <h4>EDAD: ${ elemento.age } </h4>
            <h4>EMAIL: email@email.com </h4>
            <a href="facebook.com">Facebook</a>
            <a href="twitter.com">Twitter</a>
        </div>
    `
}*/


let resultado = users.forEach( function listar( elemento ) {
    console.log( elemento.name )
    fragmentFake += `
        <div class="user-card">
            <h3>${elemento.name }</h3>
            <h4>EDAD: ${ elemento.age } </h4>
            <h4>EMAIL: email@email.com </h4>
            <a href="facebook.com">Facebook</a>
            <a href="twitter.com">Twitter</a>
        </div>
    `
    return "something"
})

console.log( resultado )

contenedor.innerHTML = fragmentFake


/*
Funciones anonimas
Arrow functions
Funciones autoinvocadas
Funciones de orden superior 
Closures
*/