let _age = window.prompt("Introduce tu edad");
let n = parseInt(_age);

if (n >= 1 && n <= 8){
    window.alert("Subete al tobogán");
}

if (n < 1){
    window.alert("Pon una edad válida");
}

else if (n > 8){
    window.alert("no puedes subirte al tobogán");
}

else{window.alert("Introduce un dato válido");}
