/*
Encuentra los estudiantes que han enviado su aplicación
En Academlo hay muchas personas que crean una cuenta, pero no todos envían su aplicación para ingresar a nuestros cursos.
Este ejercicio consiste en obtener a todas las personas que sí hayan enviado su aplicación.
Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null }, { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } }, { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, ];
El arreglo que debemos retornar es [ { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } }, { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } } ]
ya que Solo Georg y Daniela han enviado su aplicación
Descripción de la función
Escribe el código necesario en la función getStudentsApplications() para que retorne todos los usuarios que han enviado su aplicación.
Parámetros de la función:
array users: El arreglo de usuarios.
Retorno de la función
array: Un arreglo con todos los usuarios que han enviado su aplicación.
Restricciones
Los objetos dentro del arreglo de usuarios siempre tendrán la siguiente forma:
{ name: 'nombre', email: 'correo', channel: 'canal por el cual nos conocieron', application: { country: 'país de residencia', state: 'estado de residencia' } }
*/
users = [
  {
    name: "Erik",
    email: "erik@academlo.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Georg",
    email: "georg@gmail.com",
    channel: "facebook",
    application: { country: "Mexico", state: "Nuevo León" },
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