// DOM

const startBtn = document.querySelector(".topic-btn");
const optionsList = document.querySelector(".options-list");
const nextBtn = document.querySelector(".next-btn");
const score = document.querySelector(".score");
let currentTopic = null;
let currentQuestionIndex = 0;
let currentScore = 0;
const questions = [
  {
    topic: "html",
    total: 5,
    questions: [
      {
        id: 1,
        question: "Long form of HTML",
        options: [
          "Hyper Text Markup Language",
          "High Transfer Machine Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Tool Multi Language",
        ],
        answer: 0,
      },
      {
        id: 2,
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: 0,
      },
      {
        id: 3,
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<heading>"],
        answer: 1,
      },
      {
        id: 4,
        question: "Which attribute is used to add an image source?",
        options: ["href", "src", "alt", "link"],
        answer: 1,
      },
      {
        id: 5,
        question: "Which tag is used to insert a line break?",
        options: ["<lb>", "<br>", "<break>", "<newline>"],
        answer: 1,
      },
    ],
  },
  {
    topic: "css",
    total: 5,
    questions: [
      {
        id: 1,
        question: "Long form of CSS",
        options: [
          "Creative Style System",
          "Cascading Style Sheets",
          "Colorful Style Sheets",
          "Computer Styling Syntax",
        ],
        answer: 1,
      },
      {
        id: 2,
        question: "Which property changes text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        answer: 2,
      },
      {
        id: 3,
        question: "Which property changes background color?",
        options: [
          "color-background",
          "bgcolor",
          "background-style",
          "background-color",
        ],
        answer: 3,
      },
      {
        id: 4,
        question: "Which property changes font size?",
        options: ["font-style", "font-size", "size", "text-size"],
        answer: 1,
      },
      {
        id: 5,
        question:
          "Which value is used for relative units of measurement in fonts?",
        options: ["px", "em", "cm", "%"],
        answer: 1,
      },
    ],
  },
  {
    topic: "javascript",
    total: 5,
    questions: [
      {
        id: 1,
        question: "JavaScript is a ____ side scripting language.",
        options: ["Server", "Client", "Both", "None"],
        answer: 1,
      },
      {
        id: 2,
        question: "Which keyword declares a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: 3,
      },
      {
        id: 3,
        question: "Which symbol is used for comments in JavaScript?",
        options: ["#", "//", "/* */", "<!-- -->"],
        answer: 1,
      },
      {
        id: 4,
        question: "Which function displays text in an alert box?",
        options: ["prompt()", "alert()", "confirm()", "msg()"],
        answer: 1,
      },
      {
        id: 5,
        question: "Which method is used to write HTML output?",
        options: ["console.log()", "document.write()", "alert()", "innerHTML"],
        answer: 1,
      },
    ],
  },
];

const displayQuiz = function () {
  const topicIndex = document.querySelector("#topic-select").value;
  currentTopic = questions[topicIndex];
  currentQuestionIndex = 0;
  displayQuestion();
  document.querySelector(".quiz-score").classList.remove("hidden");
};

const displayQuestion = function () {
  nextBtn.classList.add("hidden");
  const questionData = currentTopic.questions[currentQuestionIndex];
  //   Topic Name
  document.querySelector(".quiz-topic").textContent =
    currentTopic.topic.toUpperCase();
  //   Question No
  document.querySelector(".current-question").textContent = questionData.id;
  //  Question
  document.querySelector(".question-text").textContent = questionData.question;
  //  Options
  const optionHTML = questionData.options
    .map((option, index) => {
      const escapedOption = option.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<li class="choice">
    <button class="option" data-index="${index}">${escapedOption}</button>
  </li>`;
    })
    .join("");
  optionsList.innerHTML = optionHTML;

  const allOptions = optionsList.querySelectorAll(".option");
  allOptions.forEach((option) => {
    option.disabled = false;
    option.classList.remove("correct", "incorrect");
  });
};

const checkAnswer = function (e) {
  const clickedButton = e.target.closest(".option");
  if (!clickedButton) return;

  const selectedAnswerIndex = parseInt(clickedButton.dataset.index, 10);
  const correctAnswerIndex =
    currentTopic.questions[currentQuestionIndex].answer;

  if (selectedAnswerIndex === correctAnswerIndex) {
    console.log("Correct!");
    currentScore += 2;
    score.textContent = currentScore;
    clickedButton.classList.add("correct");
  } else {
    console.log("Incorrect!");
    clickedButton.classList.add("incorrect");

    const correctButton = optionsList.querySelector(
      `[data-index="${correctAnswerIndex}"]`
    );
    if (correctButton) {
      correctButton.classList.add("correct");
    }
  }
  const allOptions = optionsList.querySelectorAll(".option");
  allOptions.forEach((option) => (option.disabled = true));

  // Show the next button so the user can proceed
  nextBtn.classList.remove("hidden");
};

const nextQuestion = function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentTopic.questions.length) {
    displayQuestion();
  } else {
    alert(
      "Quiz Finished! You have completed all the questions for this topic."
    );

    nextBtn.classList.add("hidden");
  }
};
// Event Listeners
startBtn.addEventListener("click", displayQuiz);
nextBtn.addEventListener("click", nextQuestion);
optionsList.addEventListener("click", checkAnswer);
