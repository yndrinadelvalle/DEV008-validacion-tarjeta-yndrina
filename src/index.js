import {esValida, enmascararTarjeta} from "./validator.js";

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
  boton.addEventListener("click", function(){
    const numeroTarjeta = document.getElementById("numero-tarjeta").value;
  

    if (esValida(numeroTarjeta) === true ) {
      confirm("TARJETA VALIDA, HAZ CLICK EN ACEPTAR Y PROCEDE A COMPRAR"  );
    } else {
      confirm("TARJETA INVALIDA, HAZ CLICK EN ACEPTAR Y PRUEBA CON OTRA TARJETA" );
    } 
    
    const guardar = enmascararTarjeta (numeroTarjeta);
    document.getElementById("numero-tarjeta").value = guardar;
  });
 
 
    
});


const numeroTarjetaInput = document.getElementById("numero-tarjeta");
numeroTarjetaInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});


