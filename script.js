const questions = [
    {
      question: "Quantas sagas têm?",
      answers: ["4", "9", "8", "10"],
      correct: "9"
    },
    {
      question: "Qual saga tem a Scylla?",
      answers: ["Thunder", "Vengeance", "Circe", "Wisdom"],
      correct: "Thunder"
    },
    {
      question: "Qual o nome da amada de Odysseu?",
      answers: ["Anticlea", "Telemachus", "Antinous", "Penélope"],
      correct: "Penélope"
    },
    {
      question: "Quem era o mentor/mentora de Odysseu?",
      answers: ["Athena", "Zeus", "Poseidon", "Circe"],
      correct: "Athena"
    },
    {
      question: "O que o ciclope era?",
      answers: ["Pai de Poseidon", "Neto de Poseidon", "Filho de Poseidon", "Irmão de Poseidon"],
      correct: "Filho de Poseidon"
    }
  ];
  
  let currentQuestion = 0;
  
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const nextBtn = document.getElementById('next-btn');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';
  
    q.answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(answer);
      answersEl.appendChild(btn);
    });
  }
  
  function checkAnswer(answer) {
    const correct = questions[currentQuestion].correct;
    if (answer === correct) {
      alert("✅ Resposta correta!");
    } else {
      alert(`❌ Errado! A resposta certa é: ${correct}`);
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "🎉 Fim do quiz!";
      answersEl.innerHTML = '';
      nextBtn.style.display = "none";
    }
  }
  
  nextBtn.onclick = showQuestion;
  
  showQuestion();
  