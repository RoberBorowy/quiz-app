const quizData = [
  {
    question: "What is the biggest animal in the world ?",
    a: "Elephant",
    b: "Giraffe",
    c: "Blue whale",
    d: "Shark",
    corect: "c",
  },
  {
    question: "What language is used by the most people in the world",
    a: "English",
    b: "Spanish",
    c: "Chinese",
    d: "French",
    corect: "c",
  },
  {
    question: "How many years did the oldest man in the world live ?",
    a: "122",
    b: "145",
    c: "129",
    d: "118",
    corect: "a",
  },
  {
    question: "What is the most popular programming language in 2022 ?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    corect: "d",
  },
];

const question = document.getElementById("question");
const answerEl = document.querySelectorAll(".answer");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const message = document.querySelector(".answer-message");
const btn = document.querySelector(".btn");

let quizQueston = 0;

function loadQuestion() {
    
  const actualQuestion = quizData[quizQueston];

  question.innerText = actualQuestion.question;
  aText.innerText = actualQuestion.a;
  bText.innerText = actualQuestion.b;
  cText.innerText = actualQuestion.b;
  dText.innerText = actualQuestion.c;
}

loadQuestion();
