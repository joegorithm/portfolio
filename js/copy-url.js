// function copyLink() {
//     // Get the current URL
//     const url = window.location.href;

//     // Create a temporary input element to hold the URL
//     const tempInput = document.createElement('input');
//     tempInput.value = url;
//     document.body.appendChild(tempInput);

//     // Select the text in the input element
//     tempInput.select();
//     tempInput.setSelectionRange(0, 99999); // For mobile devices

//     // Copy the text to the clipboard
//     document.execCommand('copy');

//     // Remove the temporary input element
//     document.body.removeChild(tempInput);

//     // Optionally, alert the user that the link has been copied
//     alert('Link copied to clipboard: ' + url);
// }

async function copyURL() {
    try {
        await navigator.clipboard.writeText(window.location.href);

        // Switch icons for 2 seconds
        const copyButton = document.querySelector('.copy-link-icon');
        const successIcon = document.querySelector('.copy-link-success-icon');
        const copyLinkTooltip = document.querySelector('.copy-link-tooltip');
        copyButton.classList.add('copy-link-icon-hide');
        successIcon.classList.remove('copy-link-success-icon-hide');
        copyLinkTooltip.classList.remove('copy-link-tooltip-hide');

        setTimeout(() => {
            copyButton.classList.remove('copy-link-icon-hide');
            successIcon.classList.add('copy-link-success-icon-hide');
            copyLinkTooltip.classList.add('copy-link-tooltip-hide');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy link: ', err);
    }
}
