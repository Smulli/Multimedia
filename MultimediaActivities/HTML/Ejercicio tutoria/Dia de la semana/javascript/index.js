var _value = window.prompt("Pon un día de la semana");

if(_value.toLowerCase() == "lunes" || _value.toLowerCase() == "martes" || _value.toLowerCase() == "miercoles" || _value.toLowerCase() == "jueves" || _value.toLowerCase() == "viernes"){
    window.alert("Hoy es " + _value.charAt(0).toUpperCase() + _value.slice(1).toLowerCase()); 
}

else if(_value.toLocaleLowerCase() == "sabado" || _value.toLocaleLowerCase() == "domingo" ){
    window.alert("Hoy es fin de semana");
}

else{Understand();}

function Understand(){
    window.alert("No entendí tu respuesta");
}

