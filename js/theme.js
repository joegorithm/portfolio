let theme = localStorage.getItem("theme");
let themeToggle;

document.addEventListener("sidebarLoaded", function () {
    themeToggle = document.querySelector(".nav-button-theme");

    themeToggle.addEventListener("click", () => {
        theme = localStorage.getItem("theme");
        if (theme === "dark") {
            enableLightTheme();
        } else if (theme === "light") {
            enableDarkTheme();
        }
    });
});

const enableDarkTheme = () => {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
    // document.getElementsByTagName('meta')["theme-color"].content = "#000000";
}

const enableLightTheme = () => {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
    // document.getElementsByTagName('meta')["theme-color"].content = "#ff7cf0";

}

if (theme === "dark") {
    enableDarkTheme();
} else if (theme === "light") {
    enableLightTheme();
}

if (theme === null) {
    const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const systemLightTheme = window.matchMedia("(prefers-color-scheme: light)");
    
    if (systemDarkTheme.matches) {
        enableDarkTheme();
    } else if (systemLightTheme.matches) {
        enableLightTheme();
    }
}