/* The Godfather */

function answerCorrectTheGodfather() {

    let correctAlternativeGodfather = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeGodfather == 2) {
        document.querySelector(".answer-correct-the-godfather").style.backgroundColor = "green";
        tryAgainTheGodfather.innerHTML = "";
    } else {
        tryAgainTheGodfather.innerHTML = "Tente Novamente!";
    }

}

let answerButtonTheGodfather = document.querySelector(".answer-question-the-godfather");
let tryAgainTheGodfather = document.querySelector(".try-again-the-godfather");

answerButtonTheGodfather.onclick = answerCorrectTheGodfather;




/* Matrix */

function answerCorrectMatrix() {

    let correctAlternativeMatrix = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeMatrix == 1) {
        document.querySelector(".answer-correct-matrix").style.backgroundColor = "green";
        tryAgainMatrix.innerHTML = "";
    } else {
        tryAgainMatrix.innerHTML = "Tente Novamente!";
    }

}

let answerButtonMatrix = document.querySelector(".answer-question-matrix");
let tryAgainMatrix = document.querySelector(".try-again-matrix");

answerButtonMatrix.onclick = answerCorrectMatrix;




/* Forest Gump */

function answerCorrecForestGump() {

    let correctAlternativeForestGump = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeForestGump == 1) {
        document.querySelector(".answer-correct-forest-gump").style.backgroundColor = "green";
        tryAgainForestGump.innerHTML = "";
    } else {
        tryAgainForestGump.innerHTML = "Tente Novamente!";
    }

}

let answerForestGump = document.querySelector(".answer-question-forest-gump");
let tryAgainForestGump = document.querySelector(".try-again-forest-gump");

answerForestGump.onclick = answerCorrecForestGump;




/* Batman Dark Knight */

function answerCorrectBatmanDarKnight() {

    let correctAlternativeBatmanDarKnight = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeBatmanDarKnight == 2) {
        document.querySelector(".answer-correct-batman-dark-knight").style.backgroundColor = "green";
        tryAgainBatmanDarKnight.innerHTML = "";
    } else {
        tryAgainBatmanDarKnight.innerHTML = "Tente Novamente!";
    }

}

let answerBatmanDarKnight = document.querySelector(".answer-question-batman-dark-knight");
let tryAgainBatmanDarKnight = document.querySelector(".try-again-batman-dark-knight");

answerBatmanDarKnight.onclick = answerCorrectBatmanDarKnight;




/* The Shining */

function answerCorrectTheShining() {

    let correctAlternativeTheShining = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeTheShining == 3) {
        document.querySelector(".answer-correct-the-shining").style.backgroundColor = "green";
        tryAgainTheShining.innerHTML = "";
    } else {
        tryAgainTheShining.innerHTML = "Tente Novamente!";
    }

}

let answerTheShining = document.querySelector(".answer-question-the-shining");
let tryAgainTheShining = document.querySelector(".try-again-the-shining");

answerTheShining.onclick = answerCorrectTheShining;




/* The Lord of The Rings */

function answerCorrectTheLordOfTheRings() {

    let correctAlternativeTheLordOfTheRings = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeTheLordOfTheRings == 4) {
        document.querySelector(".answer-correct-the-lord-of-the-rings").style.backgroundColor = "green";
        tryAgainTheLordOfTheRings.innerHTML = "";
    } else {
        tryAgainTheLordOfTheRings.innerHTML = "Tente Novamente!";
    }

}

let answerTheLordOfTheRings = document.querySelector(".answer-question-the-lord-of-the-rings");
let tryAgainTheLordOfTheRings = document.querySelector(".try-again-the-lord-of-the-rings");

answerTheLordOfTheRings.onclick = answerCorrectTheLordOfTheRings;




/* Pulp Fiction */

function answerCorrectPulpFiction() {

    let correctAlternativePulpFiction = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativePulpFiction == 3) {
        document.querySelector(".answer-correct-pulp-fiction").style.backgroundColor = "green";
        tryAgainPulpFiction.innerHTML = "";
    } else {
        tryAgainPulpFiction.innerHTML = "Tente Novamente!";
    }

}

let answerPulpFiction = document.querySelector(".answer-question-pulp-fiction");
let tryAgainPulpFiction = document.querySelector(".try-again-pulp-fiction");

answerPulpFiction.onclick = answerCorrectPulpFiction;



/* função para mudar o fundo dá página 

function changeBackground() {

    for(let indice = 1; indice < imagesBackground.length; indice++) {

        document.querySelector("body").style.backgroundImage = imagesBackground[indice];
    }
}

let imagesBackground = ["https://observatoriodeseries.uol.com.br/wp-content/uploads/2019/07/cropped-4151717.jpg", "https://sm.mashable.com/mashable_sea/photo/default/money-heist_3hk8.jpg", "https://wallpaperaccess.com/full/1087736.jpg", "https://observatoriodeseries.uol.com.br/wp-content/uploads/2019/07/cropped-4151717.jpg"];

let nextQuestionButton = document.getElementsByTagName("a");

nextQuestionButton.onclick = changeBackground;

*/