document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms['contact-form'];
    const category = document.querySelector(".form-input-entry-category .dropdown-selected");
    const project = document.querySelector(".form-input-entry-project");
    const blog = document.querySelector(".form-input-entry-blog");

    // Expose an initializer to handle dropdowns added dynamically after DOMContentLoaded
    window.initCustomDropdown = (dropdown) => {
        const selected = dropdown.querySelector(".dropdown-selected");
        const options = dropdown.querySelector(".dropdown-options");
        const hiddenInput = dropdown.querySelector("input[type=hidden]");

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
                    e.preventDefault();
                    const option = options.querySelectorAll("li")[currentIndex];
                    applySelection(option);
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

        // Shared option selection logic (keyboard + mouse)
        function applySelection(optionEl) {
            if (!optionEl) return;
            selected.innerHTML = optionEl.innerHTML; // Preserve possible markup (image + text)
            hiddenInput.value = optionEl.dataset.value || ""; // Update hidden value
            hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
            selected.classList.remove("dropdown-placeholder");
            dropdown.classList.remove("open");
            dropdown.blur();

            // Conditional visibility for project/blog fields based on category selection
            if (form) {
                if (category.textContent === "Project Feedback") {
                    project.classList.remove("form-input-entry-project-hidden");
                    blog.classList.add("form-input-entry-blog-hidden");
                    resetDropdown(blog, "Blog Post");
                } else if (category.textContent === "Blog Post Issue") {
                    blog.classList.remove("form-input-entry-blog-hidden");
                    project.classList.add("form-input-entry-project-hidden");
                    resetDropdown(project, "Project");
                } else {
                    project.classList.add("form-input-entry-project-hidden");
                    resetDropdown(project, "Project");
                    blog.classList.add("form-input-entry-blog-hidden");
                    resetDropdown(blog, "Blog Post");
                }
            }
        }

        // Delegated click handler so dynamically injected <li> elements work
        options.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            if (!li || !options.contains(li)) return;
            applySelection(li);
        });

        // Allow keyboard Enter to reuse logic via currentIndex
        // (Modify existing Enter handler above to call applySelection if desired)
        // NOTE: We keep existing keydown logic; Enter path already sets values directly.

        // Get the value of the category, project, and blog parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryValue = urlParams.get("category")?.toLowerCase();
        const projectValue = urlParams.get("project")?.toLowerCase();
        const blogValue = urlParams.get("blog")?.toLowerCase();

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

        // If blog is set, update the blog input
        if (blogValue) {
            const blogOption = blog.querySelector(`li[data-value="${blogValue}"]`);
            if (blogOption) {
                blogOption.click();
                console.log("Blog Post selected");
            } else {
                resetDropdown(blog, "Blog Post"); // Reset blog input if not found
                console.log("Blog Post not found, reset to default");
            }
        }
    };

    // Initialize any dropdowns present at load
    document.querySelectorAll(".custom-dropdown").forEach(dd => window.initCustomDropdown(dd));

    // After async blog options load, attempt URL-based preselection again (blog param)
    document.addEventListener('blogDropdownOptionsReady', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const blogValue = urlParams.get('blog')?.toLowerCase();
        if (blogValue) {
            const blogDropdown = document.querySelector('.form-input-entry-blog .custom-dropdown');
            if (blogDropdown) {
                const options = blogDropdown.querySelector('.dropdown-options');
                const li = options?.querySelector(`li[data-value="${blogValue}"]`);
                if (li) {
                    // Ensure the category is set to Blog Post Issue so the blog dropdown is visible
                    const categoryDropdown = document.querySelector('.form-input-entry-category .custom-dropdown');
                    if (categoryDropdown && !blogDropdown.classList.contains('open')) {
                        // If category not already Blog Post Issue, set it
                        const categoryOption = categoryDropdown.querySelector('.dropdown-options li[data-value="blog-feedback"], .dropdown-options li[data-value="blog-post-issue"]');
                        if (categoryOption) categoryOption.click();
                    }
                    li.click();
                }
            }
        }
    });
});