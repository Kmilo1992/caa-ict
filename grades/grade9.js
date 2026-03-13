export function loadGrade9(contentDiv) {
  // MENU INICIAL (Materias)
  contentDiv.innerHTML = `

    <div class="subject-switch">

      <div class="switch-selector"></div>

      <button class="switch-btn active" data-subject="ict">
        ICT
      </button>

      <button class="switch-btn" data-subject="technology">
        Technology
      </button>

    </div>

    <div id="subjectContent"></div>

`;

  const buttons = contentDiv.querySelectorAll(".switch-btn");
  const switchBox = contentDiv.querySelector(".subject-switch");
  const subjectContent = contentDiv.querySelector("#subjectContent");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      const subject = button.dataset.subject;

      if (subject === "technology") {
        switchBox.classList.add("tech-active");
      } else {
        switchBox.classList.remove("tech-active");
      }

      loadSubjectMenu(subjectContent, subject);
    });
  });

  // cargar ICT por defecto
  loadSubjectMenu(subjectContent, "ict");
}

function loadSubjectMenu(contentDiv, subject) {
  const subjectName = subject === "ict" ? "ICT" : "Technology";

  contentDiv.innerHTML = `

    <div class="card">
      <h3>${subjectName} Resources</h3>
      <button class="menu-btn" data-type="resources">Open</button>
    </div>

    <div class="card">
      <h3>${subjectName} Assessments</h3>
      <button class="menu-btn" data-type="assessments">Open</button>
    </div>

    <div class="card">
      <h3>Unit 1</h3>
      <button class="menu-btn" data-type="unit" data-unit="1">Enter</button>
    </div>

    <div class="card">
      <h3>Unit 2</h3>
      <button class="menu-btn" data-type="unit" data-unit="2">Enter</button>
    </div>

    <div class="card">
      <button class="back-btn">⬅ Back</button>
    </div>

  `;

  const buttons = contentDiv.querySelectorAll(".menu-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");

      if (type === "resources") {
        openModal(
          subjectName + " Resources",
          `
          <ul>
            <li>📄 <a href="#" target="_blank">Lesson Slides</a></li>
            <li>🎥 <a href="#" target="_blank">Explainer Videos</a></li>
            <li>💻 <a href="#" target="_blank">Online Practice</a></li>
          </ul>
          `,
        );
      }

      if (type === "assessments") {
        openModal(
          subjectName + " Assessments",
          `
          <ul>
            <li>📝 <a href="#" target="_blank">Quiz</a></li>
            <li>📊 <a href="#" target="_blank">Practice Test</a></li>
          </ul>
          `,
        );
      }

      if (type === "unit") {
        const unit = button.getAttribute("data-unit");

        if (unit === "1") {
          openModal(
            subjectName + " - Unit 1",
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
            `,
          );
        }

        if (unit === "2") {
          openModal(
            subjectName + " - Unit 2",
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
            `,
          );
        }
      }
    });
  });

  const backButton = contentDiv.querySelector(".back-btn");

  backButton.addEventListener("click", () => {
    loadGrade9(contentDiv);
  });
}
