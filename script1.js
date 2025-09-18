// Sidebar navigation
const navLinks = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(link.dataset.section).classList.remove("hidden");
  });
});

// Projects
const modal = document.getElementById("modal");
const addProjectBtn = document.getElementById("addProjectBtn");
const closeModalBtn = document.getElementById("closeModal");
const projectForm = document.getElementById("projectForm");
const projectsTable = document.querySelector("#projectsTable tbody");

// Open modal
if (addProjectBtn) addProjectBtn.addEventListener("click", () => modal.classList.remove("hidden"));
// Close modal
if (closeModalBtn) closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));

// Handle project submit
if (projectForm) {
  projectForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = projectForm.title.value;
    const description = projectForm.description.value;
    const tech = projectForm.tech.value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${title}</td>
      <td>${description}</td>
      <td>${tech}</td>
      <td class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    `;
    // Delete project
    row.querySelector(".delete").addEventListener("click", () => row.remove());
    // Edit project
    row.querySelector(".edit").addEventListener("click", () => {
      projectForm.title.value = title;
      projectForm.description.value = description;
      projectForm.tech.value = tech;
      modal.classList.remove("hidden");
      row.remove();
    });
    projectsTable.appendChild(row);

    projectForm.reset();
    modal.classList.add("hidden");
  });
}

// Media Upload
const mediaUpload = document.getElementById("mediaUpload");
const mediaGrid = document.getElementById("mediaGrid");

if (mediaUpload) {
  mediaUpload.addEventListener("change", e => {
    Array.from(e.target.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.createElement("img");
        img.src = reader.result;
        mediaGrid.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
}

// Settings
const settingsForm = document.getElementById("settingsForm");
if (settingsForm) {
  settingsForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Settings saved!");
  });
}
