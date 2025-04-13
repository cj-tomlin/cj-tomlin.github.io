let showInfo = false;
let currentProject = null;

function getProjects() {
    const projectsDataDiv = document.getElementById("projects-data");
    if (!projectsDataDiv) {
        console.error("No projects-data div found.");
        return [];
    }
    try {
        const data = projectsDataDiv.getAttribute("data-projects");
        if (!data) return [];
        return JSON.parse(data.replace(/"/g, '"'));
    } catch (e) {
        console.error("Failed to parse projects data:", e);
        return [];
    }
}

function renderProjectDetails(project, showInfoMode) {
    const details = document.getElementById("project-details");
    if (!details) {
        console.error("No project-details element found.");
        return;
    }
    if (!project) {
        details.innerHTML =
            '<p id="project-details-placeholder">Select a project to see details here.</p>';
        return;
    }
    if (showInfoMode) {
        details.innerHTML = `
      <h3 class="text-md font-bold mb-2">${project.title}</h3>
      <p class="mb-2">${project.description || ""}</p>
    `;
    } else {
        details.innerHTML = `${Array.isArray(project.images) && project.images.length
            ? project.images
                .map(
                    (img) =>
                        `<img src="${img}" alt="${project.title}" class="mb-2 w-full rounded border" />`
                )
                .join("")
            : ""
            }`;
    }
    // Update GitHub link in header if present
    const githubLink = document.getElementById("github-link");
    if (githubLink && project.github) {
        githubLink.setAttribute("href", project.github);
    }
}

function showProjectDetails(project) {
    currentProject = project;
    showInfo = false;
    renderProjectDetails(project, showInfo);
}

function setActiveProject(projectId) {
    const projectDivs = document.querySelectorAll(
        "#project-list > div[data-project-id]"
    );
    projectDivs.forEach((div) => {
        const titleSpan = div.querySelector("span");
        if (titleSpan) {
            if (div.getAttribute("data-project-id") === String(projectId)) {
                titleSpan.classList.add("text-[var(--primary)]", "ml-4");
            } else {
                titleSpan.classList.remove("text-[var(--primary)]", "ml-4");
            }
        }
    });
}

function setup() {
    const projects = getProjects();
    const projectDivs = document.querySelectorAll(
        "#project-list > div[data-project-id]"
    );
    if (!projectDivs.length) {
        console.warn("No desktop project items found.");
    }

    // Attach click listeners
    projectDivs.forEach((div) => {
        div.addEventListener("click", () => {
            const projectId = div.getAttribute("data-project-id");
            const project = projects.find((p) => String(p.id) === String(projectId));
            showProjectDetails(project || null);
            setActiveProject(projectId || "");
        });
    });

    // Show the first project by default if available
    if (projects.length > 0 && projectDivs.length > 0) {
        showProjectDetails(projects[0]);
        const firstId = projectDivs[0].getAttribute("data-project-id");
        setActiveProject(firstId || "");
    }

    // Info link toggle
    const infoToggle = document.getElementById("info-toggle");
    if (infoToggle) {
        const infoSpan = infoToggle.querySelector("span");
        infoToggle.addEventListener("click", (e) => {
            e.preventDefault();
            if (!currentProject) return;
            showInfo = !showInfo;
            renderProjectDetails(currentProject, showInfo);
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
} else {
    setup();
}