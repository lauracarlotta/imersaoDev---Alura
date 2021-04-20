let cartas = [
    Paulo = {
        Nome: "Seiya de Pegaso",
        Imagem: "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
        Atributos: {
            Ataque: 80,
            Defesa: 60,
            Magia: 90
        }
    },

    Rafa = {
        Nome: "Bulbassauro",
        Imagem: "https://i.pinimg.com/564x/4a/b8/f7/4ab8f79f7fde7403952e04e532720272.jpg",
        Atributos: {
            Ataque: 70,
            Defesa: 65,
            Magia: 85
        }
    },

    Gui = {
        Nome: "Darth Vader",
        Imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
        Atributos: {
            Ataque: 88,
            Defesa: 62,
            Magia: 90
        }
    },

    Laura = {
        Nome: "Severo Snape",
        Imagem: "http://3.bp.blogspot.com/-w1HY-JyoRnM/TmK_j3aTsbI/AAAAAAAAAGk/IJ06ucptBeo/s1600/Severo%2BSnape.jpg",
        Atributos: {
            Ataque: 89,
            Defesa: 95,
            Magia: 92
        }
    },

    Well = {
        Nome: "Gandalf",
        Imagem: "https://i.pinimg.com/564x/b0/ee/97/b0ee971241e3e5464466b737ba5769ca.jpg",
        Atributos: {
            Ataque: 88,
            Defesa: 91,
            Magia: 99
        }
    }
];

let cartaMaquina = "";
let cartaJogador = "";

function sortearCarta() {
    let numeroCartaMaquina = Math.round(Math.random() * (Number(cartas.length)-1));
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = Math.round(Math.random() * (Number(cartas.length)-1));
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = Math.round(Math.random() * (Number(cartas.length)-1));
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.querySelector('#btnSortear').disabled = true;
    document.querySelector('#btnJogar').disabled = false;

    exibirCartaJogador();
}

let botaoSortearCarta = document.querySelector("#btnSortear");
botaoSortearCarta.onclick = sortearCarta;

function exibirCartaJogador() {
    let divCartaJogador = document.querySelector("#carta-jogador");
    let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.Imagem})`; // 1 - manipulação direta com o Dom no css
    let nomeCarta = `<p class="carta-subtitle">${cartaJogador.Nome}</p>`; // 2 -  já nessa linha, como estamos utilizando tags no html e guardando numa variável, precisamos enviá-las para o JS, 

    let opcoesTexto = "";

    for (let atributo in cartaJogador.Atributos) {
        opcoesTexto += `<input type='radio' name='atributo' value="${atributo}"> ${atributo} ${cartaJogador.Atributos[atributo]} <br>`;
    }

    let html = '<div id="opcoes" class="carta-status --spacing">'
    divCartaJogador.innerHTML = nomeCarta + moldura + html + opcoesTexto + '</div>'// 3 - Que está sendo executada nessa linha.


    // divCartaJogador.innerHTML += nomeCarta; Essa linha foi a que eu fiz inicialmente porque já há a moldura no nosso html, por isso era só somar igual pra Imagem aparecer no lugar certo com o Nome. Contudo, como vamos colocar mais coisas na mesma concatenação e precisamos de mais um "+", o nosso += não funcionaria.
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
    let divResultado = document.querySelector("#resultado");
    let atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.Atributos[atributoSelecionado] > cartaMaquina.Atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Venceu!!!</p>`;
    } else if (cartaJogador.Atributos[atributoSelecionado] < cartaMaquina.Atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Você perdeu!!!</p>`;
    } else {
        htmlResultado = `<p class="resultado-final">Há, EMPATOU!!!</p>`;
    }

    divResultado.innerHTML = htmlResultado;

    exibirCartaMaquina();
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.querySelector("#carta-maquina");
    let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.Imagem})`;
    let nomeCarta = `<p class="carta-subtitle">${cartaMaquina.Nome}</p>`;

    let opcoesTexto = "";

    for(let atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p type="text" name="atributo" value="${atributo}"> ${atributo} ${cartaMaquina.Atributos[atributo]} </p> <br>`;
    }

    let html = `<div id="opcoes" class="carta-status --spacing">`;
    divCartaMaquina.innerHTML = nomeCarta + moldura + html + opcoesTexto + `</div>`;
}

let botaoJogar = document.querySelector("#btnJogar");
botaoJogar.onclick = jogar;

/* let Imagem = document.querySelector(".carta-super-trunfo");

for (let i = 0; i < cartas.length; i++) {
    Imagem.innerHTML += `<img class="carta-super-trunfo" title="${cartas[i].Nome}" src="${cartas[i].Imagem}">`;
} */