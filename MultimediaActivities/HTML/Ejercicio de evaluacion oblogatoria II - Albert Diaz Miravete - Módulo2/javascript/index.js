var _year = document.getElementById("year");


function Verification() {
    let n = _year.value;
    
    if(n >= 18){
        var _result = window.prompt("¿Quieres una cerveza? Si/No.");

        Understand(_un = _result);

        while(_result.toLowerCase() == "si"){
            var _result = window.prompt("¿Quieres una cerveza? Si/No.");
            Understand(_un = _result);
        }

        if(_result.toLowerCase() == "no"){
            Farewell();
        }
    }

    if(n < 18){
        window.alert("Eres menor de edad, tómate un zumito");

        var _result = window.prompt("¿Quieres un zumito? Si/No.");

        Understand(_un = _result);

        while(_result.toLowerCase() == "si"){
            var _result = window.prompt("¿Quieres un zumito? Si/No.");
            Understand(_un = _result);
        }

        if(_result.toLowerCase() == "no"){
            Farewell();
        }
    }

}

function Farewell(){
    window.alert("¡Qué tenga un buen día!");
}

function Understand(_un){
    if(_un.toLowerCase() != "si" && _un.toLowerCase() != "no"){
        window.alert("No entendi tu respuesta");
    }

    return _un;
}

