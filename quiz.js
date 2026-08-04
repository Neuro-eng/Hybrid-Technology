/* Reusable interactive quiz engine.
   Usage: call renderQuiz("container-id", questionsArray) where each
   question is { q, options: [..4], answer: "A"/"B"/"C"/"D", explain } */
(function () {
  function letterFromIndex(i) { return String.fromCharCode(65 + i); }

  window.renderQuiz = function (containerId, questions) {
    var root = document.getElementById(containerId);
    if (!root) return;

    var state = questions.map(function () { return { picked: null, correct: null }; });

    function render() {
      root.innerHTML = "";

      var progress = document.createElement("div");
      progress.className = "quiz-progress";
      var answeredCount = state.filter(function (s) { return s.picked !== null; }).length;
      progress.textContent = "Answered " + answeredCount + " / " + questions.length;
      root.appendChild(progress);

      questions.forEach(function (item, qi) {
        var card = document.createElement("div");
        card.className = "quiz-q";

        var qTitle = document.createElement("p");
        qTitle.className = "quiz-q-title";
        qTitle.innerHTML = "<strong>" + (qi + 1) + ". " + item.q + "</strong>";
        card.appendChild(qTitle);

        var optWrap = document.createElement("div");
        optWrap.className = "quiz-options";

        item.options.forEach(function (optText, oi) {
          var letter = letterFromIndex(oi);
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "quiz-option";
          btn.innerHTML = "<span class='quiz-letter'>" + letter + "</span> " + optText;

          if (state[qi].picked !== null) {
            btn.disabled = true;
            if (letter === item.answer) btn.classList.add("quiz-correct");
            if (letter === state[qi].picked && letter !== item.answer) btn.classList.add("quiz-incorrect");
          }

          btn.addEventListener("click", function () {
            if (state[qi].picked !== null) return;
            state[qi].picked = letter;
            state[qi].correct = (letter === item.answer);
            render();
          });

          optWrap.appendChild(btn);
        });

        card.appendChild(optWrap);

        if (state[qi].picked !== null) {
          var fb = document.createElement("p");
          fb.className = "quiz-feedback " + (state[qi].correct ? "quiz-fb-correct" : "quiz-fb-incorrect");
          fb.innerHTML = (state[qi].correct ? "✅ Correct. " : "❌ Not quite. Correct answer: " + item.answer + ". ") +
                          "<em>" + item.explain + "</em>";
          card.appendChild(fb);
        }

        root.appendChild(card);
      });

      if (answeredCount === questions.length) {
        var correctCount = state.filter(function (s) { return s.correct; }).length;
        var pct = Math.round((correctCount / questions.length) * 100);

        var result = document.createElement("div");
        result.className = "quiz-result";
        result.innerHTML =
          "<h3>Your Score: " + correctCount + " / " + questions.length + " (" + pct + "%)</h3>" +
          "<p>" + (pct >= 72
            ? "Nice work — that's above the typical 70–72% passing bar for this exam. Keep this level up on exam day."
            : "Below the typical ~70–72% passing bar. Review the explanations above, especially any domains where you missed multiple questions.") +
          "</p>";

        var retryBtn = document.createElement("button");
        retryBtn.type = "button";
        retryBtn.className = "btn btn-secondary quiz-retry";
        retryBtn.textContent = "Retake This Quiz";
        retryBtn.addEventListener("click", function () {
          state = questions.map(function () { return { picked: null, correct: null }; });
          render();
          root.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        result.appendChild(document.createElement("br"));
        result.appendChild(retryBtn);

        root.appendChild(result);
      }
    }

    render();
  };
})();
