/* The Godfather */

let answerButtonTheGodfather = document.querySelector(".answer-question-the-godfather");
let tryAgainTheGodfather = document.querySelector(".try-again-the-godfather");

function answerCorrectTheGodfather() {

    let correctAlternativeGodfather = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeGodfather == 2) {
        document.querySelector(".answer-correct-the-godfather").style.backgroundColor = "green";
        tryAgainTheGodfather.innerHTML = "";
    } else {
        tryAgainTheGodfather.innerHTML = "Tente Novamente!";
    }

}

answerButtonTheGodfather.onclick = answerCorrectTheGodfather;

/* Matrix */

let answerButtonMatrix = document.querySelector(".answer-question-matrix");
let tryAgainMatrix = document.querySelector(".try-again-matrix");

function answerCorrectMatrix() {

    let correctAlternativeMatrix = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeMatrix == 1) {
        document.querySelector(".answer-correct-matrix").style.backgroundColor = "green";
        tryAgainMatrix.innerHTML = "";
    } else {
        tryAgainMatrix.innerHTML = "Tente Novamente!";
    }

}

answerButtonMatrix.onclick = answerCorrectMatrix;

/* Forest Gump */

/* let answerButtonMatrix = document.querySelector(".answer-question-matrix");
let tryAgainMatrix = document.querySelector(".try-again-matrix");

function answerCorrectMatrix() {

    let correctAlternativeMatrix = Number(prompt("Qual é a alternativa correta?"));

    if(correctAlternativeMatrix == 1) {
        document.querySelector(".answer-correct-matrix").style.backgroundColor = "green";
        tryAgainMatrix.innerHTML = "";
    } else {
        tryAgainMatrix.innerHTML = "Tente Novamente!";
    }

} */

/* Batman Dark Knight */


/* The Shining */


/* The Lord of The Rings */


/* Pulp Fiction */