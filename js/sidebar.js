function isNavHoverEnabled() {
    return getComputedStyle(document.documentElement)
        .getPropertyValue("--hover")
        .trim() === "true";
}

const nav = document.querySelector("nav"); // Get the nav element
let navHover = false; // Variable to store the hover state
let hideTimeout; // Variable to store the timeout reference
let hoverEnabled = isNavHoverEnabled(); // Check if hover is enabled

// Update the nav labels if the sidebar has loaded and the hover state has changed
function updateNavLabels() {
    if (sidebarLoaded) {
        if (hoverEnabled) {
            document.querySelectorAll(".nav-label").forEach((navLabel) => {
                if (navHover) {
                    navLabel.style.display = "block";
                } else {
                    navLabel.style.display = "none";
                }
            });
        } else {
            document.querySelectorAll(".nav-label").forEach((navLabel) => {
                navLabel.style.display = "block";
            });
        }
    }
}

// Run when sidebar loads
document.addEventListener("sidebarLoaded", function () {
    sidebarLoaded = true;
    updateNavLabels();
});

if (hoverEnabled) {
    // Sidebar expanded
    nav.addEventListener("mouseenter", () => {
        navHover = true;
        clearTimeout(hideTimeout); // Stop hiding if the mouse re-enters
        updateNavLabels();
    });

    // Sidebar collapsed
    nav.addEventListener("mouseleave", () => {
        navHover = false;

        // Wait 200ms before hiding labels
        hideTimeout = setTimeout(() => {
            updateNavLabels();
        }, 200);
    });
}

window.addEventListener("resize", updateNavLabels);

updateNavLabels(); // Initial check