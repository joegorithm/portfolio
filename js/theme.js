let theme = localStorage.getItem("theme");
let themeToggle;

// Listen for sidebarLoaded event to ensure the sidebar is loaded before attempting to access the theme toggle button
document.addEventListener("sidebarLoaded", function () {
    themeToggle = document.querySelector(".nav-button-theme");

    updateThemeLabel();

    themeToggle.addEventListener("click", () => {
        theme = localStorage.getItem("theme");
        if (theme === "dark") {
            enableLightTheme();
        } else if (theme === "light") {
            enableDarkTheme();
        }
    });
});

// Enable dark theme function
const enableDarkTheme = () => {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
    document.querySelector(".nav-label-theme").textContent = "Light Mode";
}

// Enable light theme function
const enableLightTheme = () => {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
    document.querySelector(".nav-label-theme").textContent = "Dark Mode";
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
    }

    updateThemeLabel();
}