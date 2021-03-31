let numeroSecreto = 3;
let chute = parseFloat(Number(prompt("Chute um um número entre 0 e 10!")));

if (numeroSecreto == chute) {

    alert("Você acertou!");

} else if (numeroSecreto > chute) {

    console.log("O número secreto é maior!");
    chute = parseFloat(Number(prompt("Chute um um número entre 0 e 10!")));
    

} else if (numeroSecreto < chute) {

    console.log("O número secreto é menor!");
    chute = parseFloat(Number(prompt("Chute um um número entre 0 e 10!")));

} else {

    alert("Não foi dessa vez...");
}