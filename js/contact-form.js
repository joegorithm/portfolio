const scriptURL = 'https://script.google.com/macros/s/AKfycbzr8n_WqcuFDBdkqWuS53T3ZxF-GpMly4IxEZ7fjvLlmplr8ibA7F-P_PNcvpfuQQKK/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    alert('Form submitted successfully!');
        form.reset(); // Clear the form after submission
    })
    .catch(error => {
        alert('Failed to submit form. Please try again.');
    });
})