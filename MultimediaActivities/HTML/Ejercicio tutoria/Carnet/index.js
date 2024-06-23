var n = parseInt(prompt("Pon tu edad"));
var _card = window.prompt("¿Tienes carnet de conducir?");

if(n >= 18 && _card == "si"){
    window.alert("te alquilo un coche");
}

else if(n < 18 || _card == "no"){
    window.alert("No te podemos alquilar un coche");
}