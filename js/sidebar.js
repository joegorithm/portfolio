function isNavHoverEnabled() {
    return getComputedStyle(document.documentElement)
        .getPropertyValue("--hover")
        .trim() === "true";
}
function doesSidebarExist() {
    return getComputedStyle(document.documentElement)
        .getPropertyValue("--sidebar")
        .trim() === "true";
}

const nav = document.querySelector("nav"); // Get the nav element
let navHover = false; // Variable to store the hover state
let hideTimeout; // Variable to store the timeout reference
let hoverEnabled = isNavHoverEnabled(); // Check if hover is enabled
let sidebarExists = doesSidebarExist(); // Check if the sidebar exists

// Update the nav labels if the sidebar has loaded and the hover state has changed
function updateNavLabels() {
    if (sidebarLoaded) {
        sidebarExists = doesSidebarExist(); // Re-check if the sidebar exists
        if (hoverEnabled && sidebarExists) {
            document.querySelectorAll(".nav-label").forEach((navLabel) => {
                if (navHover) {
                    if (navLabel.classList.contains("nav-label-certifications-shortened")) {
                        navLabel.style.display = "none";
                    } else {
                        navLabel.style.display = "block";
                    }
                } else {
                    navLabel.style.display = "none";
                }
            });
        } else {
            document.querySelectorAll(".nav-label").forEach((navLabel) => {
                if (navLabel.classList.contains("nav-label-certifications")) {
                    navLabel.style.display = "none";
                } else {
                    navLabel.style.display = "block";
                }
            });
        }
    }
}

// Run when sidebar loads
document.addEventListener("sidebarLoaded", function () {
    sidebarLoaded = true;
    updateNavLabels();
});

if (hoverEnabled && nav) {
    // Expand on mouse enter
    nav.addEventListener("mouseenter", () => {
        navHover = true;
        clearTimeout(hideTimeout);
        updateNavLabels();
    });

    // Collapse after brief delay when mouse leaves (unless focus stays inside)
    nav.addEventListener("mouseleave", () => {
        // Only collapse if nothing inside is focused
        if (!nav.contains(document.activeElement)) {
            navHover = false;
            hideTimeout = setTimeout(() => {
                updateNavLabels();
            }, 200);
        }
    });
}

// Keyboard accessibility: treat focus within nav like hover (always attach if nav exists)
if (nav) {
    nav.addEventListener("focusin", () => {
        if (!navHover) {
            navHover = true;
            clearTimeout(hideTimeout);
            updateNavLabels();
        }
    });

    nav.addEventListener("focusout", (e) => {
        // When focus leaves the entire nav and mouse isn't hovering, collapse
        if (!nav.contains(e.relatedTarget) && !nav.matches(":hover")) {
            navHover = false;
            hideTimeout = setTimeout(() => {
                updateNavLabels();
            }, 200);
        }
    });
}

window.addEventListener("resize", updateNavLabels);

updateNavLabels(); // Initial check

// Handle case where page loads with pointer already over nav (e.g., reload while hovering)
if (hoverEnabled && nav && nav.matches(":hover")) {
    navHover = true;
    // Run again on next frame after potential sidebarLoaded event triggers
    requestAnimationFrame(() => updateNavLabels());
}