/*
students = [
  { name: "Georg", age: 23 },
  { name: "Andrea", age: 25 },
  { name: "Daniela", age: 25 },
  { name: "José", age: 27 },
];

function findRepeatedAge(students) {
  let contadorEdad = {};
  for (let i = 0; i < students.length; i++) {
    if (contadorEdad[students[i].age]) {
      contadorEdad[students[i].age] += 1;
    } else {
      contadorEdad[students[i].age] = 1;
    }
  }
  let maxNumber = 0;
  let mostRepeated = null;
  for (const age in contadorEdad) {
    if (maxNumber < contadorEdad[age]) {
      maxNumber = contadorEdad[age];
      mostRepeated = age;
    }
  }
  return parseInt(mostRepeated);
}
console.log(findRepeatedAge(students));
*/

/*Pagina los datos de un arreglo
Este ejercicio consiste en devolver los elementos de un arreglo en bloques de 2, cada bloque representa
una página, por ejemplo: los primeros 2 elementos son la primer página, los siguientes 2 elementos son la
segunda página, etc.
Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Daniela', email: 'daniela@academlo.com', }, { name: 'Juan', email: 'juan@academlo.com', },
{ name: 'Luis', email: 'luis@academlo.com', }, { name: 'Pedro', email: 'pedro@academlo.com', } ];
page=2
El arreglo que debemos retornar es [ { name: 'Luis', email: 'luis@academlo.com', },
{ name: 'Pedro', email: 'pedro@academlo.com', } ]
ya que Luis y Pedro se encuentran en la página 2, mientras que Daniela y Juan se encuentran en la primer
página.
Descripción de la función
Escribe el código necesario en la función paginateUsers() para que retorne todos los usuarios que se
encuentren en la página que recibe como parámetro.
Parámetros de la función:
array users: El arreglo de usuarios.
numberpage: La página que tienes que devolver
Retorno de la función
array: Un arreglo con todos los usuarios que se encuentren en la página recibida. */
/* MI LOGICA!!!!!!!!!!!!!!!!!!!!!!!!!!
    1 = [0,1] 2*(1-1)=0 + 1
    2 = [2,3] 2*(2-1)=2 + 3 
    3 = [4,5] 2*(3-1)=4 + 5
    4 = [6,7] 2*3=6 + 7
    5 = [8,9] 2*4=8 + 9    
*/
/*
let users = [
  { name: "Daniela", email: "daniela@academlo.com" },
  { name: "Juan", email: "juan@academlo.com" },
  { name: "Luis", email: "luis@academlo.com" },
  { name: "Pedro", email: "pedro@academlo.com" },
  { name: "Jhon", email: "daniela@academlo.com" },
];
let numberpage = 2;
function paginateUsers(users, numberpage) {
  let numberN = 2 * (numberpage - 1);
  let a = [];
  if (users[numberN]) {
    a.push(users[numberN]);
  }
  if (users[numberN + 1]) {
    a.push(users[numberN + 1]);
  }
  return a;
}
console.log(paginateUsers(users, numberpage));
*/
/*Cuenta los estudiantes que han enviado su aplicación por cada canal
Todas las personas que crean una cuenta en Academlo vienen de algún canal, por ejemplo, algunos vienen de
youtube, otros de facebook, otros más de twitter, etc.
Este ejercicio consiste en contar cuantos usuarios han enviado su aplicación y desde que canal vienen,
así que tenemos que tomar en cuenta 2 factores.
El canal del que vienen
Que hayan enviado su aplicación
Ejemplos
Recibimos los siguientes datos:
users = [ 
  { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null }, 
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, 
  { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } }, 
  { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } } 
];
En esta ocasión debemos de retornar un objeto como el siguiente { youtube: 1, twitter: 2 }
Ya que 1 persona de las que enviaron su aplicación vienen de youtube y 2 de twitter.
Descripción de la función
Escribe el código necesario en la función countApplicationsByChannel() para que retorne los estudiantes que
han enviado su aplicación por canal.
Parámetros de la función:
array users: El arreglo de usuarios.
Retorno de la función
object: Un objeto con la cantidad de usuarios que han enviado su aplicación por cada canal./
*/
/*
users = [
  {
    name: "Andrea",
    email: "andrea@gmail.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Daniela",
    email: "daniela@gmail.com",
    channel: "youtube",
    application: { country: "Colombia", state: "Bogotá" },
  },
  {
    name: "Alondra",
    email: "alondra@gmail.com",
    channel: "twitter",
    application: { country: "Colombia", state: "Bogotá" },
  },
  {
    name: "Luis",
    email: "luisa@gmail.com",
    channel: "twitter",
    application: { country: "México", state: "Nuevo León" },
  },
  {
    name: "Luis",
    email: "luisa@gmail.com",
    channel: "twitter",
    application: { country: "México", state: "Nuevo León" },
  },
  {
    name: "Luis",
    email: "luisa@gmail.com",
    channel: "facebook",
    application: { country: "México", state: "Nuevo León" },
  },
];

function countApplicationsByChannel(users) {
  let contadorAplicacion = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i].application !== null) {
      if (contadorAplicacion[users[i].channel]) {
        contadorAplicacion[users[i].channel] += 1;
      } else {
        contadorAplicacion[users[i].channel] = 1;
      }
    }
  }
  return contadorAplicacion;
}
console.log(countApplicationsByChannel(users));
*/

/*
Encuentra los estudiantes que han enviado su aplicación
En Academlo hay muchas personas que crean una cuenta, pero no todos envían su aplicación para ingresar a nuestros cursos.
Este ejercicio consiste en obtener a todas las personas que sí hayan enviado su aplicación.
Ejemplos
Recibimos los siguientes datos:

users = [ { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
{ name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
{ name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, ];

El arreglo que debemos retornar es
[ { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
{ name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } } ]

ya que Solo Georg y Daniela han enviado su aplicación

Descripción de la función
Escribe el código necesario en la función getStudentsApplications() para que retorne todos los usuarios que han enviado
su aplicación.

Parámetros de la función:
array users: El arreglo de usuarios.
Retorno de la función
array: Un arreglo con todos los usuarios que han enviado su aplicación.
Restricciones
Los objetos dentro del arreglo de usuarios siempre tendrán la siguiente forma:
{ name: 'nombre', email: 'correo', channel: 'canal por el cual nos conocieron', application: { country: 'país de residencia', state: 'estado de residencia' } }
*/
/*
let users = [
  {
    name: "Erik",
    email: "erik@academlo.com",
    channel: "youtube",
    application: { country: "Mexico", state: "Nuevo León" }, // null,
  },
  {
    name: "Georg",
    email: "georg@gmail.com",
    channel: "facebook",
    application: null, //{ country: "Mexico", state: "Nuevo León" },
  },
  {
    name: "Daniela",
    email: "daniela@gmail.com",
    channel: "youtube",
    application: { country: "Colombia", state: "Bogotá" },
  },
];

function getStudentsApplications(users) {
  let arrayResult = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].application !== null) {
      arrayResult.push(users[i]);
    }
  }
  return arrayResult;
}

console.log(getStudentsApplications(users));
*/
