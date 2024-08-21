/*Vamos a leer el teclado*/
/*Está funcion vamos a reconocer el teclado*/
document.addEventListener('keydown', function (evento) {
    if (evento.keyCode == 32) {/*Cuando el usuario presiona un espacio haga esto*/

        if (nivel.muerto == false) {

            if (trex.saltando == false) {
                saltar();
            }

        }
        else {

            
            nivel.velocidad = 4;
            nube.velocidad = 1;
            cactus.x = ancho + 100;
            cactus2.x = ancho + 900;
            cactus3.x = ancho + 600;
            nube.x = ancho + 100;
            nivel.marcador = 0;
            nivel.muerto = false;
        }

    }
});


/*Vamos a cargar las imagenes*/
var imgRex, imgNube, imgCactus, imgCactus2, imgCactus3, imgSuelo;
function cargaImagenes() {
    imgRex = new Image();/*Vamos a decirle que laimagen del rex sea igual a una nueva imagen*/
    imgNube = new Image();
    imgCactus = new Image();
    imgCactus2 = new Image();
    imgCactus3 = new Image();
    imgSuelo = new Image();

    imgRex.src = "http://drive.google.com/uc?export=view&id=1ct788-_kO6WyDlIwdBeu8XAjGrXaP6k7";/*Indicamos la ruta del objeto*/
    imgNube.src = "http://drive.google.com/uc?export=view&id=1wb_E0kpsWfUKI1SgQj_rxIqQvsEByqU4";
    imgCactus.src = "http://drive.google.com/uc?export=view&id=1cwATzx4MFmjDhi1gLUm2K86VBvuA27HX";
    imgCactus2.src = "http://drive.google.com/uc?export=view&id=1A8gbD3uSfWj1-fS-fhv-cnDzOsw9Db5q";
    imgCactus3.src = "http://drive.google.com/uc?export=view&id=1AsM0PPvmcUlddy1OZMntM3tetu4ISyTy";
    imgSuelo.src = "http://drive.google.com/uc?export=view&id=1MMSreN3xCw1_WqR_73sR-ZhIFLoJBHSs";
}
var ancho = 700;
var alto = 300;
var canvas, ctx;
/*Vamoa a inicializar*/
function inicializa() {
    document.getElementById("btniniciar").style.display = "block";
    document.getElementById("texto").style.display = "block";
    canvas = document.getElementById('canvas');/*Esta variable canvas vamos a decirle que sea igual al elemento del html llamado canvas*/
    ctx = canvas.getContext('2d');/*El contextto te dice como funciona la pizarra en 2d*/
    cargaImagenes();
}

/*Vamos a borrar la pizarra*/
function borrarCanvas() {/*Para borrar el canvas lo más sencillo es borrarle pa altura y anchura*/
    canvas.width = ancho;
    canvas.height = alto;
}

var suelo = 200;
var trex = { y: suelo - 22, vy: 0, gravedad: 2, salto: 28, vymax: 9, saltando: false };
var nivel = { velocidad: 4, marcador: 0, muerto: false };
var cactus = { x: ancho + 100, y: suelo + 10 };
var cactus2 = { x: ancho + 300, y: suelo + 22 };
var cactus3 = { x: ancho + 2000, y: suelo + 22 };
var nube = { x: 400, y: 100 };
var suelog = { x: 0, y: suelo + 45 };
/*Pos 1 en donde se encuentra el trex, Pos 2, velocidad vertical cuanto sube los pixeles, 

una gravedad de 2 y un salto de 20 pixeles y cada vez que pase un fotograma le restamos 2*/
/*Vamos hacer la función que dibuja la imagen del rex*/
function dibujaRex() {
    ctx.drawImage(imgRex, 0, 0, 202, 373, 100, trex.y, 250, 250);/*Para dibujar la imagen tenemos que cargar el contexto y tenemos que utilizar el atributo ctx.drawImage();*/
}

function dibujaCaptus() {
    ctx.drawImage(imgCactus, 0, 0, 108, 110, cactus.x, cactus.y, 40, 40); /* AQUI SE LE CAMBIA EL TAMAÑO AL GATITO */
}
function dibujaCaptus2() {
    ctx.drawImage(imgCactus2, 0, 0, 228, 230, cactus2.x, cactus2.y, 50, 50); /* AQUI SE LE CAMBIA EL TAMAÑO AL GATITO */
}

function dibujaCaptus3() {
    ctx.drawImage(imgCactus3, 0, 0, 228, 230, cactus3.x, cactus3.y, 50, 50); /* AQUI SE LE CAMBIA EL TAMAÑO AL GATITO */
}



function logicaCactus() {
    if (cactus.x < -100) {
        cactus.x = ancho + 100
        nivel.marcador++;
        
    

    }
    else {
        cactus.x -= nivel.velocidad - .1;
        
    }
}
function logicaCactus2() {
    if (cactus2.x < -100) {
        cactus2.x = ancho + 100
        nivel.marcador++;
      
    }
    else {
        cactus2.x -= nivel.velocidad - .8;
     
    }
}
function logicaCactus3() {
    if (cactus3.x < -100) {
        cactus3.x = ancho + 100
        nivel.marcador++;
      
        
    }
    else {
        cactus3.x -= nivel.velocidad - .7;
    
    }
}


function dibujaSuelo() {
    ctx.drawImage(imgSuelo, suelog.x, 0, 700, 30, 0, suelog.y, 700, 30);
}


function logicaSuelo() {
    if (suelog.x > 100) {
        suelog.x = 0;
    }
    else {
        suelog.x += nivel.velocidad;
    }
}

function dibujaNube() {
    ctx.drawImage(imgNube, 0, 0, 543, 359, nube.x, nube.y, 82, 31);
}

function logicaNube() {
    if (nube.x < -100) {
        nube.x = ancho + 100
        nivel.velocidad++;
    }
    else {
        nube.x -= nivel.velocidad - 2;
    }
}


function colision() {
   
    if (cactus.x >= 100 && cactus.x <= 150) {

        if (trex.y >= suelo - 22) {
         
            nivel.muerto = true;
            nivel.velocidad = 0;

            modal();
            //document.getElementById("btnRegistroRG").click();
         
        }
  
    }
}
function colision2() {
   
    if (cactus2.x >= 100 && cactus2.x <= 150) {
        if (trex.y >= suelo - 22) {
            
            nivel.muerto = true;
            nivel.velocidad = 0;

   
            //document.getElementById("btnRegistroRG").click();
            modal();

        }
      
    }
}
function colision3() {
   
    if (cactus3.x >= 100 && cactus3.x <= 150) {
        if (trex.y >= suelo - 22) {
            
            nivel.muerto = true;
            nivel.velocidad = 0;

            modal();
           
           // document.getElementById("btnRegistroRG").click();
            
        }
        
    }
}

function modal() {

    localStorage.setItem("recG", nivel.marcador);
    var reclocal = localStorage.getItem("recG");

    $.ajax({
        type: "GET",
        url: "../ws/wscraig.ashx?Comando=SelecRecordH",
        success: function (result) {
            var res = result.split("|");

            if (res[0] < nivel.marcador) {
               

                document.getElementById("btnRegistroRG").style.visibility = "visible";
            } else {
                //alert("Fin Juego");
               
            }
        },
        error: function (jqXmlHttpRequest, textStatus, errorThrown) {
        }
    });


}


function puntuacion() {
   
    ctx.font = "30px impact";
    ctx.fillStyle = '#555555';
    ctx.fillText(`${nivel.marcador}`, 600, 50);

    if (nivel.muerto == true) {
        //alert("AQUIIIII");
        ctx.font = "60px impact";
        ctx.fillText(' Se La Comieron Los Gatos ', 40, 140);

        //alert("Juego Terminado");
     
        //document.getElementById("btnRegistroRG").click();
    
       

    }

}

/*Vamos hacer la funcion saltar*/
function saltar() {

    trex.saltando = true;/*Tenemos que activarlo*/
    trex.vy = trex.salto;/*La velocidad vertical es igual a 28px*/
}
/*Vamos a hacer una funcion del comportamiento de la gravedad*/
function gravedad() {/*Consiste en el movimiento de saltar */
    if (trex.saltando == true) {/*Comprobar si el dinosaurio está saltando, se refiere que está en el aire, sino está en el aire no hay que 
    aplicarle la gravedad*/
        /*Entre más valla restanto el dibujo trex va ir subiendo para arriba*/
        if (trex.y - trex.vy - trex.gravedad > suelo) {/*Si trex es mayor a 250 haga esto*/
            trex.saltando = false;/*Así deja de saltar*/
            trex.vy = 0;/*Porque ha llegado al suelo y se ha parado*/
            trex.y = suelo - 22;/*Para que queda exactamente en el suelo*/
        } else {
            trex.vy -= trex.gravedad;/*Esto es para que autodecrementado en 2 en 2, esto sube para arriba*/
            trex.y -= trex.vy;/*Le restamos la velocidad*/
        }
    }
}

//-----------------------------------------------------------------
/*Bucle Principal*/
var FPS = 50;
setInterval(function () {/*Nos dice cada cuanto tiempo tiene que ejecutarse una funcion concreta*/
    principal();
}, 1000 / FPS);

function principal() {/*Aquí vamos a llamar todo este el bucle principal*/

    borrarCanvas();
    gravedad();
    colision();
    colision2();
    colision3();
    dibujaSuelo();
    logicaSuelo();
    dibujaRex();
    dibujaCaptus();
    dibujaCaptus2();
    dibujaCaptus3();
    logicaCactus();
    logicaCactus2();
    logicaCactus3();
    dibujaNube();
    logicaNube();
    puntuacion();
  
}

