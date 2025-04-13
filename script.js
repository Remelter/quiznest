function setupQuestion(qNum) {
  const wrongBtns = document.querySelectorAll(`.q${qNum}w`);
  const correctBtn = document.querySelector(`.q${qNum}a`);

  wrongBtns.forEach((btn) => {
    btn.onclick = () => {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
      wrongBtns.forEach((b) => (b.disabled = true));
      correctBtn.disabled = true;
      correctBtn.style.backgroundColor = "green";
      correctBtn.style.color = "white";
    };
  });

  correctBtn.onclick = () => {
    correctBtn.style.backgroundColor = "green";
    correctBtn.style.color = "white";
    wrongBtns.forEach((b) => (b.disabled = true));
    correctBtn.disabled = true;
  };
}

// Setup all 30 questions 🧠🔥
for (let q = 1; q <= 30; q++) {
  setupQuestion(q);
}
