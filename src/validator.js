export function esValida (digitosTarjeta){ 

  const  par = [];
  const impar = [];
  let resultado = 0;
 
  digitosTarjeta = Array.from(digitosTarjeta).reverse();
 
  for (const i in digitosTarjeta) {
    digitosTarjeta[i] = parseInt(digitosTarjeta[i]);

    if (i % 2 !== 0) {
      par.push(digitosTarjeta[i] * 2);

      for (const j in par) {  
        if (par[j] > 9) {
          par[j] = (parseInt(par[j] % 10)) + (parseInt(par[j] / 10));
        }
      }
    } else {
      impar.push(digitosTarjeta[i]);
    }
  }

  const suma = (total, digitosTarjeta) => {
    return total + digitosTarjeta;
  };

  resultado = par.reduce(suma) + impar.reduce(suma);

  if (resultado % 10 === 0) {
    return true; 
  } else {
    return false;
  }
}



export function enmascararTarjeta(numeroTarjeta) {
  
  const longitudTarjeta = numeroTarjeta.length;
  let tarjetaEnmascarada = "";
  
  // Enmascara todos los dígitos excepto los últimos 4
  for (let i = 0; i < longitudTarjeta - 4; i++) {
    tarjetaEnmascarada += "#";
  }
  
  // Agrega los últimos 4 dígitos sin enmascarar
  tarjetaEnmascarada += numeroTarjeta.slice(-4);
  
  return tarjetaEnmascarada;

}
