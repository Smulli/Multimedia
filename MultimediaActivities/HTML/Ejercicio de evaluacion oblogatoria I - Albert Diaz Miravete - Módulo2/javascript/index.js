var _year = document.getElementById("year");
const _names = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];
let n;

function Printing() {
    let n = _year.value % 12;

    var _animals = _names[n];

    switch (_animals){
        case "Mono":
            document.getElementById("dom").innerHTML=`
            <h3>Mono</h3>
            <img src="https://elcomercio.pe/resizer/S11CFrFKeFExEvDjSzaL3OLHiX4=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7ZDLLB6FMVC3HHIHXUCZGA2JUE.jpg" width"550" height="400">
            `
        break;
        case "Gallo":
            document.getElementById("dom").innerHTML=`
            <h3>Gallo</h3>
            <img src="https://elcomercio.pe/resizer/UtKucSSJ_wlBhpVCyWbIZOEf8HU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CT2SCDITWRGYVIXHOJNQUIBEOE.jpg" width"550" height="400">
            `
        break;
        case "Perro":
            document.getElementById("dom").innerHTML=`
            <h3>Perro</h3>
            <img src="https://elcomercio.pe/resizer/yEcrv1_h-czrqbElJiwgTqnV-hc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IVY437GEG5FFZDN2QX5GILFQFQ.jpg" width"550" height="400">
            `
        break;
        case "Cerdo":
            document.getElementById("dom").innerHTML=`
            <h3>Cerdo</h3>
            <img src="https://elcomercio.pe/resizer/cfcGg8Jgd5MKPYSBnauY1iGNb0Q=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F54XZCYYQJGN5AQQ6T6UZPEDGA.jpg" width"550" height="400">
            `
        break;
        case "Rata":
            document.getElementById("dom").innerHTML=`
            <h3>Rata</h3>
            <img src="https://elcomercio.pe/resizer/KW33K2m7TnK_4OtMTiQAn03Et2w=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6HOPIG5WKFF7DAHCIHFH5ZGVG4.jpg" width"550" height="400">
            `
        break;
        case "Buey":
            document.getElementById("dom").innerHTML=`
            <h3>Buey</h3>
            <img src="https://static.onecms.io/wp-content/uploads/sites/21/2021/02/12/horoscopo-chino-buey-de-metal-2021.png" width"550" height="400">
            `
        break;
        case "Tigre":
            document.getElementById("dom").innerHTML=`
            <h3>Tigre</h3>
            <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/02/horoscopo-chino-tigre-2604113.jpg?itok=QK94SQXI" width"550" height="400">
            `
        break;
        case "Conejo":
            document.getElementById("dom").innerHTML=`
            <h3>Conejo</h3>
            <img src="https://depor.com/resizer/utBxrs2J0_Lkchc4STjflDqasuE=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/S7GF6FWMTNG45HLX5E6BJQTC2A.jpg" width"550" height="400">
            `
        break;
        case "Dragón":
            document.getElementById("dom").innerHTML=`
            <h3>Dragón</h3>
            <img src="https://es.calcuworld.com/wp-content/uploads/sites/2/2017/10/dragon-en-horoscopo-chino.jpg" width"550" height="400">
            `
        break;
        case "Serpiente":
            document.getElementById("dom").innerHTML=`
            <h3>Serpiente</h3>
            <img src="https://elcomercio.pe/resizer/lVmj5efQbmMslNkMfwbpigeCJeM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UKN5IPRCIVFIFLF3TCJXD5MMPE.jpg" width"550" height="400">
            `
        break;
        case "Caballo":
            document.getElementById("dom").innerHTML=`
            <h3>Caballo</h3>
            <img src="https://elcomercio.pe/resizer/UP7QJEo__9NkZE-8wsHJRiuylPQ=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SCUTO7U6EBFQHMSNUE4YEPXTKA.jpg" width"550" height="400">
            `
        break;
        case "Cabra":
            document.getElementById("dom").innerHTML=`
            <h3>Cabra</h3>
            <img src="https://elcomercio.pe/resizer/o_a3RCkOOkQOGKAXmPwwHd7X_oU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FBC5KHNVXRE7XH6MA7LXJA73WA.jpg" width"550" height="400">
            `
        break;
        default:
            document.getElementById("dom").innerHTML=`
            <p>Indica un entero</p>
            `
    }
}

