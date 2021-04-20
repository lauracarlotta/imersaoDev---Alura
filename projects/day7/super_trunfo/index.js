let cartas = [
    paulo = {
        nome: "Seiya de Pegaso",
        imagem: "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
        atributos: {
            ataque: 80,
            Defesa: 60,
            Magia: 90
        }
    },

    rafa = {
        nome: "Bulbassauro",
        imagem: "https://i.pinimg.com/564x/4a/b8/f7/4ab8f79f7fde7403952e04e532720272.jpg",
        atributos: {
            ataque: 70,
            Defesa: 65,
            Magia: 85
        }
    },

    gui = {
        nome: "Darth Vader",
        imagem: "https://i.pinimg.com/564x/a1/88/01/a18801ff2cc1e27fda55531b25ef0419.jpg",
        atributos: {
            ataque: 88,
            Defesa: 62,
            Magia: 90
        }
    },

    laura = {
        nome: "Severo Snape",
        imagem: "https://i.pinimg.com/564x/2e/82/fa/2e82faea44e82e08507c3a82bef65dbb.jpg",
        atributos: {
            ataque: 89,
            Defesa: 95,
            Magia: 92
        }
    },

    well = {
        nome: "Gandalf",
        imagem: "https://i.pinimg.com/564x/b0/ee/97/b0ee971241e3e5464466b737ba5769ca.jpg",
        atributos: {
            ataque: 88,
            Defesa: 91,
            Magia: 99
        }
    }
]

// console.log(cartas);

let cartaMaquinaSorteada = "";
let cartaJogadorEscolhida = "";

function sortearCarta() {
    
    let numeroCartaMaquina = Math.round(Math.random() * (Number(cartas.length)-1)); // Deixei uma anotação de como cheguei nesse valor do parenteses do multiplicador.
    cartaMaquinaSorteada = cartas[numeroCartaMaquina];
    //console.log(cartaMaquinaSorteada);

    let numeroCartaJogador = Math.round(Math.random() * (Number(cartas.length)-1));
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = Math.round(Math.random() * (Number(cartas.length)-1));
    }
    cartaJogadorEscolhida = cartas[numeroCartaJogador];
    console.log(cartaJogadorEscolhida);

    document.querySelector("#btnSortear").disabled = true; // para que assim que o número seja sorteado, pare de executar essa função e habilite o botão seguinte(#btnJogar);

    document.querySelector("#btnJogar").disabled = false;

    exibirOpcoes();
}

let botaoSortearCarta = document.querySelector("#btnSortear");
botaoSortearCarta.onclick = sortearCarta;


function exibirOpcoes() {
    let opcoes = document.querySelector("#opcoes");
    let opcoesAtributos = "";
    for(let atributo in cartaJogadorEscolhida.atributos) {
        opcoesAtributos += `<input type="radio" name="atributo" value="${atributo}"> ${atributo}`;
    }
    opcoes.innerHTML = opcoesAtributos;
}


function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo');
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    
    if (cartaJogadorEscolhida.atributos[atributoSelecionado] > cartaMaquinaSorteada.atributos[atributoSelecionado]){
        alert("Você venceu a máquina!");
    } else if (cartaJogadorEscolhida.atributos[atributoSelecionado] < cartaMaquinaSorteada.atributos[atributoSelecionado]) {
        alert("Você perdeu!");
    } else {
        alert("Vocês empataram!!!!");
    }

    console.log(cartaMaquinaSorteada);
    //return atributoSelecionado;
}

let botaoJogar = document.querySelector("#btnJogar");
botaoJogar.onclick = jogar;

/* let imagem = document.querySelector(".carta-super-trunfo");

for (let i = 0; i < cartas.length; i++) {
    imagem.innerHTML += `<img class="carta-super-trunfo" title="${cartas[i].nome}" src="${cartas[i].imagem}">`;
} */