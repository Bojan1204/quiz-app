const startBtn = document.querySelector('#start-btn')
const questionsContainer = document.querySelector('#question-container')

startBtn.addEventListener('click', startGame)

function startGame(){
    startBtn.classList.add('hide')
    questionsContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){

}

function selectAnswer(){

}