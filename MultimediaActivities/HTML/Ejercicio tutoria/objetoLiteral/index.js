var _in = document.getElementById("height");

const persona = {
    _nombre: "Albert",
    _edad: 27,
    _altura: 0.0
}

console.log(persona._nombre + " " + persona._edad);

function Printing(){
    persona._altura = _in.value;
    console.log(persona);
}