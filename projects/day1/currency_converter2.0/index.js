let calculaValorButton = document.querySelector(".currency");
let userAnswerSpan = document.querySelector(".user-answer");

function calculaValor() {

    let valorEmDolar = prompt(`Qual o valor em Dolar que você que converter? "Exemplo: U$ 200,00".`);

    valorEmDolar = valorEmDolar.replace("," , ".");

    valorEmDolar = Number(valorEmDolar);

    let valorEmReal = (valorEmDolar * 5.62).toFixed(2); // valor do dolar em 24/03

    valorEmReal = String(valorEmReal).replace("." , ",");

    userAnswerSpan.innerHTML = `O item convertido do dolar para o real <br> ficou R$ ${valorEmReal} reais. <br>`;

    userAnswerSpan.innerHTML += "<br> <em> <big>Obrigada por utilizar o nosso programa!<big> </em>";
}

calculaValorButton.onclick = calculaValor;
