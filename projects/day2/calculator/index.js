let primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
let operador = prompt("Qual operação você quer realizar? Digite 1 para SOMAR, 2 para SUBTRAIR, 3 para MULTIPLICAR, 4 para DIVIDIR, 5 para PORCENTAGEM, 6 para VALOR AO QUADRADO, 7 para VALOR AO CUBO ou 8 para RAIZ QUADRADA: ");
let segundoValor = 0 ;
let resultado = 0;
let divErrorUserMessage = document.querySelector(".error-user-message");

if (operador == 1) {

    segundoValor = parseInt(prompt("Digite o segundo valor: "));
    resultado = primeiroValor + segundoValor;
    document.write(`<h2> ${primeiroValor} + ${segundoValor} = ${resultado} </h2>`);

} else if (operador == 2) {

    segundoValor = parseInt(prompt("Digite o segundo valor: "));
    resultado = primeiroValor - segundoValor;
    document.write(`<h2> ${primeiroValor} - ${segundoValor} = ${resultado} </h2>`);

} else if (operador == 3) {

    segundoValor = parseInt(prompt("Digite o segundo valor: "));
    resultado = primeiroValor * segundoValor;
    document.write(`<h2> ${primeiroValor} x ${segundoValor} = ${resultado} </h2>`);

} else if (operador == 4) {

    segundoValor = parseInt(prompt("Digite o segundo valor: "));
    resultado = primeiroValor / segundoValor;
    document.write(`<h2> ${primeiroValor} / ${segundoValor} = ${resultado.toFixed(2)} </h2>`);

} else if (operador == 5) {

    segundoValor = parseInt(prompt("Digite o segundo valor: "));
    resultado = (primeiroValor * segundoValor) / 100;
    document.write(`<h2> ${primeiroValor} / ${segundoValor} = ${resultado.toFixed(2)} </h2>`);
  
} else if (operador == 6) {

    resultado = primeiroValor * primeiroValor;
    document.write(`<h2> ${primeiroValor}² = ${resultado} </h2>`);
  
} else if (operador == 7) {

    resultado = primeiroValor * primeiroValor * primeiroValor;
    document.write(`<h2> ${primeiroValor}³ = ${resultado} </h2>`);
  
} else if (operador == 8) {

    resultado = Math.sqrt(primeiroValor);

    if (primeiroValor >= 0) {

        document.write(`<h2> √${primeiroValor} = ${resultado} </h2>`);

    } else {

        document.write(`<h2>Opção inválida</h2>`);
        divErrorUserMessage.innerHTML = "Esta calculadora faz apenas calculos de √ com números positivos";
    }
    
} else {

    document.write(`<h2>Opção inválida</h2>`);
    divErrorUserMessage.innerHTML = "Verifique o valor digitado e tente novamente";
}

// if - se
// else - senão
// else if - senão se

// document.write()
// operadores
// concatenação
// = atribuição
// == igual
// identação