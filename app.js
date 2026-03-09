import { loadGrade9 } from "./grades/grade9.js";
import { loadGrade10 } from "./grades/grade10.js";
import { loadGrade11 } from "./grades/grade11.js";
import { auth, signInWithEmailAndPassword, signOut } from "./firebase.js";



const loginDiv = document.getElementById("login");
const dashboardDiv = document.getElementById("dashboard");
const gradeTitle = document.getElementById("gradeTitle");
const contentDiv = document.getElementById("content");
const errorMsg = document.getElementById("error");

const welcomeText = document.getElementById("welcomeText");
const menu = document.getElementById("menu");
const sectionTitle = document.getElementById("sectionTitle");
const contentArea = document.getElementById("contentArea");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.openModal = function (title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = "flex";
};

document.getElementById("loginBtn").addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userEmail = userCredential.user.email;

        loginDiv.style.display = "none";
        dashboardDiv.style.display = "block";

        loadGrade(userEmail);

    } catch (error) {
        errorMsg.textContent = "Invalid credentials";
    }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
    await signOut(auth);
    dashboardDiv.style.display = "none";
    loginDiv.style.display = "block";
});

function loadGrade(email) {

    const className = email.split("@")[0].toUpperCase(); // 9A
    welcomeText.textContent = "Welcome " + className;

    const grade = email.charAt(0);

    menu.innerHTML = "";

    // 🔹 GRADE 9 (dos materias)
    if (grade === "9") {

        createMenuButton("ICT", null, () => {
            renderUnits([
                { name: "Unit 1", content: "ICT - Unit 1 Content" },
                { name: "Unit 2", content: "ICT - Unit 2 Content" }
            ]);
        });

        createMenuButton("Technology", null, () => {
            renderUnits([
                { name: "Unit 1", content: "Technology - Unit 1 Content" },
                { name: "Unit 2", content: "Technology - Unit 2 Content" }
            ]);
        });

    }

    // 🔹 GRADES 10 & 11
    else {

        createMenuSection("Units", [
            { name: "Unit 1", content: "Unit 1 Content" },
            { name: "Unit 2", content: "Unit 2 Content" }
        ]);

    }

    createMenuButton("Resources", "General Resources");
    createMenuButton("Assessments", "General Assessments");
}

function createMenuSection(title, units) {

    const sectionTitleEl = document.createElement("p");
    sectionTitleEl.textContent = title;
    sectionTitleEl.style.marginTop = "15px";
    sectionTitleEl.style.fontWeight = "bold";
    menu.appendChild(sectionTitleEl);

    units.forEach(unit => {
        createMenuButton(unit.name, unit.content);
    });
}

function createMenuButton(name, content = null, customAction = null) {

  const button = document.createElement("button");
  button.textContent = name;

  button.addEventListener("click", () => {

    // 🔹 Quitar active de todos
    document.querySelectorAll(".sidebar nav button")
      .forEach(btn => btn.classList.remove("active"));

    // 🔹 Activar el actual
    button.classList.add("active");

    if (customAction) {
      customAction();
    } 
    else {
      sectionTitle.textContent = name;
      contentArea.innerHTML = `<p>${content}</p>`;
    }

  });

  menu.appendChild(button);
}

function renderUnits(units) {

  // Eliminar unidades anteriores
  document.querySelectorAll(".unit-button")
    .forEach(btn => btn.remove());

  units.forEach(unit => {

    const button = document.createElement("button");
    button.textContent = unit.name;
    button.classList.add("unit-button");

    button.addEventListener("click", () => {

      // 🔹 Quitar active de todos
      document.querySelectorAll(".sidebar nav button")
        .forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      sectionTitle.textContent = unit.name;
      contentArea.innerHTML = `<p>${unit.content}</p>`;
    });

    menu.appendChild(button);
  });
}

document.querySelectorAll(".section").forEach(sec => {
  sec.classList.remove("active");
});

document.getElementById("units").classList.add("active");