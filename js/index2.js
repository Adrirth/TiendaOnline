


function escribirMes(){

    let mes = document.getElementById("mes").value;
    let meses = ['Enero','enero','Ene','ene','Febrero','febrero','Feb','feb','Marzo','marzo','Mar','mar','Abril','abril','Abr','abr','Mayo','mayo','May','may','Junio','junio',
    'Jun','jun','Julio','julio','Jul','jul','Agosto','agosto','Ago','ago','Septiembre','septiembre','Sep','sep','Octubre','octubre','Oct','oct',
    'Noviembre','noviembre','Nov','nov','Diciembre','diciembre','Dic','dic'];

        for (let index = 0; index < meses.length; index++) {
        return meses.includes(mes);
        }
}

function correoValido() {

    let correo = document.getElementById("correo").value;

    if ((correo[0]=="@") || (correo[correo.length-1] == "@")){
        alert("No válido, no puede empezar ni terminar por @");
        return false;
    } else {
        var contador=0;
        for (let i = 1; i < correo.length-1; i++) {
            let element = correo[i];
            console.log(element);
            if (element=='@') {
                contador++;
            }
            console.log(contador);
        }
        if (contador==1) {
            return true;
        }else {
            alert("Más de un @ o ninguna")
            return false;
        }
    }

}

function dominioValido(){
    let url = document.getElementById("url").value;
    
    if ((url[url.length-1] == "m") && (url[url.length-2] == "o") && (url[url.length-3] == "c") && (url[url.length-4] == ".") || 
    (url[url.length-1] == "s") && (url[url.length-2] == "e") && (url[url.length-3] == ".") ||
    (url[url.length-1] == "u") && (url[url.length-2] == "d") && (url[url.length-3] == "e") && (url[url.length-4] == ".")){
        return true;
    }else{
        alert("Escribe un dominio valido .com, .edu o .es")
        return false;
    }

}


function formulario(){
    let correo = document.getElementById("correo").value;
    let nombre = document.getElementById("nombre").value;
    let clave = document.getElementById("clave").value;
    let mes = document.getElementById("mes").value;
    let url = document.getElementById("url").value;
    let hora = document.getElementById("hora").value;
    let malasPalabras = ['sexo','armas','videojuegos','juegos','sex','weapons','videogames','games'];
    
    //let dominio = [".com", ".es", ".edu"];

    if (nombre.length == 0){
        alert ("Rellena el nombre");

    } else if (correo.length == 0) {
        alert ("Rellena el correo");

    } else if (!correoValido()) {
        alert ("Introduce un correo valido")

    } else if (clave.length == 0){
            alert ("Rellena la clave");
    }else if (hora.length == 0){
            alert ("Introduce una hora");
    }else if (mes.length == 0){
                alert ("Introduce el mes");
                
    }else if(escribirMes() == false ){
        alert("Introduce un mes válido");
                
    } else if (url.length == 0) {
        alert ("Introduce una url");

    }else if (url == malasPalabras[0] || url == malasPalabras[1] || url == malasPalabras[2] || url == malasPalabras[3]
        || url == malasPalabras[4] || url == malasPalabras[5] || url == malasPalabras[6] || url == malasPalabras[7] ) {
        alert("No introduzcas palabras no permitidas");
    }else if (dominioValido() == false){

    }else {
        window.location.href = "mailto:adri.rth22@gmail.com"
    }    
}




