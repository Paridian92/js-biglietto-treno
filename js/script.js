var userAge = prompt ("Ciao, quanti anni hai?");
var userKm = prompt ("E quanti Chilometri farai?");

var userDiscount;
if(userAge < 18){
  userDiscount = 80;
}else if(userAge >= 65){
  userDiscount = 60;
}else{
  userDiscount = 100;
}

var ticketPrice = userKm * 0.21;

var ticketFinalPrice = ticketPrice.toFixed(2)

var discountPrice = ticketPrice / 100 * userDiscount;
console.log(discountPrice);

var finalPrice = discountPrice.toFixed(2);
console.log(finalPrice);

var messageDiscount;
if(userDiscount == 100){
  messageDiscount = "";
}else{
  messageDiscount = " ma grazie allo sconto età il prezzo è " + finalPrice;
}


document.getElementById('pricemsg').innerHTML = "Il costo del suo biglietto è " + ticketFinalPrice + " euro" + messageDiscount;



