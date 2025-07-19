// Focus on search bar when user uses /, Cmd+K, or Ctrl+K shortcuts
document.addEventListener('keydown', function(event) {
    // Check if user is typing in an input/textarea already
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    const isSlash = event.key === '/';
    const isCmdK = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';

    if (isSlash || isCmdK) {
        event.preventDefault(); // prevent browser's quick find
        document.getElementById('search-bar').focus();
    }
});

// Blur search bar on Escape key press
document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        this.blur();
    }
});

// Search bar placeholder functionality
const input = document.getElementById('search-bar');
const placeholder = document.querySelector('.search-placeholder');

function updatePlaceholder() {
    placeholder.style.display = input.value ? 'none' : 'block';
}

input.addEventListener('input', updatePlaceholder);

document.addEventListener('DOMContentLoaded', updatePlaceholder);