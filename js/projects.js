// Projects data
const projects = {
    "pickle": {
        id: "pickle",
        title: "Pickle",
        category: "Canvas Game",
        url: "https://pickle.jh.codes",
        github: "https://github.com/joegorithm/pickle",
        started: "2023-03-15",
        completed: "2023-04-24",
        logo: "/logos/pickle-logo.png",
        summary: "A word game based on the concept of Wordle but only including food-themed words.",
        description: "TBD",
        tools: "javascript, processingjs"
    },
    "portfolio": {
        id: "portfolio",
        title: "Portfolio",
        category: "Website",
        url: "/",
        github: "https://github.com/joegorithm/portfolio",
        started: "2024-12-15",
        completed: "",
        logo: "/logos/portfolio-logo.svg",
        summary: "My personal portfolio website showcasing my projects and skills.",
        description: "TBD",
        tools: "html, css, javascript"
    },
    "clock": {
        id: "clock",
        title: "Clock",
        category: "Web App",
        url: "https://clock.jh.codes",
        github: "https://github.com/joegorithm/clock",
        started: "2024-10-11",
        completed: "",
        logo: "/logos/clock-logo.svg",
        summary: "A simple analog clock web application that displays the current time.",
        description: "TBD",
        tools: "html, css, javascript"
    },
    "matricat": {
        id: "matricat",
        title: "Matricat",
        category: "Web App",
        url: "https://matricat.com",
        github: "https://github.com/joegorithm/matrix",
        started: "2025-04-16",
        completed: "",
        logo: "/logos/matricat-logo.png",
        summary: "A dynamic user-friendly web application for performing matrix calculations.",
        description: "TBD",
        tools: "html, css, javascript, react"
    },
    "age-in-days-calculator": {
        id: "age-in-days-calculator",
        title: "Age in Days Calculator",
        category: "Web App",
        url: "https://joegorithm.github.io/age-in-days-calculator",
        github: "https://github.com/joegorithm/age-in-days-calculator",
        started: "2024-10-25",
        completed: "2024-10-26",
        logo: "/logos/age-in-days-logo.svg",
        summary: "A simple web application that calculates your age in days.",
        description: "TBD",
        tools: "html, css, javascript"
    },
    "timer": {
        id: "timer",
        title: "Timer",
        category: "Web App",
        url: "https://joegorithm.github.io/timer",
        github: "https://github.com/joegorithm/timer",
        started: "2023-09-22",
        completed: "",
        logo: "/logos/timer-logo.svg",
        summary: "A simple countdown timer web application.",
        description: "TBD",
        tools: "html, css, javascript"
    },
    "castleguessr": {
        id: "castleguessr",
        title: "CastleGuessr",
        category: "Canvas Game",
        url: "https://www.khanacademy.org/computer-programming/castleguessr/5190186573283328",
        github: "#",
        started: "2023-01-20",
        completed: "2023-02-24",
        logo: "/logos/castleguessr-logo.png",
        summary: "A game where you guess the locations of medieval castles in the British Isles.",
        description: "",
        tools: "javascript, processingjs"
    }
};

// Render projects as HTML tiles
function renderProjects() {
    document.querySelectorAll(".project-tiles").forEach((container) => {
        const projectTiles = container.dataset.projects.split(", ");
        let html = "";
        projectTiles.forEach((tile) => {
            html += `
                <div class="project-tile ui-element" data-hover-effect>
                    <div class="glow"></div>
                    <div class="project-main">
                        <div class="project-header">
                            <a href="/projects/${projects[tile].id}" class="project-logo-link">
                                <img src="${projects[tile].logo}" class="project-logo" alt="${projects[tile].title} logo">
                            </a>
                            <div class="project-header-information">
                                <a href="/projects/${projects[tile].id}" class="project-title">${projects[tile].title}</a>
                                <p class="project-type">${projects[tile].category}</p>
                                <div class="time-ago-status tooltip-element">
                                    <div class="time-ago-icon"></div>
                                    <span class="time-ago-date" data-started="${projects[tile].started}" data-completed="${projects[tile].completed}"></span>
                                    <span class="tooltip"></span>
                                </div>
                            </div>
                        </div>
                        <p class="project-summary">${projects[tile].summary}</p>
                        <div class="project-options">
                            <a href="/projects/${projects[tile].id}" class="project-options-button tooltip-element">
                                <div class="project-options-icon">
                                    <svg width="1.4rem" height="1.4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                                </div>
                                <span class="tooltip tooltip-button">Details</span>
                            </a>
                            <a href="${projects[tile].github}" target="_blank" class="project-options-button tooltip-element">
                                <div class="project-options-icon">
                                    <svg width="1.4rem" height="1.4rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </div>
                                <span class="tooltip tooltip-button">GitHub Repository</span>
                            </a>
                            <a href="${projects[tile].url}" target="_blank" class="project-options-button tooltip-element">
                                <div class="project-options-icon">
                                    <svg width="1.4rem" height="1.4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                                </div>
                                <span class="tooltip tooltip-button">Live Site</span>
                            </a>
                        </div>
                    </div>
                    <div class="tool-tags project-technologies" data-technologies="${projects[tile].tools}"></div>
                </div>
            `;
        });
        container.innerHTML = html;
    });

    document.querySelectorAll(".form-input-entry-project").forEach((input) => {
        const projectLabels = input.dataset.projects.split(", ");
        
    });
}

renderProjects(); // Run on initial load