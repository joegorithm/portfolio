let theme = localStorage.getItem("theme");
let navThemeToggle;
let footerThemeToggle;
let sidebarLoaded;
let footerLoaded;

document.addEventListener("sidebarLoaded", function () {
    sidebarLoaded = true;
    checkBothLoaded();
});

document.addEventListener("footerLoaded", function () {
    footerLoaded = true;
    checkBothLoaded();
});

// Listen for sidebarLoaded event to ensure the sidebar is loaded before attempting to access the theme toggle button
function checkBothLoaded() {
    if (sidebarLoaded && footerLoaded) {
        navThemeToggle = document.querySelector(".nav-button-theme");
        footerThemeToggle = document.querySelector(".footer-theme-toggle");
    
        updateThemeLabel();
    
        navThemeToggle.addEventListener("click", () => {
            theme = localStorage.getItem("theme");
            if (theme === "dark") {
                enableLightTheme();
            } else if (theme === "light") {
                enableDarkTheme();
            }
        });
        footerThemeToggle.addEventListener("click", () => {
            theme = localStorage.getItem("theme");
            if (theme === "dark") {
                enableLightTheme();
            } else if (theme === "light") {
                enableDarkTheme();
            }
        });
    }
}

// Enable dark theme function
const enableDarkTheme = () => {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
    updateHighlightJsTheme("dark");
    
    // Update nav label only if it exists
    const themeLabel = document.querySelector(".nav-label-theme");
    if (themeLabel) {
        themeLabel.textContent = "Light Mode";
    }
}

// Enable light theme function
const enableLightTheme = () => {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
    updateHighlightJsTheme("light");
    
    // Update nav label only if it exists
    const themeLabel = document.querySelector(".nav-label-theme");
    if (themeLabel) {
        themeLabel.textContent = "Dark Mode";
    }
}

// Update Highlight.js theme based on current theme
const updateHighlightJsTheme = (theme) => {
    // Remove existing highlight.js theme
    const existingTheme = document.querySelector('link[href*="highlight.js"][href*="github"]');
    if (existingTheme) {
        existingTheme.remove();
    }
    
    // Add new theme
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = theme === 'dark' 
        ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css'
        : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css';
    document.head.appendChild(themeLink);
    
    // Re-highlight all code blocks if hljs is available
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
}

// Update theme button label on sidebar
const updateThemeLabel = () => {
    const themeLabel = document.querySelector(".nav-label-theme");
    if (themeLabel) {
        themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    }
}

// Check if theme is set in local storage, and if so, trigger the appropriate theme
if (theme === "dark") {
    enableDarkTheme();
    updateThemeLabel();
} else if (theme === "light") {
    enableLightTheme();
    updateThemeLabel();
}

// If no theme is set in local storage, check for system theme preference
if (theme === null) {
    const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const systemLightTheme = window.matchMedia("(prefers-color-scheme: light)");
    
    if (systemDarkTheme.matches) {
        enableDarkTheme();
    } else if (systemLightTheme.matches) {
        enableLightTheme();
    } else {
        // Default to light theme if no preference
        enableLightTheme();
    }

    updateThemeLabel();
}