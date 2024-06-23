var _passport = window.prompt("¿Tienes pasaporte?");
var dni = window.prompt("¿Tienes dni?");

if(_passport == "si" || dni == "si"){
    window.alert("Puedes viajar");
}

else if(_passport == "no" || dni == "no"){
    window.alert("No puedes viajar");
}

else{window.alert("no entendi tu respuesta")}