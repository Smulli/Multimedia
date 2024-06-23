var _value = window.parseInt(prompt("Indica tu posición"));
var _dom = document.getElementById("dom");

switch(_value){
    case 1:
        _dom.innerHTML = `
        <h1>Has ganado la medalla de oro sube al podio</h1>
        `
        _dom.style.color = "yellow";
    break;
    case 2:
        _dom.innerHTML = `
        <h1>Has ganado la medalla de plata sube al podio</h1>
        `
        _dom.style.color = "gray";
    break;
    case 3:
        _dom.innerHTML = `
        <h1>Has ganado la medalla de bronce sube al podio</h1>
        `
        _dom.style.color = "orange";
    break;
    case 4:
        _dom.innerHTML = `
        <h1>Gracias por participar</h1>
        `
        _dom.style.color = "black";
    break;
    default:
        Understand();
    break;
}

if(_value > 4){
    _dom.innerHTML = `
        <h1>Gracias por participar</h1>
        `
    _dom.style.color = "black";
}



function Understand(){
    window.alert("No entendí tu respuesta");
}

