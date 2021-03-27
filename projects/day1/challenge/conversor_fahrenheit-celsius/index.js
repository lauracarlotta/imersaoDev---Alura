let inputCelsiusFahrenheit = document.querySelector(".celsius-fahrenheit-input");
let inputFahrenheitCelsius = document.querySelector(".fahrenheit-celsius-input");

let resultOperation = document.querySelector(".temperature-value");

function calculaFahrenheit() {
   let celsiusToFahrenheitValue = parseFloat(Number(prompt("Qual é o valor em Celsius que você quer converter para Fahrenheit?"))).toFixed(1);
   
   let celsiusToFahrenheitValueConverted = (celsiusToFahrenheitValue * 1.8) + 32;

   resultOperation.innerHTML = `${celsiusToFahrenheitValue}° convertido de Celsius para Fahrenheit é de ${celsiusToFahrenheitValueConverted.toFixed(1)}°!`;
}

function calculaCelsius() {
   let fahrenheitToCelsiusValue = parseFloat(Number(prompt("Qual é o valor em Fahrenheit que você quer converter para Celsius?"))).toFixed(1);
   
   let fahrenheitToCelsiusValueConverted = (fahrenheitToCelsiusValue - 32) / 1.8;

   resultOperation.innerHTML = `${fahrenheitToCelsiusValue}° convertido de Fahrenheit para Celsius é de ${fahrenheitToCelsiusValueConverted.toFixed(1)}°!`;
}

inputCelsiusFahrenheit.onclick = calculaFahrenheit;

inputFahrenheitCelsius.onclick = calculaCelsius;
