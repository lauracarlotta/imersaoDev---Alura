
let nome = prompt("Qual é o seu nome?");
let anoAtual = parseInt(prompt("Em que ano nós estamos?"));
let anoNascimento = parseInt(prompt("Qual o seu ano de nascimento?"));

let idadeDoUsuario = anoAtual - anoNascimento;

alert(`A ${nome} tem ${idadeDoUsuario} anos de idade.`);
