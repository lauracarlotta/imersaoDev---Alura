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
        tryAgainMatrix.innerHTML = "";
    } else {
        tryAgainForestGump.innerHTML = "Tente Novamente!";
    }

}

let answerForestGump = document.querySelector(".answer-question-forest-gump");
let tryAgainForestGump = document.querySelector(".try-again-forest-gump");

answerForestGump.onclick = answerCorrecForestGump;

/* Batman Dark Knight */

function answerCorrecForestGump() {

    let correctAlternativeForestGump = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeForestGump == 1) {
        document.querySelector(".answer-correct-forest-gump").style.backgroundColor = "green";
        tryAgainMatrix.innerHTML = "";
    } else {
        tryAgainForestGump.innerHTML = "Tente Novamente!";
    }

}

let answerForestGump = document.querySelector(".answer-question-forest-gump");
let tryAgainForestGump = document.querySelector(".try-again-forest-gump");

answerForestGump.onclick = answerCorrecForestGump;

/* The Shining */


/* The Lord of The Rings */


/* Pulp Fiction */

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