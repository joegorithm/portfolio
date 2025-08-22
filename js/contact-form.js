// v1
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzr8n_WqcuFDBdkqWuS53T3ZxF-GpMly4IxEZ7fjvLlmplr8ibA7F-P_PNcvpfuQQKK/exec';
// v2
// const scriptURL = 'https://script.google.com/macros/s/AKfycbw_enbnrMEbTnh5xh3RAr2dXHJGXLVe849Y8BP9rzVM_5o7riCp0n1yhYOh-wdXDcZ7/exec';
// v3
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzLiqZs8ZjO6XMuiroSB_daa41bRU5teTX7E9IG3pZJgQ9zxI537H7feHe6w8zDtHjh/exec';
// v4
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxyYaq8fptYcM4vqbkxOSXpuujFjZgEzWAWb0bM4jOF3XF6R2PbTYfYa1iG4i10xtdW/exec';
// v5
//const scriptURL = 'https://script.google.com/macros/s/AKfycbzRWbGirXTomXbhztgwxOWacGNUBihuBL_7xyWsLOV5KDGERTF7plc73t6RzRt5CNIZ/exec';
// v6
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwPqD6C-SZERQpX2eEn2ez24cwUZfSaZVE23OjOf-7FuMhyMwlDNAO4ssK2Idi74Kr4/exec';
// v7
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxLVpM_5bQEteT5_awHWlOLI3WGaUmZclzeSLdX-auFhGTv3cSm_6yC7Sk3Z85LPPuQ/exec';
// v8
// const scriptURL = 'https://script.google.com/macros/s/AKfycbybCpmznWdCOFmzbs9zZiPIU-6PnJzpqHWN629tMrz-buU_sqsxsvqGe0QzW0zYLSAa/exec';
// v9
// const scriptURL = 'https://script.google.com/macros/s/AKfycbyvIAV3xV9yL7BGxGIVCmLd00QCTbZSPUDV_fT66UdwU9XTErAwazTBx1wDHDYICNKF/exec';
// v10
// const scriptURL = 'https://script.google.com/macros/s/AKfycbw19seqTkIwrkZiUybkkYN2c_liMXivVhu7AzPluuJzlHeAjdABKynY19DJllmwDgt_/exec';
// v11
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwabckfHt0vNcsWQDcK2AQerhNhAMbk-RV9oj23Nl7wElpyP_8BF07dShK-YuGkYNgc/exec';
// v12
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwhUhA-EOgITFme07LW5LzOXwDbzCvkBlx8MKYTdiszGHf5Fo1gihSeSG-2n2YH9DxC/exec';

// v13
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVEn7J_Lpo-we_yzoqJkPnV2S2Qu0bsjYUtYKVAAghV5gGYFQzWH1m6_UcGEWqBPsh/exec';
const form = document.forms['contact-form'];
const entireContactPage = document.querySelector(".contact-form-page");
const formStatusBackground = document.querySelector(".form-status-background");
const formStatusLoader = document.querySelector(".form-status-loader");
const formStatus = document.querySelector(".form-status");
const runawayButton = document.querySelector(".runaway-button");

function validateForm() {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const category = document.querySelector("#category");
    const categoryElement = document.querySelector(".form-input-entry-category .custom-dropdown");
    const categoryPlaceholder = document.querySelector(".form-input-entry-category .dropdown-placeholder");
    const project = document.querySelector("#project");
    const projectElement = document.querySelector(".form-input-entry-project .custom-dropdown");
    const projectPlaceholder = document.querySelector(".form-input-entry-project .dropdown-placeholder");
    const blog = document.querySelector("#blog");
    const blogElement = document.querySelector(".form-input-entry-blog .custom-dropdown");
    const blogPlaceholder = document.querySelector(".form-input-entry-blog .dropdown-placeholder");
    const message = document.querySelector("#message");

    const nameErrorMessage = ["Please enter your name", "Name cannot be empty", "Your name is required", "Just enter your name", "What's your name?", "Go ahead, enter your name", "You don't have a name?", "What are you waiting for? 👀", "Please enter your name", "Let's get this over with... Just enter your name", "Please enter your name", "Don't be shy, just enter your name", "You've forgotten your name? 😳", "We cannot proceed without your name", "Who do I have the pleasure of meeting?", "Still trying to remember your name?"];
    const emailErrorMessage = ["Please enter your email address", "Email cannot be empty", "Email is required", "Just enter your email address", "What's your email address?", "Go ahead, enter your email address", "You don't have an email address?"];
    const categoryErrorMessage = ["Please select a category", "The category cannot be empty", "Category is required", "Just select a category", "Which category fits your message?", "Go ahead, select a category", "It's not that hard, just select a category", "If none of these work, just select 'Other'", "It doesn't have to be this difficult"];
    const projectErrorMessage = ["Please select a project", "This field cannot be empty", "Project is required", "Just select a project", "Which project are you talking about?", "Go ahead, select a project", "It's not that hard, just select a project", "If you can't find it, just select 'Other'", "Knowing which project would be helpful", "I'll try to be patient, but please select a project", "Thanks for the feedback! Which project is this about?"];
    const blogErrorMessage = ["Please select a blog post", "This field cannot be empty", "Blog post is required", "Just select a blog post", "Which blog post are you referring to?", "Go ahead, select a blog post", "It's not that hard, just select a blog post", "If you can't find it, just select 'Other'", "Knowing which blog post would be helpful", "I'll try to be patient, but please select a blog post", "Thanks for the feedback! Which blog post is this about?"];
    const messageErrorMessage = ["Please enter a message", "Message cannot be empty", "Message is required", "Just enter a message", "What would you like to say?", "Go ahead, enter some text", "You can't think of anything to say?", "You're trying to send a message, right?", "I know you have something to say", "Did you lose your keyboard?", "Just type something!", "What's on your mind?", "You can do it, type something here", "A little more context would be nice", "Place your hands on your keyboard and start typing!"];

    let valid = true;

    console.log(name.value);
    console.log(email.value);
    console.log(category.value);
    console.log(project.value);
    console.log(blog.value);
    console.log(message.value);

    function shakeElement(element) {
        element.classList.remove("shake");
        setTimeout(() => {
            element.classList.add("shake");
        }, 0);
    }

    if (!name.value.trim()) {
        name.classList.add("error");
        shakeElement(name);
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        blogElement.classList.remove("error");
        message.classList.remove("error");
        name.placeholder = nameErrorMessage[Math.floor(Math.random() * nameErrorMessage.length)];
        email.placeholder = "Email";
        message.placeholder = "Message";
        name.focus();
        valid = false;
    } else if (!email.value.trim() || !email.value.includes("@")) {
        name.classList.remove("error");
        email.classList.add("error");
        shakeElement(email);
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        blogElement.classList.remove("error");
        message.classList.remove("error");
        email.placeholder = emailErrorMessage[Math.floor(Math.random() * emailErrorMessage.length)];
        name.placeholder = "Name";
        message.placeholder = "Message";
        email.focus();
        valid = false;
    } else if (category.value === "N/A") {
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.add("error");
        shakeElement(categoryElement);
        projectElement.classList.remove("error");
        blogElement.classList.remove("error");
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
        categoryPlaceholder.textContent = categoryErrorMessage[Math.floor(Math.random() * categoryErrorMessage.length)];
        categoryElement.focus();
        valid = false;
    } else if (category.value === "project-feedback" && project.value === "N/A") {
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.add("error");
        blogElement.classList.remove("error");
        shakeElement(projectElement);
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
        projectPlaceholder.textContent = projectErrorMessage[Math.floor(Math.random() * projectErrorMessage.length)];
        projectElement.focus();
        valid = false;
    } else if (category.value === "blog-feedback" && blog.value === "N/A") {
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        blogElement.classList.add("error");
        shakeElement(blogElement);
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
        blogPlaceholder.textContent = blogErrorMessage[Math.floor(Math.random() * blogErrorMessage.length)];
        blogElement.focus();
        valid = false;
    } else if (!message.value.trim()) {
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        blogElement.classList.remove("error");
        categoryElement.classList.remove("error");
        message.classList.add("error");
        shakeElement(message);
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = messageErrorMessage[Math.floor(Math.random() * messageErrorMessage.length)];
        message.focus();
        valid = false;
    } else {
        valid = true;
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        blogElement.classList.remove("error");
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
    }

    return valid;
}

form.addEventListener('submit', e => {
    if (validateForm()) {
        formStatusBackground.style.display = "flex";
        formStatusBackground.style.backdropFilter = "blur(0.5rem)";
        formStatusLoader.style.display = "block";
        formStatus.style.display = "none";

        // entireContactPage.classList.remove("contact-form-status-entry");
        // entireContactPage.classList.add("contact-form-status-processing");
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            formStatus.style.display = "flex";
            formStatusLoader.style.display = "none";
            //form.reset(); // Clear the form after submission
            // entireContactPage.classList.remove("contact-form-status-processing");
            // entireContactPage.classList.add("contact-form-status-complete");
        })
        .catch(error => {
            alert('Failed to submit form. Please try again.');
            entireContactPage.classList.remove("contact-form-status-processing");
            // entireContactPage.classList.remove("contact-form-status-complete");
            entireContactPage.classList.add("contact-form-status-error");
        });
    } else {
        e.preventDefault();
    }
})

runawayButton.addEventListener("click", (e) => {
    formStatus.style.display = "none";
    formStatusBackground.style.display = "none";
    form.reset();

    // Reset custom dropdowns
    const category = document.querySelector(".form-input-entry-category");
    const project = document.querySelector(".form-input-entry-project");
    const blog = document.querySelector(".form-input-entry-blog");
    function resetDropdown(dropdown, label) {
        dropdown.querySelector(".dropdown-selected").textContent = label; // Reset selected text
        dropdown.querySelector("input[type=hidden]").value = "N/A"; // Reset hidden input value
        dropdown.querySelector(".dropdown-selected").classList.add("dropdown-placeholder"); // Reset placeholder styling
    }
    resetDropdown(category, "Category");
    resetDropdown(project, "Project");
    resetDropdown(blog, "Blog Post");
    project.classList.add("form-input-entry-project-hidden");
    blog.classList.add("form-input-entry-blog-hidden");
});