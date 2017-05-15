
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var vaca = {
  url: "vaca.png",
  cargaOk: false
}
var cerdo = {
  url:"cerdo.png",
  cargaOk: false
}
var pollo = {
  url:"pollo.png",
  cargaOk:false
}
var fondo = {
  url: "tile.png",
  cargaOk: false
}
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT:37,
  RIGHT:39
};

var cantidadVacas = aleatorio(0,20);
var cantidadPollos = aleatorio(0,20);

var xVaca = new Array;
var yVaca = new Array;

var xPollo = new Array;
var yPollo = new Array;

var xCerdo = 240;
var yCerdo = 240;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargaCerdo);
cerdo.imagen.addEventListener("load",capturarPosicion);

pollo.imagen= new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargaPollo);
pollo.imagen.addEventListener("load",capturarPosicion);

document.addEventListener("keyup",moverCerdo);

function cargarFondo()
{
  fondo.cargaOk = true;
  capturarPosicion();
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargaCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}
function cargaPollo()
{
  pollo.cargaOk= true;
  dibujar();
}

function moverCerdo(evento)
{
    var movimiento = 5;

    switch (evento.keyCode) {
      case 38:
          papel.drawImage(cerdo.imagen,xCerdo,yCerdo-movimiento);
          xCerdo = xCerdo;
          yCerdo = yCerdo-movimiento;
          dibujar();
      break;
      case 40:
          papel.drawImage(cerdo.imagen,xCerdo,yCerdo+movimiento);
          xCerdo = xCerdo;
          yCerdo = yCerdo + movimiento;
          dibujar();
      break;
      case 37:
          papel.drawImage(cerdo.imagen,xCerdo-movimiento,yCerdo);
          xCerdo = xCerdo-movimiento;
          yCerdo = yCerdo;
          dibujar();
      break;
      case 39:
          papel.drawImage(cerdo.imagen,xCerdo+movimiento,yCerdo);
          xCerdo = xCerdo+movimiento;
          yCerdo = yCerdo;
          dibujar();
      break;
      default:
    }
}

function capturarPosicion()
{
    if (vaca.cargaOk == true)
    {
        //var cantidadVacas = aleatorio(0,100);
        for(var i=0;i<cantidadVacas;i++)
        {
          var xV = aleatorio(0,7);
          var yV = aleatorio(0,7);
          var x = xV * 60;
          var y = yV * 60;
          xVaca[i] = x;
          yVaca[i] = y;

        }
    }if(pollo.cargaOk)
      {
        //var cantidadPollos = aleatorio(0,30);
        for(var n=0; n<cantidadPollos;n++)
        {
          var xP = aleatorio(0,7);
          var yP = aleatorio(0,7);
          var a = xP * 60;
          var b = yP * 60;
          xPollo[n] = a;
          yPollo[n] = b;

          dibujar();
        }
      }
}
function dibujar()
{
    if (fondo.cargaOk == true)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOk == true)
    {
        for(var i=0;i<cantidadVacas;i++)
        {
          papel.drawImage(vaca.imagen,xVaca[i],yVaca[i]);
        }
    }if(cerdo.cargaOk)
        {
          papel.drawImage(cerdo.imagen,xCerdo,yCerdo);
        }
     if(pollo.cargaOk)
        {
          for(var n = 0; n<cantidadPollos;n++)
          {
              papel.drawImage(pollo.imagen,xPollo[n],yPollo[n]);
          }
        }
}

function aleatorio (min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
