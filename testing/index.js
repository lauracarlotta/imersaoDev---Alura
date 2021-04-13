let jogadores = [];

let laura = {
    nome: "Laura",
    vitorias: 5,
    empates: 2,
    derrotas: 0,
    pontos: 0
}

let well = {
    nome: "Well",
    vitorias: 6,
    empates: 1,
    derrotas: 2,
    pontos: 0
}

jogadores.push(laura, well);
// console.log(jogadores);

function novoJogador(nome, vitorias, empates, derrotas, pontos = 0) {

    let nome = prompt("Qual é o seu nome?");
    let vitorias = Number(prompt("Quantas vitórias você teve?"));
    let empates = Number(prompt("Quantos foram os seus empates?"));
    let derrotas = Number(prompt("Quantas foram as suas derrotas?"));

    let inputNovoJogador = {
        "nome": nome,
        "vitorias": vitorias,
        "empates": empates,
        "derrotas": derrotas,
        "pontos": pontos
    }

    jogadores.push(inputNovoJogador);
    
}

function calculaPontos(jogador) {
    let totalPontos = (jogador.vitorias * 3) + jogador.empates;
    return totalPontos;
}

novoJogador("Jake", 3, 1, 5);
novoJogador("Edna", 10, 3, 0);

let vitorias = [];

for (let i = 0; i < jogadores.length; i++) {
    vitorias.push(jogadores[i].vitorias);
}

//console.log(vitorias); 

// console.log(jogadores);

/* console.log(calculaPontos(jogadores[0]));
console.log(jogadores);
console.log(calculaPontos(jogadores[3]));

console.log(jogadores[0].vitorias) */



/* let botaoNovoJogador = document.querySelector(".new-player");

botaoNovoJogador.onclick = novoJogador; */

// jogadores = new Object();


/* console.log(jogadores); */

function calculaMediaVitorias (array) {

    let mediaVitorias = 0;
    let mediaVitoriasvalor = 0;

    for(let i = 0; i < array.length; i++) {
        //console.log(i);
        mediaVitorias += array[i].vitorias;
        mediaVitoriasvalor = mediaVitorias / array.length;
    }

    return mediaVitoriasvalor;
}

console.log(calculaMediaVitorias(jogadores));
