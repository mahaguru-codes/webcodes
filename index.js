const quizDB = [
    {
        question: "Q 1. How much memory does a class occupy?",
        a: "100 bytes",
        b: "150 bytes",
        c: "Equal to running program",
        d: "Class doesn't occupy any memory.",
        ans: "ans4"
    },
    {
        question: "Q 2. What does it mean by polymorphism?",
        a: "Hiding complex code into a smaller and convenient code.",
        b: "One variable or method, many forms.",
        c: "Classes having multiple objects.",
        d: "Using functions from different classes.",
        ans: "ans2"
    },
    {
        question: "Q 3. Node.js is built with?",
        a: "Chrome V8 Engine",
        b: "Linux",
        c: "PHP",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q 4. Which is true for C++?",
        a: "Created by Brendan Eich.",
        b: "C++ doesn't have references but C has.",
        c: "C++ is very fast language that's why it can be used in making hardware centric video games.",
        d: "2 and 3 both are correct.",
        ans: "ans3"
    },
    {
        question: "Q 5. What is the order of inheritance in OOP's?",
        a: "Base class > Child class > Virtual base class",
        b: "Child class > Virtual base class > Base class",
        c: "Virtual base class > Base class > Child class",
        d: "Base class > Virtual base class > Child class",
        ans: "ans3"
    }
];

const question = document.querySelector('.questions');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const answer = document.querySelectorAll('.answers');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
let content = document.querySelector('.content');

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckedAnswer = () =>{
    let answer1;
    answer.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer1 = curAnsElem.id;
        }
    });
    return answer1;
};

const deselectAll = () => {
    answer.forEach((curAnsElem) =>{
        curAnsElem.checked = false;
    });
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckedAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score += 10;
    };

    questionCount++;
    deselectAll();
    if(questionCount == quizDB.length){
        submit.style.display = 'none';
    }
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else{
        content.innerHTML = `<h2>Test Completed Successfully !!</h2>`;
        content.style.textAlign = "center";
        content.style.color = "rgb(10, 241, 48)";
        
        if(score==50){
            showScore.innerHTML = `<h3>Hurray... You got ${score} out of ${quizDB.length * 10}  !!</h3>
        <button class="btn" onclick="location.reload()">Attempt again</button>`;
            showScore.classList.add('dark-green')
        }
        else if(score== 40){
            showScore.innerHTML = `<h3>Well tried... You got ${score} out of ${quizDB.length * 10}  !!</h3>
        <button class="btn" onclick="location.reload()">Attempt again</button>`;
            showScore.classList.add('light-green')
        }
        else if(score==30){
            showScore.innerHTML = `<h3>Try hard... You got ${score} out of ${quizDB.length * 10}  !!</h3>
        <button class="btn" onclick="location.reload()">Attempt again</button>`;
            showScore.classList.add('orange')
        }
        else{
            showScore.innerHTML = `<h3>Try again... You got ${score} out of ${quizDB.length * 10}  !!</h3>
        <button class="btn" onclick="location.reload()">Attempt again</button>`;
            showScore.classList.add('red')
        }
        showScore.classList.remove('scoreArea');
    }
});