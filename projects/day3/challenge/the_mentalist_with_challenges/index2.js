function startGame() {

    alert("Você terá 3 chances valendo 5 pontos cada uma!");

    untilWhatNumber = Number(prompt("Você quer que o sorteio seja de 1 a que número? "));

    secretNumber = Math.round(Math.random() * untilWhatNumber);

    while (secretNumber == 0) {

        secretNumber = Math.round(Math.random() * untilWhatNumber);
        prizeDrawGuess++;
    }
    
    console.log(secretNumber);
    
    while (totalAttempts > 0) {
    
        guess = parseFloat(Number(prompt(`Chute um um número entre 1 e ${untilWhatNumber}!`)));
    
        if (guess <= 0 || guess > untilWhatNumber) {
    
            alert(`Valor inválido!`);
            alert(`Você não perdeu tentativas, mas precisa chutar um número entre 1 e ${untilWhatNumber}!`);
    
        } else {
    
            if (secretNumber == guess) {
                
                answerNumber.classList.remove("answer-none");
                answerNumber.innerHTML = `<strong>Você acertou!</strong>`;
                break;
    
            } else if (secretNumber > guess && guess != 0 && guess < untilWhatNumber) {
    
                answerNumber.classList.remove("answer-none");
                answerNumber.innerText = "O número secreto é maior!";
                totalAttempts--;
                point-=5;
    
    
            } else if (secretNumber < guess && guess != 0 && guess < untilWhatNumber) {
    
                answerNumber.classList.remove("answer-none");
                answerNumber.innerText = "O número secreto é menor!";
                totalAttempts--;
                point-=5;
            }
    
        }
    
    }
    
    if (totalAttempts == 3){
    
        answerNumber.classList.remove("answer-none");
        answerNumber.innerHTML += `<br>Caraca, você é bom! <br> Por ser de primeira, <br> <em> <strong> <big> ganhou ${point} pontos! </em> </strong> </big>`;
        
    } else if (totalAttempts == 2){
    
        answerNumber.classList.remove("answer-none");
        answerNumber.innerHTML += `<br> Acertando de segunda, <br> <em> <strong> <big> ganha ${point} pontos! </em> </strong> </big>`;
    
    } else if (totalAttempts == 1) {
    
        answerNumber.classList.remove("answer-none");
        answerNumber.innerHTML += `<br> Ufffffa... Foi quase!!! <em> <strong> <big> Ganhou ${point} pontos! </em> </strong> </big>`;
    
    }
    
    if (guess != secretNumber) {
    
        answerNumber.classList.remove("answer-none");
        answerNumber.innerHTML = `<em> Suas tentativas acabaram! </em> <br> <strong> Você não ganhou nenhum ponto... <br> O número secreto era ${secretNumber}!</strong>`;
    }
}

let answerNumber = document.querySelector(".answer-none");
let untilWhatNumber = 0;
let secretNumber = 0;
let prizeDrawGuess = 1;
let point = 15;
let totalAttempts = 3;
let guess = 0;
let startButton = document.querySelector(".start-button"); 

startButton.onclick = startGame;
