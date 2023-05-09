/**
 * Los métodos estáticos, como convertir() en este caso, no dependen de ninguna instancia de la clase
 * y se pueden llamar directamente utilizando el nombre de la clase. En este ejemplo, la clase
 * ConversorMoneda actúa como una utilidad para realizar conversiones de moneda sin necesidad de
 * instanciar objetos.
 * EUR: Euro
 * USD: Dollar
 * JPY: Yen Japones
 */
class ConversorMoneda {
    static tasaCambio: Record<string, Record<string, number>> = {
      USD: { EUR: 0.91, JPY: 134.81 },
      EUR: { USD: 1.10, JPY: 148.69 },
      JPY: { USD: 0.0074, EUR: 0.0067 },
    };
  
    static convertir(monto: number, monedaOrigen: string, monedaDestino: string): number {
      const tasa = ConversorMoneda.tasaCambio[monedaOrigen][monedaDestino];
      if (!tasa) {
        throw new Error('Tasa de cambio no disponible.');
      }
      return monto * tasa;
    }
  }
  
  const montoUSD = 100;
  const montoEnEuros = ConversorMoneda.convertir(montoUSD, 'USD', 'EUR');
  console.log(`${montoUSD} USD = ${montoEnEuros.toFixed(2)} EUR`); // 100 USD = 91.00 EUR
  
  const montoEUR = 50;
  const montoEnYenes = ConversorMoneda.convertir(montoEUR, 'EUR', 'JPY');
  console.log(`${montoEUR} EUR = ${montoEnYenes.toFixed(2)} JPY`); // 50 EUR = 7434.50 JPY
  
  const montoJPY = 1000;
  const montoEnDolares = ConversorMoneda.convertir(montoJPY, 'JPY', 'USD');
  console.log(`${montoJPY} JPY = ${montoEnDolares.toFixed(2)} USD`); // 1000 JPY = 7.4 USD