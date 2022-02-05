String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
//Array de palabras
var palabras = ['HOUSE', 'JAVASCRIPT', 'PHP', 'DEVELOPER', 'CALCULAR', 'VENTANA'];
//Escoger una palabra al azar del array
const palabra = palabras[Math.floor(Math.random()*palabras.length)]
//Reemplazar las letras por giones de la palabra escogida
var palabraGuiones = palabra.replace(/./g, "_ ");
//Colocar los giones reemplazados en el parrafo con #output
document.querySelector('#output').innerHTML = palabraGuiones;

//Contador de fallos
var contadorFallos = 0;
//Agregar evento al botón #calcular con función anónima
document.querySelector('#calcular').addEventListener('click', ()=>{
    //letra que ingresa el usuario
    const letra = document.querySelector('#letra').value;
    //se inicializa la variable a fallado con true
    var haFallado = true;
    //se recorre la palabra letra por letra para comprobar si son iguales
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }
    //si la letra no corresponde con niguna de la palabra
    if(haFallado){
        contadorFallos++;

        if(contadorFallos == 1){
            dibujaHorca();
        }
        else if(contadorFallos == 2){
            cabeza();
        }
        else if(contadorFallos == 3){
            cuerpo();
        }
        else if(contadorFallos == 4){
            brazoDerecho();
        }
        else if(contadorFallos == 5){
            brazoIzquierdo();
        }
        else if(contadorFallos == 6){
            piernaDerecha();
        }
        else if(contadorFallos == 7){
            piernaIzquierda();
            dibujarRectanguloTextoFallaste(550,150,350,200,"Fallaste, fin del Juego.")
        }
    }
    else{
        if(palabraGuiones.indexOf('_') < 0){
            dibujarRectanguloTextoVictoria(550,150,350,200,"Victoria!")
        }
    }

    document.querySelector('#output').innerHTML = palabraGuiones;
    //reiniciar el input
    document.querySelector('#letra').value = "";
    document.querySelector('#letra').focus();
    //Letras usadas
    var lUsadas = document.querySelector('.letrasUsadas');
    lUsadas.textContent = lUsadas.textContent + letra + " ";
});

//Funcion para pasar las letras a mayúscula
function mayus(a){
    a.value = a.value.toUpperCase();
}

function agregarPalabra(word){
    palabras.push(word);
}

//Ingresar palabra nueva

document.querySelector('#palabraNueva').addEventListener('click', function(){
    var inputPalabraNueva = document.querySelector('#nuevaPalabra');
    var palabraNueva = inputPalabraNueva.value;
    agregarPalabra(palabraNueva);
    inputPalabraNueva.value = "";  
    console.log(palabras);
});



