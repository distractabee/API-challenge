// timer
var timeEl = document.querySelector(".timer");
var secondsLeft = 75;
var pointsPenalty = 10;
var questionIndex = 0;

// questions + answers arrays - correct answers marked somehow

var myQuestions = [
    {
        questionText: "what is a?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "how do you?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    },
    {
        questionText: "?",
        answers: [
            "a",
            "b",
            "c"
        ],
        correctIndex: 1,
    }
]

var startButton = document.querySelector("startQuiz")


//quiz function - subtract time for wrong answers
function displayTimeLeft() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft

}

function displayNextQuestion() {
    questionText = document.querySelector("#questionText")

}

function startQuiz() {
    setTimeout(function {
        displayTimeLeft();   
    },
    displayNextQuestion();
     1000)
};

// set high scores to save in local storage
