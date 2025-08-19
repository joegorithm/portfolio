const creatorData = {
    "jonathan-hill": {
        id: "jonathan-hill",
        name: "Jonathan Hill",
        avatar: "/media/jonathan-hill-cropped.png",
        website: "/about"
    }
    // Add more creators as needed
};

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
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/pickle-logo.png",
        summary: "A word game based on the concept of Wordle but only including food-themed words.",
        description: "Description coming soon",
        preview: [
            {image: "/media/pickle-project-preview-1.png", label: "Pickle game"},
            {image: "/media/pickle-project-preview-2.png", label: "Pickle statistics"},
            {image: "/media/pickle-project-preview-3.png", label: "Pickle settings"}
        ],
        tools: "javascript, processingjs",
        awards: [{
            place: "1st Place",
            issuer: "KACP Contest",
            logo: `
                <svg class="project-details-award-issuer-logo" width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="#14BF96" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.724 4.973L13.418.328a3.214 3.214 0 0 0-2.828 0L2.276 4.973A3.05 3.05 0 0 0 .862 7.371v9.256a3.05 3.05 0 0 0 1.414 2.4l8.306 4.645a3.214 3.214 0 0 0 2.828 0l8.314-4.645a3.05 3.05 0 0 0 1.414-2.4V7.373a3.05 3.05 0 0 0-1.414-2.4zM12 4.921a2.571 2.571 0 1 1 .001 5.143A2.571 2.571 0 0 1 12 4.92zm3.094 13.627a9.119 9.119 0 0 1-3.103.549 8.972 8.972 0 0 1-3.076-.55 8.493 8.493 0 0 1-5.486-7.987v-.857c4.646.017 8.074 3.823 8.074 8.51v.198h.926v-.197c0-4.688 3.445-8.51 8.056-8.51.026.29.043.582.086.856a8.502 8.502 0 0 1-5.477 7.988z"/>
                </svg>
                `,
            category: "Advanced Bracket",
            date: "2023-05-09",
            link: "https://www.kachallengecouncil.org/results/44"
        }]
    },
    "portfolio": {
        id: "portfolio",
        title: "Portfolio",
        category: "Website",
        url: "/",
        github: "https://github.com/joegorithm/portfolio",
        started: "2024-12-15",
        completed: "",
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/portfolio-logo.svg",
        summary: "My personal portfolio website showcasing my projects and skills.",
        description: "Description coming soon",
        preview: [
            {image: "/media/portfolio-project-preview-1.png", label: "Overview page"},
            {image: "/media/portfolio-project-preview-2.png", label: "About page"},
            {image: "/media/portfolio-project-preview-3.png", label: "Projects page"},
            {image: "/media/portfolio-project-preview-4.png", label: "Certifications page"},
            {image: "/media/portfolio-project-preview-5.png", label: "Contact page"},
            {image: "/media/portfolio-project-preview-6.png", label: "Search page"}
        ],
        tools: "html, css, javascript"
    },
    "clock": {
        id: "clock",
        title: "Clock",
        category: "Web App",
        url: "https://clock.jh.codes",
        github: "https://github.com/joegorithm/clock",
        started: "2024-10-11",
        completed: "2025-07-16",
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/clock-logo.svg",
        summary: "A simple analog clock with various designs and settings to accommodate user preferences.",
        description: "This is an analog clock web app with various designs and settings to accommodate user preferences. I created this project to practice my CSS and design skills and to satiate my interest in time and how we visualize it. The are various themes available include Light, Dark, Night, and Vintage. The clock has options to toggle the visibility of the second hand and choose between a ticking or sweeping second hand motion.",
        preview: [
            {image: "/media/clock-project-preview-1.png", label: "Light theme"},
            {image: "/media/clock-project-preview-2.png", label: "Dark theme"},
            {image: "/media/clock-project-preview-3.png", label: "Night theme"},
            {image: "/media/clock-project-preview-4.png", label: "Vintage theme"}
        ],
        tools: "html, css, javascript"
    },
    "matricat": {
        id: "matricat",
        title: "Matricat",
        category: "Web App",
        url: "https://matrix.jh.codes",
        github: "https://github.com/joegorithm/matrix",
        started: "2025-04-16",
        completed: "",
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/matricat-logo.png",
        summary: "A dynamic user-friendly web application for performing matrix calculations.",
        description: "Description coming soon",
        preview: [],
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
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/age-in-days-logo.svg",
        summary: "A simple web application that calculates your age in days.",
        description: "Have you ever wondered how many days old you are? You haven't? Well, I have. So that's why I made this. This is a simple web application that accurately calculates your age in days (including leap days) based on your birthdate.",
        preview: [],
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
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/timer-logo.svg",
        summary: "A simple countdown timer web application.",
        description: "Description coming soon",
        preview: [{image: "/media/timer-project-preview-1.png", label: "Timer interface"}],
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
        contributors: [creatorData["jonathan-hill"]],
        logo: "/logos/castleguessr-logo.png",
        summary: "A game where you guess the locations of medieval castles in the British Isles.",
        description: "Description coming soon",
        preview: [],
        tools: "javascript, processingjs",
        awards: [{
            place: "1st Place",
            issuer: "KACP Contest",
            logo: `
                <svg class="project-details-award-issuer-logo" width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="#14BF96" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.724 4.973L13.418.328a3.214 3.214 0 0 0-2.828 0L2.276 4.973A3.05 3.05 0 0 0 .862 7.371v9.256a3.05 3.05 0 0 0 1.414 2.4l8.306 4.645a3.214 3.214 0 0 0 2.828 0l8.314-4.645a3.05 3.05 0 0 0 1.414-2.4V7.373a3.05 3.05 0 0 0-1.414-2.4zM12 4.921a2.571 2.571 0 1 1 .001 5.143A2.571 2.571 0 0 1 12 4.92zm3.094 13.627a9.119 9.119 0 0 1-3.103.549 8.972 8.972 0 0 1-3.076-.55 8.493 8.493 0 0 1-5.486-7.987v-.857c4.646.017 8.074 3.823 8.074 8.51v.198h.926v-.197c0-4.688 3.445-8.51 8.056-8.51.026.29.043.582.086.856a8.502 8.502 0 0 1-5.477 7.988z"/>
                </svg>
                `,
            category: "Advanced Bracket",
            date: "2023-03-09",
            link: "https://www.kachallengecouncil.org/results/43"
        }]
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

    document.querySelectorAll(".project-details-page").forEach((container) => {
        const projectId = container.dataset.project;
        const project = projects[projectId];
        if (project) {
            container.innerHTML = `
                <div class="project-details-header project-details-header-${project.id}">
                    <div class="project-details-header-main">
                        <div class="project-details-high-level project-details-high-level-${project.id}">
                            <a href="${project.url}" class="project-details-logo-link project-details-logo-link-${project.id}">
                                <img src="${project.logo}" class="project-details-logo project-details-logo-${project.id}" alt="${project.title} logo">
                            </a>
                            <div class="project-details-header-information">
                                <h1 class="project-details-title project-details-title-${project.id}">${project.title}</h1>
                                <p class="project-details-category project-details-category-${project.id}">${project.category}</p>
                                ${project.completed ?
                                    `<div class="project-details-status project-details-status-${project.id} project-details-status-completed">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                                    Completed</div>` :
                                    `<div class="project-details-status project-details-status-${project.id} project-details-status-work-in-progress">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                                    Work in Progress</div>`}
                            </div>
                        </div>
                        <div class="project-details-description">
                            <p>${project.description}</p>
                        </div>
                    </div>
                    <div class="project-details-facts">
                        <div class="project-details-fact">
                            <h3>Created By</h3>
                            ${project.contributors.map(contributor => `
                                <a href="${contributor.website}" class="project-details-created-by">
                                    <img class="project-details-created-by-avatar" src="${contributor.avatar}" alt="${contributor.name}" />
                                    <span class="project-details-created-by-name">${contributor.name}</span>
                                </a>
                            `).join('')}
                        </div>
                        <div class="project-details-fact">
                            <h3>Timeline</h3>
                            <div class="time-ago-status project-details-timeline">
                                <div class="time-ago-icon"></div>
                                <span class="time-ago-date project-details-started" data-started="${project.started}"></span>
                            </div>
                            <div class="time-ago-status project-details-timeline">
                                <div class="time-ago-icon"></div>
                                <span class="time-ago-date project-details-completed" data-completed="${project.completed}"></span>
                            </div>
                        </div>
                        <!-- <div class="project-details-fact">
                            <h3>Summary</h3>
                            <p class="project-details-fact-value">${project.summary}</p>
                        </div> -->
                        <div class="project-details-fact">
                            <h3>Tech Stack</h3>
                            <div class="project-details-tech-stack tool-tags" data-technologies="${project.tools}"></div>
                        </div>
                        
                        ${project.awards ? project.awards.map(award => `
                            <div class="project-details-fact">
                                <h3>Awards</h3>
                                <div class="project-details-fact-value project-details-awards">
                                    <span class="project-details-award">
                                        <svg width="4rem" height="4rem" fill="var(--theme-color)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                                            <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/>
                                        </svg>
                                        <div class="project-details-award-information">
                                            <div>
                                                <span class="project-details-award-place">${award.place}</span>
                                                <span class="project-details-award-category">(${award.category})</span>
                                            </div>
                                            <a href="${award.link}" target="_blank" class="project-details-award-issuer">
                                                ${award.logo ? award.logo : ''}
                                                ${award.issuer}
                                            </a>
                                            <div class="time-ago-status tooltip-element">
                                                <div class="time-ago-icon"></div>
                                                <span class="time-ago-date" data-awarded="${award.date}"></span>
                                                <span class="tooltip"></span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        `).join('') : ''}
                            
                        <div class="project-details-options">
                            <a href="${project.url}" target="_blank" class="project-details-options-button project-details-options-button-live-site">
                                <div class="project-details-options-label">Live Site</div>
                                <div class="project-details-options-icon">
                                    <svg width="1.8rem" height="1.8rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                                </div>
                            </a>
                            <a href="${project.github}" target="_blank" class="project-details-options-button project-details-options-button-github">
                                <div class="project-details-options-label">GitHub Repo</div>
                                <div class="project-details-options-icon">
                                    <svg width="2rem" height="2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </div>
                            </a>
                            <a href="/contact?category=feedback&project=${project.id}" class="project-details-options-button project-details-options-button-feedback">
                                <div class="project-details-options-label">Report Bug</div>
                                <div class="project-details-options-icon">
                                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM39 103c9.4-9.4 24.6-9.4 33.9 0l72.4 72.4C161.3 165.7 180 160 200 160l112 0c20 0 38.7 5.7 54.6 15.5L439 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72.4 72.4C410.3 225.3 416 244 416 264l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0 0 8c0 27.2-6.8 52.8-18.8 75.3L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-70.9-70.9C339.3 462.5 299.7 480 256 480s-83.3-17.5-112.2-45.9L73 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l75.8-75.8C102.8 372.8 96 347.2 96 320l0-8-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c0-20 5.7-38.7 15.5-54.6L39 137c-9.4-9.4-9.4-24.6 0-33.9zM144 264l0 56c0 53.6 37.7 98.4 88 109.4L232 280c0-13.3 10.7-24 24-24s24 10.7 24 24l0 149.4c50.3-11 88-55.8 88-109.4l0-56c0-30.9-25.1-56-56-56l-112 0c-30.9 0-56 25.1-56 56z"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-details-preview">
                    <div class="project-details-preview-images scroll-gradient-element">
                        ${project.preview.map(element => `
                            <div class="project-details-preview-image-container">
                                <img src="${element.image}" class="project-details-preview-image" alt="${project.title} preview image">
                                <span class="project-details-preview-image-label">${element.label}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="scroll-gradient-start"></div>
                    <div class="scroll-gradient-end"></div>
                </div>
            `;
        } else {
            container.innerHTML = `<p>Project not found.</p>`;
        }
    });

    document.querySelectorAll(".form-input-entry-project").forEach((input) => {
        input.innerHTML = `
            <div class="custom-dropdown" tabindex="0">
            <div class="dropdown-selected dropdown-placeholder">
                Project
            </div>
            <ul class="dropdown-options">
                ${Object.values(projects).map(project => `
                <li data-value="${project.id}">
                    <img src="${project.logo}" class="project-logo" alt="${project.title} project logo">
                    ${project.title}
                </li>
                `).join('')}
                <li data-value="other">Other</li>
            </ul>
            <input type="hidden" name="project" id="project" value="N/A">
            </div>
        `;
    });
}

renderProjects(); // Run on initial load