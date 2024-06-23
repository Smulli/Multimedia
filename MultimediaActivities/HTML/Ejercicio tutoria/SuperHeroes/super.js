let _name = document.getElementById("name");
let _lastName = document.getElementById("lastName")
let _birth = document.getElementById("birth");
let _finalText = document.getElementById("demo");
var _textName; 
var _date;

const superHeroe = {
    letraNombre: {
        a: {
            astra: "Astra",
            abeSapien: "Abe Sapien",
            abomination: "Abomination",
            abraxas: "Abraxas",
            absorbing: "Absorbing",
            
        }, 
        b: "Blast",
        c: "Core",
        d: "Destoy",
        e: "Eternal",
        f: "Flash",
        g: "Gary",
        h: ""
    },

    letraApellido: {
        lNameText: ""
    }
}

function Printing() {
    _date = _birth.value;

    superHeroe.letraApellido.lNameText = _lastName.value;
    
    var _lastLetter;
    
    for(var i = 0; i < superHeroe.letraApellido.lNameText.length; i++){
        _lastLetter = superHeroe.letraApellido.lNameText.charAt(i);
    }

    _finalText.innerHTML = Generator(this.index) + ' ' + (_lastLetter);
}

function Generator(index){
    _textName = _name.value;
    
    switch(_textName.charAt(0).toLowerCase()){
        case "a":
            index = superHeroe.letraNombre.a;
        break;
        
        case "b":
            index = superHeroe.letraNombre.b;
        break;
        case "c":
            index = superHeroe.letraNombre.c;
        break;
        case "d":
            index = superHeroe.letraNombre.d;
        break;
        case "e":
            index = superHeroe.letraNombre.e;
        break;
        default:
            window.alert("valor inentendible");
        break;
    }

    return index;
}