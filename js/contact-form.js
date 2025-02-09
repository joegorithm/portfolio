const scriptURL = 'https://script.google.com/macros/s/AKfycbzr8n_WqcuFDBdkqWuS53T3ZxF-GpMly4IxEZ7fjvLlmplr8ibA7F-P_PNcvpfuQQKK/exec'
const form = document.forms['contact-form']
const entireContactPage = document.querySelector(".contact-form-page");

form.addEventListener('submit', e => {
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
})