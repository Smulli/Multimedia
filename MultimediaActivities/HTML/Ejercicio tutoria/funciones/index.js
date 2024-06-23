/*Hola();

function Hola(){
    for(var i = 0; i < 3; i++){
        console.log("Hola");
    }
}*/

//console.log(Operacion());

/*function Operacion(resultado){
    let x = parseInt(window.prompt("valor 1")); 
    let y = parseInt(window.prompt("valor 2"));

    resultado = x + y;

    return resultado;
}*/

Par();

function Par(valor) {
    valor = parseInt(window.prompt("Introduce el valor"));

    if(valor % 2 == 0){
        window.alert("Este numero es par")
    }

    else {window.alert("Este numero es impar");}
}