var _year = document.getElementById("year");
var _dom = document.getElementById("dom");
var _card = document.getElementById("card");
let _apologize;


function Verification() {
    let n = _year.value;

    if(n < 18 && _apologize != true){
        _dom.innerHTML = `
        <p>No tienes edad suficiente, porfavor vuelve cuando sea más mayor.</p>
        `
        _card.hidden = true;
        _apologize = true;
    }

    else if(n >= 18 && _apologize){
        _dom.innerHTML = `
        <p>Disculpa la confusión, puedes continuar.
        `

        _card.hidden = false;
    }
    
    if(n >= 18 && n < 30){
        Student();
    }

    if(n == 30){
        var _result = window.prompt("¿Quieres una tarjeta de estudiante o una cuenta nómina? estudiante/nómina.");

        switch(_result.toLowerCase()){
            case "estudiante":
                _card.innerHTML = `
                <img src="https://www.ehu.eus/documents/2955630/3354146/Carnet-de-estudiante-internacional-para-viajar/092b3987-791a-495c-8183-129c8c8c8f44?version=1.0&t=1507191483000" width="300" height="200">
                `
            break;
            case "nómina":
                _card.innerHTML = `
                <img src="https://www.miseuritos.com/wp-content/uploads/2020/07/cuenta-nomina-ing-direct.jpg" width="300" height="200">
                `
            break;
            case "nomina":
                _card.innerHTML = `
                <img src="https://www.miseuritos.com/wp-content/uploads/2020/07/cuenta-nomina-ing-direct.jpg" width="300" height="200">
                `
            break;
            case "no":
                Farewell();
            default:
                Understand(_un = _result);
            break;
        }
    }

    if(n > 30 && n <= 60){
        PayRoll();
    }

    if(n > 60){
        Golden();
    }
}

function Student(){
    var _result = window.prompt("¿Quieres una tarjeta de estudiante? Si/No.");

    Understand(_un = _result);

    if(_result.toLowerCase() == "si"){
        _card.innerHTML = `
        <img src="https://www.ehu.eus/documents/2955630/3354146/Carnet-de-estudiante-internacional-para-viajar/092b3987-791a-495c-8183-129c8c8c8f44?version=1.0&t=1507191483000" width="300" height="200">
        `
    }

    if(_result.toLowerCase() == "no"){
        Farewell();
    }
}

function PayRoll(){
    var _result = window.prompt("¿Quieres una cuenta nómina? Si/No.");

    Understand(_un = _result);

    if(_result.toLowerCase() == "si"){
        _card.innerHTML = `
        <img src="https://www.miseuritos.com/wp-content/uploads/2020/07/cuenta-nomina-ing-direct.jpg" width="300" height="200">
        `
    }

    if(_result.toLowerCase() == "no"){
        Farewell();
    }
}

function Golden(){
    var _result = window.prompt("¿Quieres una tarjeta dorada? Si/No.");

    Understand(_un = _result);

    if(_result.toLowerCase() == "si"){
        _card.innerHTML = `
        <img src="https://www.emtmalaga.es/sites/default/files/TARJETA%20ORO_0.jpg" width="300" height="200">
        `
    }

    if(_result.toLowerCase() == "no"){
        Farewell();
    }
}

function Farewell(){
    window.alert("¡Qué tenga un buen día!");
}

function Understand(_un){
    if(_un.toLowerCase() != "si" && _un.toLowerCase() != "no" && _un.toLowerCase() != "estudiante" && _un.toLowerCase() != "nomina" && _un.toLowerCase() != "nómina"){
        window.alert("No entendi tu respuesta");
    }

    return _un;
}

