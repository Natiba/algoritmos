// ¿Llega?
// Un automóvil tiene un consumo de combustible de 15 kilómetros por litro.
// Su tanque de nafta puede almacenar 45 litros de combustible.
// Solicitar al usuario la cantidad de kilómetros que va a recorrer.
// Dar un aviso al usuario si llegará a recorrer la distancia con un tanque de nafta completa o deberá abastecerse de combustible en su trayecto para llegar a su destino


// let usuario = Number(prompt("Indique cantidad de kilometros que va a recorrer por favor"));
// let tanque = 45;
// let consumo = 15;
// let recorrido = (45*15)/100;


//     if (usuario <= recorrido) {
//         alert(`Con una carga de ${tanque} litros sera suficiente`);
//     }
//     else if (usuario >= recorrido) {
//         alert(`Deberá abastecerse con ${usuario * recorrido} litros`);
//     }
//     else {
//         alert("Por favor ingrese cantidad de kilometros");
//     }

// console.log(recorrido);
// console.log(usuario);

// Cuántos tanques de nafta?
// Un modelo de automóvil tiene tiene 3 versiones

// Motor 1.6 :  15km por litro
// Motor 1.8 :  12 km por litro
// Motor 2.0 :  10km por litro

// El tanque de nafta es igual para todos los modelos y la carga máxima es de 50 litros.
// Preguntarle al usuario que modelo esta usando y la cantidad de kilómetros que va a realizar.
// Indicarle cuántos tanques de nafta completos necesita para realizar el recorrido.

// let usuarioModelo = Number(prompt("Indique que modelo de motor utiliza, por favor"));
// let usuarioKm = Number(prompt("Indique cantidad de kilometros que va a recorrer, por favor"));
// let tanque = 50;
// let m1 = 1.6, m2 = 1.8, m3 = 2.0;
// let recorridoM1 = (tanque*15)/100;
// let recorridoM2 = (tanque*12)/100;
// let recorridoM3 = (tanque*10)/100;

// if (usuarioModelo === m1 && usuarioKm <= recorridoM1 || usuarioModelo === m2 && usuarioKm <= recorridoM2 || usuarioModelo === m3 && usuarioKm <= recorridoM3) {
//     alert(`Con una carga de ${tanque} litros sera suficiente`);
// }
// else if (usuarioModelo === m1 && usuarioKm >= recorridoM1) {
//     alert(`Deberá abastecerse con ${usuarioKm * recorridoM1} litros para su modelo ${m1}`);
// }
// else if (usuarioModelo === m2 && usuarioKm >= recorridoM2) {
//     alert(`Deberá abastecerse con ${usuarioKm * recorridoM2} litros para su modelo ${m2}`);
// }
// else if (usuarioModelo === m3 && usuarioKm >= recorridoM3) {
//     alert(`Deberá abastecerse con ${usuarioKm * recorridoM3} litros para su modelo ${m3}`);
// }
// else {
//     alert("Por favor ingrese cantidad de kilometros");
// }

// console.log(recorridoM1);
// console.log(recorridoM2);
// console.log(recorridoM3);
// console.log(usuarioModelo);
// console.log(usuarioKm);

// Dial de radio
// Crea un algoritmo que valida que una radio exista.
// Pide al usuario que ingrese un dial y valida la existencia de la radio con las siguientes condiciones:
// El dial debe ser impar
// El dial debe ser mayor o igual a 89.9
// El dial debe ser menor a 107.9

// let user = Number(prompt("Por favor ingrese un dial"));

// if (user %2 != 0 && user >= 89.9 && user < 107.9) {
//     alert(`Welcome tu FM Meameeee`);
// }
//     else {
//         alert(`This radio doesn't exist`);
//     }



// Transferencia bancaria
// El usuario quiere transferir dinero a otro usuario.
// Solicita al usuario source la cantidad de dinero que quiere transferir y a quién desea hacerlo.
// Tu aplicación debe validar:
// Que tenga fondos para enviar dinero
// Que el destinatario exista
// Si las validaciones pasan correctamente muestra un mensaje de “Transacción exitosa”

