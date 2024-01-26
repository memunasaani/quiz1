const questions = [
    {
        question: "What is the largest animal in the world?",
        answers:[
            {text: "shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers:[
            {text: " Sydney", correct: false},
            {text: "Melbourn", correct: false},
            {text: "Canberra", correct: true},
            {text: "Brisbane", correct: false}
        ]  
    },
    {
        question: "In computer programming, what does HTML stand for?",
        answers:[
            {text: "Hyper Text Markup Language", correct: true},
            {text: "High-level Text Machine Language", correct: false},
            {text: "Hyperlink and Text Management Language", correct: false},
            {text: "Hyper Transferable Machine Language", correct: false}
        ] 
    },
    {
        question: "Who is the author of the famous play 'Romeo and Juliet'?",
        answers:[
            {text: "William Wordsworth", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
            {text: "Charles Dickensiraffe", correct: false}
        ] 
    }
];
 const questionElement = document.getElementById("question");
 const answeredButtons = document.getElementById("answered-buttons");
 const NextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answeredButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

 function resetState(){
    NextButton.style.display = "none";
    while(answeredButtons.firstChild){
        answeredButtons.removeChild(answeredButtons.firstChild)
    }
 }
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answeredButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    })
    NextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}! 🥳`;
    NextButton.innerHTML= "Take Quiz again";
    NextButton.style.display= "block";
}
const nextButton = document.getElementById("next-btn"); // Declare nextButton here

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
 startQuiz();