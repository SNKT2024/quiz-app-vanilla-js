// DOM

const startBtn = document.querySelector(".topic-btn");

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
  const topic_no = document.querySelector("#topic-select").value;
  const topic = questions[topic_no];
  const question_no = 0;
  //   Topic Name
  document.querySelector(".quiz-topic").textContent = topic.topic.toUpperCase();

  //   Question No
  document.querySelector(".current-question").textContent =
    topic.questions[question_no].id;

  // Question
  document.querySelector(".question-text").textContent =
    topic.questions[question_no].question;

  // Options

  const options = topic.questions[question_no].options;

  const optionHTML = options
    .map((option) => {
      return `<li>
    <button class="option">${option}</button>
  </li>`;
    })
    .join("");
  console.log(optionHTML);
  document.querySelector(".options-list").innerHTML = optionHTML;
};

// Event Listeners
startBtn.addEventListener("click", displayQuiz);

console.log(questions[0]);
