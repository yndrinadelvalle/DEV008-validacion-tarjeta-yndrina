function esValida (digitosTarjeta){ 

  let par = [];
  let impar = [];
  let resultado = 0;
 
  digitosTarjeta = Array.from(digitosTarjeta).reverse();
 
  for (let i in digitosTarjeta) {
    digitosTarjeta[i] = parseInt(digitosTarjeta[i]);

    if (i % 2 !== 0) {
      par.push(digitosTarjeta[i] * 2);

      for (let j in par) {  
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

export default esValida;

