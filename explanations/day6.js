// objetos é como se fossem uma coleção de variaveis que ficam dentro de arrays (são infos relacionadas aquela variável);

// declarar uma função ≠ chamar a função

let paulo = {
    nome:"Paulo", // ----|
    vitorias: 5,  //     |
    empates: 3,   //     | ----> aTRIBUTOS, pROPRIEDADES
    derrotas: 1,  //     |
    pontos: 0     // ----|
} // atributos relacionados a variável PAULO.

console.log(paulo);
console.log(typeof paulo);
console.log(paulo.empates);

paulo.vitorias += 3;
console.log(paulo.vitorias)

function exibeVitorias (jogador) {
    console.log(paulo.vitorias);
}

exibeVitorias(paulo);

function calculaPontos(jogador) {
    let pontuacaoJogador = (jogador.vitorias * 3) + jogador.empates;
    return pontuacaoJogador;
} // a função recebe e o return = retorna!!!

console.log(calculaPontos(paulo));

// OBJETOS
// FUNÇÕES
// PARÂMETROS
// RETURN 
// --> FOREACH <--
// inner.HTML

// * sempre chamar a função
// * criar a função
// * pode chamar uma função dentro da outra
// * sempre dar o console.log() para ver o que o programa está retonando.

// ------>>> PESQUISAR forEach() <<<-------
