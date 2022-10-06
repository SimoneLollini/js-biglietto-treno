// Istruzioni
// Il programma dovrà chiedere all'utente:
//  chiedere il numero di chilometri che vuole percorrere
const kmPercorsi = prompt("Quanti km devi percorrere?")


// chiedere l'età del passeggero.
const passengerAge = prompt("Quanti anni hai?")


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = (kmPercorsi * 0.21)

// va applicato uno sconto del 20% per i minorenni
const discountUnder = (price * 0.20);

// va applicato uno sconto del 40% per gli over 65. 
const discountOver = (price * 0.40);

if (passengerAge < 18) {
    const finalPriceUnder = price - discountUnder
    console.log(finalPriceUnder.toFixed(2));
    document.getElementById('ticket_price').innerHTML = (finalPriceUnder + " " + "€")

} else if (passengerAge > 65) {
    const finalPriceOver = price - discountOver
    console.log(finalPriceOver.toFixed(2));
    document.getElementById('ticket_price').innerHTML = (finalPriceOver + " " + "€")

} else {
    console.log(price.toFixed(2));
    document.getElementById('ticket_price').innerHTML = (price + " " + "€")
}


// L'output del prezzo finale va messo fuori in forma umana con massimo due decimali.