export function loadGrade9(contentDiv) {

  contentDiv.innerHTML = `
    <div class="card">
      <h3>Unit 1</h3>
      <p>Computational Thinking</p>
      <button class="unit-btn" data-unit="1">Enter</button>
    </div>

    <div class="card">
      <h3>Unit 2</h3>
      <p>Python Basics</p>
      <button class="unit-btn" data-unit="2">Enter</button>
    </div>
  `;

  const buttons = contentDiv.querySelectorAll(".unit-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const unit = button.getAttribute("data-unit");

      if (unit === "1") {
        openModal(
          "Unit 1 - Computational Thinking",
          `
          <h3>Resources</h3>
          <ul>
            <li>📄 <a href="#" target="_blank">Lesson Slides</a></li>
            <li>🎥 <a href="#" target="_blank">Explainer Video</a></li>
          </ul>

          <h3>Practice</h3>
          <ul>
            <li>💻 <a href="#" target="_blank">Coding Challenge</a></li>
          </ul>

          <h3>Assessment</h3>
          <ul>
            <li>📝 <a href="#" target="_blank">Quiz</a></li>
          </ul>
          `
        );
      }

      if (unit === "2") {
        openModal(
          "Unit 2 - Python Basics",
          `
          <h3>Resources</h3>
          <ul>
            <li>📄 <a href="#" target="_blank">Variables Guide</a></li>
            <li>🎥 <a href="#" target="_blank">Operators Explained</a></li>
          </ul>

          <h3>Practice</h3>
          <ul>
            <li>💻 <a href="#" target="_blank">Interactive Lab</a></li>
          </ul>

          <h3>Assessment</h3>
          <ul>
            <li>📝 <a href="#" target="_blank">Mini Test</a></li>
          </ul>
          `
        );
      }

    });
  });

}