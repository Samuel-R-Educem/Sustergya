/**
* @function formatToCurrencyMXN
* @description Realiza la función de convertir un número a tipo de moneda.
* @param {number} price - Recibe el numero a convertir.
* @param {number} decimalDigits - Recibe el numero de decimales a mostrar.
* @returns Devuelve el número ya transformado.
*/
function formatToCurrencyMXN(price: number, decimalDigits: number) {

  return price.toLocaleString('es-MX', {
    style: 'currency', // Establece el estilo a moneda
    currency: 'MXN', // Establece la moneda a pesos mexicanos
    minimumFractionDigits: decimalDigits, // Puedes ajustar la cantidad de decimales a mostrar
  });
}

export default formatToCurrencyMXN;