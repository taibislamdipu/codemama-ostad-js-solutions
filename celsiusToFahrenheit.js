// °F = °C × (9/5) + 32

function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

const celsius = 32;
const celsiusToFah = celsiusToFahrenheit(celsius).toFixed(2);

console.log(`The temperature in Fahrenheit is: ${celsiusToFah}`);
