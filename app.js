const quizData = [
  {
    question: "What is the biggest animal in the world ?",
    a: "Elephant",
    b: "Giraffe",
    c: "Blue whale",
    d: "Shark",
    correct: "c",
  },
  {
    question: "What language is used by the most people in the world",
    a: "English",
    b: "Spanish",
    c: "Chinese",
    d: "French",
    correct: "c",
  },
  {
    question: "How many years did the oldest man in the world live ?",
    a: "122",
    b: "145",
    c: "129",
    d: "118",
    correct: "a",
  },
  {
    question: "What is the most popular programming language in 2022 ?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    correct: "d",
  },
];

const question = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const message = document.querySelector(".answer-message");
const btn = document.querySelector("button");

let quizQueston = 0;

loadQuestion();

function loadQuestion() {
  deleteChecked();

  const actualQuestion = quizData[quizQueston];

  question.innerText = actualQuestion.question;
  aText.innerText = actualQuestion.a;
  bText.innerText = actualQuestion.b;
  cText.innerText = actualQuestion.c;
  dText.innerText = actualQuestion.d;
}
function getSelected() {
  let answerQ = undefined;

  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answerQ = answerEl.id;
    }
  });

  return answerQ;
}
function deleteChecked() {
  answers.forEach((answer) => {
    answer.checked = false;
    message.innerText = "";
  });
}

function reset() {
  quizQueston = 0;
  loadQuestion();
  btn.innerText = 'submit';
}

btn.addEventListener("click", () => {
  const answer = getSelected();
  if (
    quizQueston < quizData.length - 1 &&
    answer &&
    answer === quizData[quizQueston].correct
  ) {
    quizQueston++;
    loadQuestion();
    message.innerText = "CORECT :)";
    message.style.color = "#97BA00";
    setTimeout(deleteChecked, 2000);
  } else if (!answer || answer !== quizData[quizQueston].correct) {
    message.innerText = "WRONG, TRY AGAIN !!";
    message.style.color = "#EE522F";
    setTimeout(deleteChecked, 2000);
  } else {
    btn.innerText = `Yes this is Python :)  this is the end `;
    setTimeout(reset, 3000);
  }
});
