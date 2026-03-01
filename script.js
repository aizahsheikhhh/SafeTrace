function calculateRisk() {
  let score = 0;
  const boxes = document.querySelectorAll("input[type=checkbox]");

  boxes.forEach(box => {
    if (box.checked) {
      score += parseInt(box.value);
    }
  });

  let level;
  if (score < 30) level = "Low Risk 💚";
  else if (score < 60) level = "Medium Risk 🧡";
  else level = "High Risk ❤️";

  document.getElementById("riskBar").style.width = score + "%";
  document.getElementById("result").innerText =
    "Risk Score: " + score + " — " + level;
}

function analyzeURL() {
  const url = document.getElementById("urlInput").value;
  let risk = 0;
  let message = "";

  if (!url.startsWith("https")) {
    risk += 30;
    message += "Not secure (no HTTPS). ";
  }

  if (url.includes("free") || url.includes("urgent") || url.includes("salary")) {
    risk += 20;
    message += "Contains suspicious keywords. ";
  }

  if (risk === 0) {
    message = "No major risk detected.";
  }

  document.getElementById("urlResult").innerText =
    "URL Risk Score: " + risk + ". " + message;
}
// Existing code (dashboard risk analyzer, URL scanner)
function calculateRisk() { ... }
function analyzeURL() { ... }

// ADD THIS AT THE BOTTOM
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
