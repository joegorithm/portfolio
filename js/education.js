// Education data
const education = {
    "oit": {
        isDegree: true,
        id: "oit",
        title: "Oregon Institute of Technology",
        color: "#ffd351",
        url: "https://www.oit.edu",
        started: "2026-09-28",
        graduate: "2028-06-16",
        logo: "/logos/oregon-tech-logo.png",
        degrees: [
            {
                degree: "Software Engineering Technology",
                url: "https://www.oit.edu/academics/degrees/software-engineering-technology",
                type: "Bachelor of Science",
                coursework: []
            },
            {
                degree: "Applied Mathematics",
                url: "https://www.oit.edu/academics/degrees/applied-mathematics",
                type: "Bachelor of Science",
                coursework: []
            }
        ]
    },
    "rcc": {
        isDegree: true,
        id: "rcc",
        title: "Rogue Community College",
        color: "#006eb6",
        url: "https://www.roguecc.edu",
        started: "2024-09-30",
        graduate: "2026-06-13",
        logo: "/logos/rogue-community-college-logo.png",
        degrees: [
            {
                degree: "Software Engineering Technology",
                url: "https://catalog.roguecc.edu/preview_program.php?catoid=17&poid=2316",
                type: "Associate of Science",
                coursework: [
                    {class: "Introduction to Hardware and Software",
                        tools: "bash, powershell"},
                    {class: "Computer Science I",
                        tools: "cpp"},
                    {class: "Computer Science II",
                        tools: "cpp"},
                    {class: "Object-Oriented Programming",
                        tools: "cpp"},
                    {class: "Linear Algebra",
                        tools: ""}
                ]
            }
        ]
    },
    "codepath": {
        isDegree: false,
        id: "codepath",
        title: "CodePath",
        color: "#283e46",
        url: "https://www.codepath.org/",
        started: "2025-09-17",
        graduate: "",
        logo: "/logos/codepath-logo.png",
        degrees: [
            {
                degree: "Intermediate Web Development",
                url: "https://www.codepath.org/courses/web-development",
                type: "Course",
                coursework: [
                    {class: "React", tools: "react, vite"},
                    {class: "APIs"},
                    {class: "Conditional Rendering", tools: "javascript"},
                    {class: "React Router", tools: "react"},
                    {class: "Databases", tools: "supabase"},
                    {class: "UX"}
                ]
            },
            {
                degree: "Advanced Web Development",
                url: "https://www.codepath.org/courses/web-development",
                type: "Course",
                coursework: [
                ]
            }
        ]
    }
}

// Render education as HTML tiles
function renderEducation() {
    document.querySelectorAll(".education-tiles").forEach((container) => {
        const raw = container.dataset.education || "";
        let keys = raw.split(",").map(s => s.trim()).filter(Boolean);
        if (keys.length === 0) {
            // Fallback: render all education entries
            keys = Object.keys(education);
        }

        let html = "";
        keys.forEach((key) => {
            const edu = education[key];
            if (!edu) return;
            html += `
                <div class="education-tile ui-element">
                    <a class="education-banner" style="background-color: ${edu.color}" href="${edu.url}" target="_blank">
                        <img src="${edu.logo}" alt="${edu.title} logo" class="education-logo">
                    </a>
                    <div class="education-information">
                        <a class="education-institution-link" href="${edu.url}" target="_blank">
                            <h2 class="education-institution">${edu.title}</h2>
                        </a>
                        <div class="education-time-ago">
                            <div class="time-ago-status tooltip-element">
                                <span class="time-ago-icon"></span>
                                <span class="time-ago-date" data-started="${edu.started}" data-graduate="${edu.graduate}"></span>
                                <span class="tooltip"></span>
                            </div>
                        </div>
                        <div class="education-degrees">
                            ${edu.degrees.map(degree => `
                            <div class="education-degree">
                                <a class="education-major-link" href="${degree.url}" target="_blank">
                                    <h3 class="education-major">${degree.degree}</h3>
                                </a>
                                <p class="education-type">${degree.type}</p>
                                ${degree.coursework && degree.coursework.length ? `
                                <div class="education-relevant-coursework">
                                    <p>${edu.isDegree ? "Relevant Coursework:" : "Focuses:"}</p>
                                    <ul class="education-relevant-coursework-list">
                                        ${degree.coursework.map(cw => `
                                            <li>
                                                ${cw.class}
                                                <span class="tool-tags education-relevant-coursework-tools" data-technologies="${cw.tools}"></span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>` : ''}
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    });
    if (typeof renderTechnologies === "function") renderTechnologies();
    if (typeof updateTimeAgo === "function") updateTimeAgo();
}

renderEducation();