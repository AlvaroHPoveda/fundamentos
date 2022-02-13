/*
Cuenta los estudiantes que han enviado su aplicación por cada canal
Todas las personas que crean una cuenta en Academlo vienen de algún canal, por ejemplo, algunos vienen de youtube, otros de facebook, otros más de twitter, etc.
Este ejercicio consiste en contar cuantos usuarios han enviado su aplicación y desde que canal vienen, así que tenemos que tomar en cuenta 2 factores.
El canal del que vienen
Que hayan enviado su aplicación
Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null }, { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } }, { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } } ];
En esta ocasión debemos de retornar un objeto como el siguiente { youtube: 1, twitter: 2 }
Ya que 1 persona de las que enviaron su aplicación vienen de youtube y 2 de twitter.
Descripción de la función
Escribe el código necesario en la función countApplicationsByChannel() para que retorne los estudiantes que han enviado su aplicación por canal.
Parámetros de la función:
array users: El arreglo de usuarios.
Retorno de la función
object: Un objeto con la cantidad de usuarios que han enviado su aplicación por cada canal.
*/
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