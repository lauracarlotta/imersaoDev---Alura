let numeroSecreto = parseInt(Math.random() * 10);
console.log(numeroSecreto);
let totalTentativas = 3;
let chute = 0;

while (totalTentativas > 0) {

    chute = parseFloat(Number(prompt("Chute um um número entre 0 e 10!")));

    if (numeroSecreto == chute) {
        
        console.log("Você acertou!");
        break;

    } else if (numeroSecreto > chute) {

        console.log("O número secreto é maior!");
        totalTentativas--;

    } else if (numeroSecreto < chute) {

        console.log("O número secreto é menor!");
        totalTentativas--;
    }
}

if (chute != numeroSecreto) {

    console.log(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}!`);
}
