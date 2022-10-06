// Istruzioni
// Il programma dovrà chiedere all'utente:
//  chiedere il numero di chilometri che vuole percorrere
const kmPercorsi = prompt("Quanti km devi percorrere?")
console.log(kmPercorsi);

// chiedere l'età del passeggero.
const passengerAge = prompt("Quanti anni hai?")
console.log(passengerAge);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = kmPercorsi * 0.21
console.log(price);
// va applicato uno sconto del 20% per i minorenni
if (passengerAge < 18) {
    console.log(price * 0.20);
} else if (passengerAge > 65) {
    console.log(price * 0.40);
}
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana con massimo due decimali.