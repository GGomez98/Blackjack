/*Cartas de jugador, cartas de computadora y baraja*/
let baraja = [];
let cartasJugador = [];
let cartasComputadora = [];

/*Repartir una carta al azar al jugador*/
function repartirCartaAJugador(){
    let cartaAlAzar=baraja[Math.floor(Math.random()*baraja.length)];
    baraja.splice(baraja.indexOf(cartaAlAzar),1)
    cartasJugador.push(cartaAlAzar);
}
/*Repartir una carta al azar a la computadora*/
function repartirCartaAComputadora(){
    let cartaAlAzar=baraja[Math.floor(Math.random()*baraja.length)];
    baraja.splice(baraja.indexOf(cartaAlAzar),1)
    cartasComputadora.push(cartaAlAzar);   
}
/*Reparte una carta al azar a ambos*/
function repartirCartas(){
    repartirCartaAJugador()
    repartirCartaAComputadora()
    console.log("Cartas del jugador:"+cartasJugador);
    console.log("Cartas de la computadora:"+cartasComputadora);
}
/*Sumar las cartas de un jugador*/
function sumarTodo(cartas){
    let suma = 0
    for(let numero of cartas){
    suma+=numero
}
return suma;
}	
/*El valor total de las cartas es mayor a 21*/
function sePasa(cartas){
    return sumarTodo(cartas)>21;
}
