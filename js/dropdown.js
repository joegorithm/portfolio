document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms['contact-form'];
    document.querySelectorAll(".custom-dropdown").forEach(dropdown => {
        const selected = dropdown.querySelector(".dropdown-selected");
        const options = dropdown.querySelector(".dropdown-options");
        const hiddenInput = dropdown.querySelector("input[type=hidden]");

        const category = document.querySelector(".form-input-entry-category .dropdown-selected");
        const project = document.querySelector(".form-input-entry-project");

        function resetDropdown(id, label) {
            id.querySelector(".dropdown-selected").textContent = label; // Reset selected text
            const hidden = id.querySelector("input[type=hidden]");
            hidden.value = "N/A"; // Reset hidden input value
            // Notify listeners that the value changed programmatically
            hidden.dispatchEvent(new Event("change", { bubbles: true }));
            id.querySelector(".dropdown-selected").classList.add("dropdown-placeholder"); // Reset placeholder styling
        }

        let currentIndex = -1; // Index of currently highlighted option

        // Handle dropdown keyboard navigation
        dropdown.addEventListener("keydown", e => {
            if (dropdown.classList.contains("open")) {
                if (e.key === "ArrowDown") {
                    e.preventDefault(); // Prevent page scrolling
                    if (currentIndex < options.querySelectorAll("li").length - 1) {
                        currentIndex++; // Increment index
                    } else {
                        currentIndex = 0; // Reset index to 0
                    }
                    options.querySelectorAll("li").forEach(option => {
                        option.classList.remove("highlight"); // Remove highlight from all options
                    });
                    options.querySelectorAll("li")[currentIndex].classList.add("highlight"); // Highlight current option
                } else if (e.key === "ArrowUp") {
                    e.preventDefault(); // Prevent page scrolling
                    if (currentIndex > 0) {
                        currentIndex--; // Decrement index
                    } else {
                        currentIndex = options.querySelectorAll("li").length - 1; // Set index to last option
                    }
                    options.querySelectorAll("li").forEach(option => {
                        option.classList.remove("highlight"); // Remove highlight from all options
                    });
                    options.querySelectorAll("li")[currentIndex].classList.add("highlight"); // Highlight current option
                } else if (e.key === "Enter") {
                    e.preventDefault(); // Prevent default behavior
                    selected.innerHTML = options.querySelectorAll("li")[currentIndex].innerHTML; // Set selected text
                    hiddenInput.value = options.querySelectorAll("li")[currentIndex].dataset.value; // Store value for form submission
                    // Fire change for programmatic update so external listeners can react
                    hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
                    selected.classList.remove("dropdown-placeholder"); // Remove placeholder styling
                    dropdown.classList.remove("open"); // Close dropdown
                    dropdown.blur();

                    // Show project input if category is "Project Feedback"
                    if (form) {
                        if (category.textContent === "Project Feedback") {
                            project.classList.remove("form-input-entry-project-hidden");
                        } else {
                            project.classList.add("form-input-entry-project-hidden"); // Hide project input
                            resetDropdown(project, "Project"); // Reset project input
                        }
                    }
                } else if (e.key === "Escape") {
                    e.preventDefault(); // Prevent default behavior
                    dropdown.classList.remove("open"); // Close dropdown
                    dropdown.blur(); // Remove focus
                }
            }
        });

        // Handle dropdown open
        dropdown.addEventListener("focus", () => {
            dropdown.classList.add("open"); // Open dropdown
        });

        // Handle dropdown close and reset options index and styling
        dropdown.addEventListener("blur", () => {
            dropdown.classList.remove("open"); // Close dropdown
            currentIndex = -1; // Reset index
            options.querySelectorAll("li").forEach(option => {
                option.classList.remove("highlight"); // Remove highlight from all options
            });
        });

        // Handle option selection
        options.querySelectorAll("li").forEach(option => {
            option.addEventListener("click", () => {
                // selected.textContent = option.textContent; // Set selected text
                selected.innerHTML = option.innerHTML; // Set selected text
                hiddenInput.value = option.dataset.value; // Store value for form submission
                // Fire change for programmatic update so external listeners can react
                hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
                selected.classList.remove("dropdown-placeholder");
                dropdown.classList.remove("open"); // Close dropdown
                dropdown.blur(); // Remove focus

                // Show project input if category is "Project Feedback"
                if (form) {
                    if (category.textContent === "Project Feedback") {
                        project.classList.remove("form-input-entry-project-hidden");
                    } else {
                        project.classList.add("form-input-entry-project-hidden"); // Hide project input
                        resetDropdown(project, "Project"); // Reset project input
                    }
                }
            });
        });

        // Get the value of the category and project parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryValue = urlParams.get("category")?.toLowerCase();
        const projectValue = urlParams.get("project")?.toLowerCase();

        // If category is set, update the dropdown
        if (categoryValue) {
            const categoryOption = options.querySelector(`li[data-value="${categoryValue}"]`);
            if (categoryOption) {
                categoryOption.click();
            }
        }

        // If project is set, update the project input
        if (projectValue) {
            const projectOption = project.querySelector(`li[data-value="${projectValue}"]`);
            if (projectOption) {
                projectOption.click();
            } else {
                resetDropdown(project, "Project"); // Reset project input if not found
            }
        }
    });
});