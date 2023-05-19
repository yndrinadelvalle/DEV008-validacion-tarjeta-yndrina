import esValida from "./validator.js";

function mostrarNumero() {
  const numeroTarjeta = document.getElementById("numero-tarjeta").value;
  const numero = document.querySelector(".number");
  numero.innerHTML = numeroTarjeta;
}

function detectarCuandoEscribe() {
  mostrarNumero();
}

const numeroTarjeta = document.getElementById("numero-tarjeta");
numeroTarjeta.addEventListener("keyup", detectarCuandoEscribe);



document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("miboton");
  boton.addEventListener("click", inputValida);
  boton.addEventListener("click", enmascararTarjeta);
    enmascararTarjeta();
    inputValida();
    
    });


const numeroTarjetaInput = document.getElementById("numero-tarjeta");
numeroTarjetaInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

function enmascararTarjeta(numeroTarjeta) {
  var numeroTarjeta = document.getElementById("numero-tarjeta").value;
  var longitudTarjeta = numeroTarjeta.length;
  var tarjetaEnmascarada = "";
  
  // Enmascara todos los dígitos excepto los últimos 4
  for (var i = 0; i < longitudTarjeta - 4; i++) {
    tarjetaEnmascarada += "*";
  }
  
  // Agrega los últimos 4 dígitos sin enmascarar
  tarjetaEnmascarada += numeroTarjeta.slice(-4);
  
  document.getElementById("numero-tarjeta").value = tarjetaEnmascarada;
}

function inputValida() {
  var numeroTarjeta = document.getElementById("numero-tarjeta").value;
  console.log(enmascararTarjeta())

  if (esValida(numeroTarjeta) == true ) {
    confirm("TARJETA VALIDA, HAZ CLICK EN ACEPTAR Y PROCEDE A COMPRAR"  );
  } else {
    confirm("TARJETA INVALIDA, HAZ CLICK EN ACEPTAR Y PRUEBA CON OTRA TARJETA" );
}
}
