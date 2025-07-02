// Certification issuers data
const certificationIssuers = {
    "codecademy": {
        name: "Codecademy",
        url: "https://www.codecademy.com",
        logo: {
            normal: {
                svg: `<svg width="4rem" height="4rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt="Codecademy logo">
                    <path d="M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 01-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 010 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224-.635-.764-1.554-1.244-2.74-1.244-1.59 0-2.79.795-3.255 2.206-.165.495-.24 1.126-.24 1.98 0 .854.075 1.483.255 1.98.465 1.425 1.665 2.204 3.255 2.204 1.2 0 2.115-.48 2.745-1.216.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027-.39.45-.795.69-1.454.69-.706 0-1.245-.345-1.47-1.035-.136-.39-.166-.87-.166-1.483 0-.615.045-1.068.18-1.47.24-.66.766-1.008 1.486-1.008z"/>
                    </svg>`,
                class: "certification-logo-codecademy"
            },
            small: {
                svg: `<svg width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt="Codecademy logo">
                    <path d="M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 01-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 010 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224-.635-.764-1.554-1.244-2.74-1.244-1.59 0-2.79.795-3.255 2.206-.165.495-.24 1.126-.24 1.98 0 .854.075 1.483.255 1.98.465 1.425 1.665 2.204 3.255 2.204 1.2 0 2.115-.48 2.745-1.216.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027-.39.45-.795.69-1.454.69-.706 0-1.245-.345-1.47-1.035-.136-.39-.166-.87-.166-1.483 0-.615.045-1.068.18-1.47.24-.66.766-1.008 1.486-1.008z"/>
                    </svg>`,
                class: "certification-logo-small-codecademy"
            }
        }
    },
    "github": {
        name: "GitHub",
        url: "https://github.com",
        logo: {
            normal: {
                svg: `<svg width="5rem" height="5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt="GitHub logo">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>`,
                class: "certification-logo-github"
            },
            small: {
                svg: `<svg width="1.3rem" height="1.3rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt="GitHub logo">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>`,
                class: "certification-logo-small-github"
            }
        }
    },
    "micrsoft-learn": {
        name: "Microsoft Learn",
        url: "https://learn.microsoft.com",
        logo: {
            normal: {
                svg: `<svg width="6rem" height="6rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" alt="Microsoft logo">
                    <path fill="#f35325" d="M0 0h10v10H0z"/>
                    <path fill="#81bc06" d="M11 0h10v10H11z"/>
                    <path fill="#05a6f0" d="M0 11h10v10H0z"/>
                    <path fill="#ffba08" d="M11 11h10v10H11z"/>
                    </svg>`,
                class: "certification-logo-microsoft"
            },
            small: {
                svg: `<svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" alt="Microsoft logo">
                    <path fill="#f35325" d="M0 0h10v10H0z"/>
                    <path fill="#81bc06" d="M11 0h10v10H11z"/>
                    <path fill="#05a6f0" d="M0 11h10v10H0z"/>
                    <path fill="#ffba08" d="M11 11h10v10H11z"/>
                    </svg>`,
                class: "certification-logo-small-microsoft"
            }
        }
    },
    "deeplearning-ai": {
        name: "DeepLearning.AI",
        url: "https://www.deeplearning.ai",
        logo: {
            normal: {
                svg: `<svg width="5rem" height="5rem" viewBox="0 0 33.5 33.5" xmlns="http://www.w3.org/2000/svg" alt="DeepLearning.AI logo">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73zm-.125-2.918c-6.289 0-11.386-4.925-11.386-11.002C5.257 6.52 10.36 1.59 16.643 1.59c6.284 0 11.386 4.93 11.386 11.007s-5.097 11.002-11.386 11.002zm-.242-4.508c4.77 0 8.633-3.679 8.633-8.218 0-4.538-3.885-8.221-8.633-8.221-4.747 0-8.632 3.679-8.632 8.221 0 4.543 3.885 8.218 8.632 8.218zm.126-1.59c-3.734 0-6.76-3.207-6.76-7.16 0-3.954 3.018-7.16 6.75-7.16 3.734 0 6.76 3.206 6.76 7.16s-3.021 7.16-6.76 7.16h.01zm-.126-6.28c.729 0 1.44-.214 2.046-.617a3.67 3.67 0 001.356-1.646 3.652 3.652 0 00-.798-3.995 3.687 3.687 0 00-4.012-.794 3.679 3.679 0 00-1.653 1.35 3.655 3.655 0 00-.62 2.037c.002.971.39 1.902 1.08 2.59a3.698 3.698 0 002.601 1.076z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73zm-.125-2.918c-6.289 0-11.386-4.925-11.386-11.002C5.257 6.52 10.36 1.59 16.643 1.59c6.284 0 11.386 4.93 11.386 11.007s-5.097 11.002-11.386 11.002zm-.242-4.508c4.77 0 8.633-3.679 8.633-8.218 0-4.538-3.885-8.221-8.633-8.221-4.747 0-8.632 3.679-8.632 8.221 0 4.543 3.885 8.218 8.632 8.218z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73z"></path>
                    </svg>`,
                class: "certification-logo-deeplearning-ai"
            },
            small: {
                svg: `<svg width="1.3rem" height="1.3rem" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" alt="DeepLearning.AI logo">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73zm-.125-2.918c-6.289 0-11.386-4.925-11.386-11.002C5.257 6.52 10.36 1.59 16.643 1.59c6.284 0 11.386 4.93 11.386 11.007s-5.097 11.002-11.386 11.002zm-.242-4.508c4.77 0 8.633-3.679 8.633-8.218 0-4.538-3.885-8.221-8.633-8.221-4.747 0-8.632 3.679-8.632 8.221 0 4.543 3.885 8.218 8.632 8.218zm.126-1.59c-3.734 0-6.76-3.207-6.76-7.16 0-3.954 3.018-7.16 6.75-7.16 3.734 0 6.76 3.206 6.76 7.16s-3.021 7.16-6.76 7.16h.01zm-.126-6.28c.729 0 1.44-.214 2.046-.617a3.67 3.67 0 001.356-1.646 3.652 3.652 0 00-.798-3.995 3.687 3.687 0 00-4.012-.794 3.679 3.679 0 00-1.653 1.35 3.655 3.655 0 00-.62 2.037c.002.971.39 1.902 1.08 2.59a3.698 3.698 0 002.601 1.076z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73zm-.125-2.918c-6.289 0-11.386-4.925-11.386-11.002C5.257 6.52 10.36 1.59 16.643 1.59c6.284 0 11.386 4.93 11.386 11.007s-5.097 11.002-11.386 11.002zm-.242-4.508c4.77 0 8.633-3.679 8.633-8.218 0-4.538-3.885-8.221-8.633-8.221-4.747 0-8.632 3.679-8.632 8.221 0 4.543 3.885 8.218 8.632 8.218z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73z"></path>
                    </svg>`,
                class: "certification-logo-small-deeplearning-ai"
            }
        }
    }
}

// Certifications data
const certifications = {
    "learn-python-3-codecademy": {
        title: "Learn Python 3",
        date: "2025-06-25",
        url: "https://www.codecademy.com/profiles/Jonathan-Hill/certificates/6c152bd262967f8c941c9707ed636bda",
        issuer: certificationIssuers["codecademy"],
        tools: "python, jupyter"
    },
    "ai-for-everyone-deeplearning-ai": {
        title: "AI for Everyone",
        date: "2025-06-17",
        url: "https://www.coursera.org/account/accomplishments/verify/1Q39R0JOB3YU",
        issuer: certificationIssuers["deeplearning-ai"]
    },
    "github-foundations-github": {
        title: "GitHub Foundations",
        date: "2025-03-27",
        url: "https://www.credly.com/badges/c37ca236-cbb2-4092-ac3f-f16dc6da42c9/public_url",
        issuer: certificationIssuers["github"],
        tools: "github, git, github-copilot"
    },
    "intro-to-generative-ai-codecademy": {
        title: "Intro to Generative AI",
        date: "2025-03-24",
        url: "https://www.codecademy.com/profiles/Jonathan-Hill/certificates/28ccb695c353465a8785a036ad32d3b9",
        issuer: certificationIssuers["codecademy"]
    },
    "intro-to-github-copilot-microsoft-learn": {
        title: "Intro to GitHub Copilot",
        date: "2025-03-23",
        url: "https://learn.microsoft.com/api/achievements/share/en-us/Jonathan-Hill/P5P7KBX4",
        issuer: certificationIssuers["micrsoft-learn"],
        tools: "github-copilot, vs-code"
    },
    "learn-css-codecademy": {
        title: "Learn CSS",
        date: "2025-03-21",
        url: "https://www.codecademy.com/profiles/Jonathan-Hill/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
        issuer: certificationIssuers["codecademy"],
        tools: "css"
    },
    "intro-to-github-microsoft-learn": {
        title: "Intro to GitHub",
        date: "2025-02-08",
        url: "https://learn.microsoft.com/api/achievements/share/en-us/Jonathan-Hill/VDXFUCBM",
        issuer: certificationIssuers["micrsoft-learn"],
        tools: "github"
    },
    "intro-to-git-microsoft-learn": {
        title: "Intro to Git",
        date: "2025-02-08",
        url: "https://learn.microsoft.com/api/achievements/share/en-us/Jonathan-Hill/FV9CEUYX",
        issuer: certificationIssuers["micrsoft-learn"],
        tools: "git, bash"
    },
    "learn-git-and-github-codecademy": {
        title: "Learn Git and GitHub",
        date: "2025-01-04",
        url: "https://www.codecademy.com/profiles/Jonathan-Hill/certificates/a8ab218d5950c29861635cc0bf12fd13",
        issuer: certificationIssuers["codecademy"],
        tools: "git, github, github-copilot, bash"
    },
    "learn-the-command-line-codecademy": {
        title: "Learn The Command Line",
        date: "2024-12-30",
        url: "https://www.codecademy.com/profiles/Jonathan-Hill/certificates/c87ba0541f8be78bc2f4ba1128233f6f",
        issuer: certificationIssuers["codecademy"],
        tools: "bash"
    },
    "learn-html-codecademy": {
        title: "Learn HTML",
        date: "2024-12-26",
        url: "https://www.codecademy.com/profiles/Jonathan-Hill/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
        issuer: certificationIssuers["codecademy"],
        tools: "html"
    }
};

// Render certifications as HTML tiles
function renderCertifications() {
    document.querySelectorAll(".certification-tiles").forEach((element) => {
        const certificationTiles = element.dataset.certifications.split(", ");
        certificationTiles.forEach((tile) => {
            element.innerHTML += `
                <div class="certification-tile ui-element" data-hover-effect>
                    <div class="glow"></div>
                    <div class="certification-main">
                        <a href="${certifications[tile].url}" target="_blank" class="certification-logo-link">
                            <div class="certification-logo ${certifications[tile].issuer.logo.normal.class}">
                                ${certifications[tile].issuer.logo.normal.svg}
                            </div>
                        </a>
                        <div class="certification-information">
                            <div class="certification-header">
                                <a href="${certifications[tile].url}" target="_blank" class="certification-link">
                                    <h2 class="certification-title">${certifications[tile].title}</h2>
                                </a>
                                <a href="${certifications[tile].url}" target="_blank" class="certification-link">
                                    <div class="tooltip-element">
                                        <svg class="certification-external-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
                                        </svg>
                                        <span class="tooltip tooltip-button">View Certificate</span>
                                    </div>
                                </a>
                            </div>
                            <a href="${certifications[tile].issuer.url}" target="_blank" class="certification-issuer">
                                <div class="certification-logo-small ${certifications[tile].issuer.logo.small.class}">
                                    ${certifications[tile].issuer.logo.small.svg}
                                </div>
                                <span class="certification-issuer-text">${certifications[tile].issuer.name}</span>
                            </a>
                            <div class="certification-time-ago">
                                <div class="time-ago-status tooltip-element">
                                    <span class="time-ago-icon"></span>
                                    <span class="time-ago-date" data-earned="${certifications[tile].date}"></span>
                                    <span class="tooltip"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tool-tags project-technologies" data-technologies="${certifications[tile].tools}"></div>
                </div>
            `;
        });
    });
}

renderCertifications(); // Run on initial load
