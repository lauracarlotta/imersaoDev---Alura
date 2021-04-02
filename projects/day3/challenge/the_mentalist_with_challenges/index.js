let answerNumber = document.querySelector(".answer");
let untilWhatNumber = Number(prompt("Você quer que o sorteio seja de 1 a que número? "));
let numeroSecreto = Math.round(Math.random() * untilWhatNumber);

let totalTentativas = 3;
let chute = 0;

if (numeroSecreto == 0) {

    numeroSecreto = 1; // Para que o número sorteado não seja 0
}

console.log(numeroSecreto);

while (totalTentativas > 0 && numeroSecreto != 0) {

    chute = parseFloat(Number(prompt(`Chute um um número entre 1 e ${untilWhatNumber}!`)));

    if (numeroSecreto == chute) {
        
        answerNumber.innerHTML = `<strong>Você acertou!</strong>`;
        totalTentativas = 0;

    } else if (numeroSecreto > chute) {

        answerNumber.innerText = "O número secreto é maior!";
        totalTentativas--;

    } else if (numeroSecreto < chute) {

        answerNumber.innerText = "O número secreto é menor!";
        totalTentativas--;
    }
}

if (chute != numeroSecreto) {

    answerNumber.innerHTML = `<em> Suas tentativas acabaram! </em> <br> <strong> O número secreto era ${numeroSecreto}!</strong>`;
}



