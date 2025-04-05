const scriptURL = 'https://script.google.com/macros/s/AKfycbzr8n_WqcuFDBdkqWuS53T3ZxF-GpMly4IxEZ7fjvLlmplr8ibA7F-P_PNcvpfuQQKK/exec';
const form = document.forms['contact-form'];
const entireContactPage = document.querySelector(".contact-form-page");
function validateForm() {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const category = document.querySelector("#category");
    const categoryElement = document.querySelector(".form-input-entry-category .custom-dropdown");
    const categoryPlaceholder = document.querySelector(".form-input-entry-category .dropdown-placeholder");
    const project = document.querySelector("#project");
    const projectElement = document.querySelector(".form-input-entry-project .custom-dropdown");
    const projectPlaceholder = document.querySelector(".form-input-entry-project .dropdown-placeholder");
    const message = document.querySelector("#message");

    const nameErrorMessage = ["Please enter your name", "Name cannot be empty", "Your name is required", "Just enter your name", "What's your name?", "Go ahead, enter your name", "You don't have a name?", "What are you waiting for? 👀", "Please enter your name", "Let's get this over with... Just enter your name", "Please enter your name", "Don't be shy, just enter your name", "You've forgotten your name? 😳", "We cannot proceed without your name", "Who do I have the pleasure of meeting?", "Still trying to remember your name?"];
    const emailErrorMessage = ["Please enter your email address", "Email cannot be empty", "Email is required", "Just enter your email address", "What's your email address?", "Go ahead, enter your email address", "You don't have an email address?"];
    const categoryErrorMessage = ["Please select a category", "The category cannot be empty", "Category is required", "Just select a category", "Which category fits your message?", "Go ahead, select a category", "It's not that hard, just select a category", "If none of these work, just select 'Other'", "It doesn't have to be this difficult"];
    const projectErrorMessage = ["Please select a project", "This field cannot be empty", "Project is required", "Just select a project", "Which project are you talking about?", "Go ahead, select a project", "It's not that hard, just select a project", "If you can't find it, just select 'Other'", "Knowing which project would be helpful", "I'll try to be patient, but please select a project", "Thanks for the feedback! Which project is this about?"];
    const messageErrorMessage = ["Please enter a message", "Message cannot be empty", "Message is required", "Just enter a message", "What would you like to say?", "Go ahead, enter some text", "You can't think of anything to say?", "You're trying to send a message, right?", "I know you have something to say", "Did you lose your keyboard?", "Just type something!", "What's on your mind?", "You can do it, type something here", "A little more context would be nice", "Place your hands on your keyboard and start typing!"];

    let valid = true;

    console.log(name.value);
    console.log(email.value);
    console.log(category.value);
    console.log(project.value);
    console.log(message.value);

    if (!name.value.trim()) {
        name.classList.add("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        message.classList.remove("error");
        name.placeholder = nameErrorMessage[Math.floor(Math.random() * nameErrorMessage.length)];
        email.placeholder = "Email";
        message.placeholder = "Message";
        name.focus();
        valid = false;
    } else if (!email.value.trim() || !email.value.includes("@")) {
        name.classList.remove("error");
        email.classList.add("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
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
        projectElement.classList.remove("error");
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
        categoryPlaceholder.textContent = categoryErrorMessage[Math.floor(Math.random() * categoryErrorMessage.length)];
        categoryElement.focus();
        valid = false;
    } else if (category.value === "feedback" && project.value === "N/A") {
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.add("error");
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
        projectPlaceholder.textContent = projectErrorMessage[Math.floor(Math.random() * projectErrorMessage.length)];
        projectElement.focus();
        valid = false;
    } else if (!message.value.trim()) {
        name.classList.remove("error");
        email.classList.remove("error");
        categoryElement.classList.remove("error");
        projectElement.classList.remove("error");
        categoryElement.classList.remove("error");
        message.classList.add("error");
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
        message.classList.remove("error");
        name.placeholder = "Name";
        email.placeholder = "Email";
        message.placeholder = "Message";
    }

    return valid;
}

form.addEventListener('submit', e => {
    if (validateForm()) {
        entireContactPage.classList.remove("contact-form-status-entry");
        entireContactPage.classList.add("contact-form-status-processing");
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form after submission
            entireContactPage.classList.remove("contact-form-status-processing");
            entireContactPage.classList.add("contact-form-status-complete");
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