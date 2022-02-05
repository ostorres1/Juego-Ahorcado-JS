var pantalla = document.querySelector("canvas");
var lapiz = pantalla.getContext("2d");

function dibujaHorca(){
    //base de la horca
    lapiz.fillStyle = "brown";
    lapiz.beginPath();
    lapiz.moveTo(50, 470);
    lapiz.lineTo(100, 430);
    lapiz.lineTo(150, 470);
    lapiz.fill();
    //cuerpo de la horca
    lapiz.fillStyle = "brown";
    lapiz.fillRect(95, 80, 10, 355);
    //barra horizontal de la horca
    lapiz.fillRect(95, 80, 200, 10);
    //barra vertical de la horca
    lapiz.fillRect(290, 80, 10, 50);
    //diagonal de la horca
    lapiz.strokeStyle = "brown";
    lapiz.moveTo(95, 160);
    lapiz.lineTo(160, 80);
    lapiz.lineWidth = 7;
    lapiz.stroke();
}

//cabeza
function cabeza(){    
    lapiz.beginPath();
    lapiz.fillStyle = "black";
    lapiz.lineWidth = 5;
    lapiz.arc(295,180,50,0,Math.PI*2);
    lapiz.stroke();
}


//cuerpo
function cuerpo(){
    lapiz.strokeStyle = "black";
    lapiz.moveTo(295, 230);
    lapiz.lineTo(295,390);
    lapiz.stroke();
}

//brazoIzquierdo
function brazoIzquierdo(){
    lapiz.strokeStyle = "black";
    lapiz.moveTo(295, 280);
    lapiz.lineTo(200, 200);
    lapiz.stroke();
}

//brazoDerecho
function brazoDerecho(){
    lapiz.strokeStyle = "black";
    lapiz.moveTo(295, 280);
    lapiz.lineTo(390, 200);
    lapiz.stroke();
}

//piernaIzquierda
function piernaIzquierda(){
    lapiz.strokeStyle = "black";
    lapiz.moveTo(295, 390);
    lapiz.lineTo(230, 450);
    lapiz.stroke();
}

//piernaDerecha
function piernaDerecha(){
    lapiz.strokeStyle = "black";
    lapiz.moveTo(295, 390);
    lapiz.lineTo(360, 450);
    lapiz.stroke();
}
//dibujar recuadro de texto fallaste
function dibujarRectanguloTextoFallaste(x, y, base, altura, texto) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle="gray";
    pincel.fillRect(x,y, base, altura);
    pincel.strokeStyle="red";
    pincel.strokeRect(x,y, base, altura);

    pincel.font="30px Georgia";
    pincel.fillStyle="white";
    pincel.fillText(texto, x + 20, y + 100); 
}
//dibujar recuadro texto victoria
function dibujarRectanguloTextoVictoria(x, y, base, altura, texto) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle="gray";
    pincel.fillRect(x,y, base, altura);
    pincel.strokeStyle="green";
    pincel.strokeRect(x,y, base, altura);

    pincel.font="30px Georgia";
    pincel.fillStyle="white";
    pincel.fillText(texto, x + 50, y + 100); 
}
