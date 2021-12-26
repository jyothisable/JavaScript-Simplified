const form = document.getElementById("quiz-form");
const questionItems = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

const handleSubmit = (e) => {
  e.preventDefault();
  correctCnt = 0;
  questionItems.forEach((question) => {
    answerOptions = Array.from(question.querySelectorAll(".answer"));
    console.log(answerOptions);
    correctAns = answerOptions.filter((option) => {
      return option.value === "true" && option.checked;
    });
    if (correctAns.length) {
      question.classList.add("correct");
      question.classList.remove("incorrect");
      correctCnt++;
    }
    else {
      question.classList.add("incorrect");
    }
  });
  if (correctCnt === questionItems.length) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 1000);
  }
};

form.onsubmit = handleSubmit;
