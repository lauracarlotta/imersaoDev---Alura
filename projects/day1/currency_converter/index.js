let valorEmDolar = prompt(`Qual o valor em Dolar que você que converter? "Exemplo: U$ 200,00". ` );

valorEmDolar = valorEmDolar.replace("," , ".");

valorEmDolar = Number(valorEmDolar);

let valorEmReal = (valorEmDolar * 5.62).toFixed(2); // valor do dolar em 24/03

valorEmReal = String(valorEmReal).replace("." , ",");

alert(`O item convertido do dolar para o real ficou R$ ${valorEmReal} reais.`);

alert("Obrigada por utilizar o nosso programa!");