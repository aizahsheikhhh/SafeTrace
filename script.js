function checkQuiz() {
  const options = document.getElementsByName("quiz");
  let correct = false;
  options.forEach(opt => {
    if (opt.checked && opt.value === "correct") correct = true;
  });

  const result = document.getElementById("quizResult");
  if (correct) result.innerText = "🎉 Correct! You're digitally safe.";
  else result.innerText = "⚠️ Oops! Review the safety tips above.";
}
