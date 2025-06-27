const questions = [
  {
    q: "Which team won the highest number of Cricket World Cups?",
    op: ["India", "Australia", "England", "New Zealand"],
    ans: "Australia"
  },
  {
    q: "Which team won the last T20 World Cup 2024?",
    op: ["India", "South Africa", "Australia", "England"],
    ans: "India"
  },
  {
    q: "Who is called the Gentleman of Cricket?",
    op: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Kane Williamson"],
    ans: "Kane Williamson"
  },
  {
    q:"Who has the most internation odi Centuries?",
    op:["Virat Kohli","Sachin tendulkar","Joe Root","Rohit Sharma"],
    ans:"Virat Kohli"
  },
  {
    q:"Who has the highest Individual score in Odi?",
    op:["viv Richards","Bumrah","Virat Kohli","Rohit Sharma"],
    ans:"Rohit Sharma"
  },
  {
    q:"Which player has The most wicket in Tests?",
    op:["Muralidaran","Dale styen","Starc","Cummins"],
    ans:"Muralidaran"
  }
];

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-button");
const resultBox = document.getElementById("result");

let currentQ = 0;
let score = 0;

function loadQuestion() {
  resetState();
  const current = questions[currentQ];
  questionEl.innerText = current.q;
  optionBtns.forEach((btn, idx) => {
    btn.innerText = current.op[idx];
    btn.onclick = () => selectAnswer(btn, current.ans);
  });
}

function resetState() {
  optionBtns.forEach(btn => {
    btn.disabled = false;
    btn.style.backgroundColor = "#333";
  });
  nextBtn.style.display = "none";
}

function selectAnswer(selectedBtn, correctAns) {
  const selectedAns = selectedBtn.innerText;
  if (selectedAns === correctAns) {
    selectedBtn.style.backgroundColor = "green";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "red";
    optionBtns.forEach(btn => {
      if (btn.innerText === correctAns) {
        btn.style.backgroundColor = "green";
      }
    });
  }
  optionBtns.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-flex";
}

nextBtn.addEventListener("click", () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").style.display = "none";
  nextBtn.style.display = "none";
  resultBox.classList.remove("hide");
  resultBox.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
}

loadQuestion(); 
