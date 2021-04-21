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
    },

    
    Lol = {
        Nome: "Caitlyn",
        Imagem: "https://www.mobafire.com//images/social/build-card/caitlyn.jpg",
        Atributos: {
            Ataque: 95,
            Defesa: 40,
            Magia: 10
        }
    },
    
    
    Naruto = {
        Nome: "Naruto",
        Imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
        Atributos: {
            Ataque: 80,
            Defesa: 60,
            Magia: 100
        }
    },
    
    
    GOT = {
        Nome: "Arya Stark",
        Imagem: "https://cdn.hipwallpaper.com/i/60/23/0Ff5VI.jpg",
        Atributos: {
            Ataque: 99,
            Defesa: 99,
            Magia: 88
        }
    },
    
    Coringa = {
        Nome: "Coringa",
        Imagem: "https://rollingstone.uol.com.br/media/_versions/coringa_heath_ledger_reproducao_widelg.jpg",
        Atributos: {
            Ataque: 95,
            Defesa: 70,
            Magia: 0
        }
    },
    
    Marvel = {
        Nome: "Capitã Marvel",
        Imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
        Atributos: {
            Ataque: 90,
            Defesa: 80,
            Magia: 0
        }
    },

    Sailor = {
        Nome: "Sailor Moon",
        Imagem: "https://i.pinimg.com/236x/a7/1c/55/a71c551b8b419fa3a64261810fa37e42.jpg",
        Atributos: {
            Ataque: 70,
            Defesa: 65,
            Magia: 60
        }
    },

    Moiras = {
        Nome: "Moiras",
        Imagem: "https://i.pinimg.com/236x/d9/fc/d0/d9fcd0c7a4150353158c80f1c190d3ec.jpg",
        Atributos: {
            Ataque: 50,
            Defesa: 75,
            Magia: 100
        }
    },

    Freya = {
        Nome: "Freya",
        Imagem: "https://i.pinimg.com/originals/df/09/bb/df09bb8f13c91c8476ba93f5606998c4.jpg",
        Atributos: {
            Ataque: 110,
            Defesa: 110,
            Magia: 110
        }
    },

    Donatello = {
        Nome: "Donatello",
        Imagem: "https://i.pinimg.com/236x/fb/48/a0/fb48a00647cfe873764dacccca85fe04.jpg",
        Atributos: {
            Ataque: 90,
            Defesa: 85,
            Magia: 30
        }
    }

];

/* for(let i in cartas) {
    console.log(cartas[i]);
} */



let cartaMaquina = "";
let cartaJogador = "";

function sortearCarta() {
    let numeroCartaMaquina = Math.round(Math.random() * (Number(cartas.length)-1));
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);
    console.log(cartaMaquina);
    console.log(cartas.length);

    let numeroCartaJogador = Math.round(Math.random() * (Number(cartas.length)-1));
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);
    console.log(cartaJogador);
    console.log(cartas.length);

    document.querySelector('#btnSortear').disabled = true;
    document.querySelector('#btnJogar').disabled = false;

    exibirCartaJogador();
    atualizaQuantidadeDeCartas();
}
 

let botaoSortearCarta = document.querySelector("#btnSortear");
botaoSortearCarta.onclick = sortearCarta;

let pontosJogador = 0;
let pontosMaquina = 0;

atualizaPlacar();

atualizaQuantidadeDeCartas();

function atualizaQuantidadeDeCartas () {
    let divQuantidadeDeCartas = document.querySelector("#quantidade-cartas");
    let html = `Quantidade de cartas no jogo: ${cartas.length}`;
    divQuantidadeDeCartas.innerHTML = html;
}

function atualizaPlacar () {
    let divPlacar = document.querySelector("#placar");
    let html = `Jogador ${pontosJogador} / ${pontosMaquina} Máquina`;
    
    divPlacar.innerHTML = html;
}

function exibirCartaJogador() {
    let divCartaJogador = document.querySelector("#carta-jogador");
    let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.Imagem})`; 
    let nomeCarta = `<p class="carta-subtitle">${cartaJogador.Nome}</p>`; 
    let opcoesTexto = "";

    for (let atributo in cartaJogador.Atributos) {
        opcoesTexto += `<input type='radio' name='atributo' value="${atributo}"> ${atributo} ${cartaJogador.Atributos[atributo]} <br>`;
    }

    let html = '<div id="opcoes" class="carta-status --spacing">'
    divCartaJogador.innerHTML = nomeCarta + moldura + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo');
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.querySelector("#carta-maquina");
    let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.Imagem})`;
    let nomeCarta = `<p class="carta-subtitle">${cartaMaquina.Nome}</p>`;

    let opcoesTexto = "";

    for(let atributo in cartaMaquina.Atributos) {
        opcoesTexto += `<p type="text" name="atributo" value="${atributo}"> ${atributo} ${cartaMaquina.Atributos[atributo]}</p>`;
    }

    let html = `<div id="opcoes" class="carta-status carta-status-maquina --spancing">`;
    divCartaMaquina.innerHTML = nomeCarta + moldura + html + opcoesTexto + `</div>`;
}

function jogar() {
    
    let divResultado = document.querySelector("#resultado");
    let atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.Atributos[atributoSelecionado] > cartaMaquina.Atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Venceu!!!</p>`;
        pontosJogador++;
    } else if (cartaJogador.Atributos[atributoSelecionado] < cartaMaquina.Atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Você perdeu!!!</p>`;
        pontosMaquina++;
    } else {
        htmlResultado = `<p class="resultado-final">Há, EMPATOU!!!</p>`;
    }

    if (cartas.length == 0) {

        alert("FIM DE JOGO!");

        if (pontosJogador > pontosMaquina) {

            htmlResultado = `<p class="resultado-final">Você venceu com ${pontosJogador} pontos</p>`;

        } else if (pontosJogador < pontosMaquina) {

            htmlResultado = `<p class="resultado-final">Não foi dessa vez... A máquna ganhou com ${pontosMaquina} pontos</p>`;

        } else {
            htmlResultado = `<p class="resultado-final">DEU EMPATE!!</p>`;
        }

    } else {

        document.querySelector("#btnProximaRodada").disabled = false;

    }

    // console.log(cartaMaquina);

    divResultado.innerHTML = htmlResultado;

    document.querySelector("#btnJogar").disabled = true;
    

    exibirCartaMaquina();
    atualizaPlacar();
}

let botaoJogar = document.querySelector("#btnJogar");
botaoJogar.onclick = jogar;

function proximaRodada () {

    let divCartas = document.querySelector("#cartas");

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div>`;
    divCartas.innerHTML += `<div id="carta-maquina" class="carta"></div>`;

    document.querySelector("#btnSortear").disabled = false;
    document.querySelector("#btnJogar").disabled = true;

    let divReseultado = document.querySelector("#resultado");
    divReseultado.innerHTML = "";

}

let botaoProximaRodada = document.querySelector("#btnProximaRodada");
botaoProximaRodada.onclick = proximaRodada;