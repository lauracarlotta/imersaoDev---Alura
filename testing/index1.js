function novoJogador() {

    let jogadorNome = prompt("Qual é o seu nome?");
    let jogadorVitorias = Number(prompt("Quantas vitórias você teve?"));
    let jogadorEmpates = Number(prompt("Quantos foram os seus empates?"));
    let jogadorDerrotas = Number(prompt("Quantas foram as suas derrotas?"));

    let inputNovoJogador = {
        "nome": jogadorNome,
        "vitorias": jogadorVitorias,
        "empates": jogadorEmpates,
        "derrotas": jogadorDerrotas,
        "pontos": 0
    }

    jogadores = inputNovoJogador;
    console.log(jogadores)
    exibeNaTela(jogadores);
}

function exibeNaTela(jogadores) {
    let html = "";

    for(let i = 0; i < jogadores.length; i++) {
        html += `<tr><td>${jogadores[i].nome}</td>`;
        html += `<td>${jogadores[i].vitorias}</td>`;
        html += `<td>${jogadores[i].empates}</td>`;
        html += `<td>${jogadores[i].derrotas}</td>`;
        html += `<td>${jogadores[i].pontos}</td></tr>`;
    }

    let tabelaJogadores = document.querySelector("tbody");
    tabelaJogadores.innerHTML = html;

}

function calculaPontos(jogador) {
    let totalPontos = (jogador.vitorias * 3) + jogador.empates;
    return totalPontos;
}

let jogadores = [];

let buttonNovoJogador = document.querySelector(".new-player");

buttonNovoJogador.onclick = novoJogador;
