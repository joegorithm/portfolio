document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".custom-dropdown");
    const selected = dropdown.querySelector(".dropdown-selected");
    const options = dropdown.querySelector(".dropdown-options");
    const hiddenInput = dropdown.querySelector("input[type=hidden]");

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
                selected.textContent = options.querySelectorAll("li")[currentIndex].textContent; // Set selected text
                hiddenInput.value = options.querySelectorAll("li")[currentIndex].dataset.value; // Store value for form submission
                selected.classList.remove("dropdown-placeholder"); // Remove placeholder styling
                dropdown.classList.remove("open"); // Close dropdown
                dropdown.blur();
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
            selected.textContent = option.textContent; // Set selected text
            hiddenInput.value = option.dataset.value; // Store value for form submission
            selected.classList.remove("dropdown-placeholder");
            dropdown.classList.remove("open"); // Close dropdown
            dropdown.blur(); // Remove focus
        });
    });
});