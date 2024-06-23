var _value = parseInt(prompt("Indica tu temperatura"));

if(_value > 40){
    window.alert("Vete de ese infierno"); 
}

if(_value >= 30 && _value == 40){
    window.alert("Enciende el aire acondicionado");
}

if(_value >= 20 && _value < 30){
    window.alert("Tienes la temperatura perfecta");
}

if(_value >= 10 && _value < 20){
    window.alert("Enciende la calefacción");
}

else if(_value < 10){
    window.alert("Estás en un congelador")
}

else{window.alert("pon un número")}


