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
function isNavHoverEnabled() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--hover")
    .trim() === "true";
}

function updatePlaceholder(input, placeholder) {
  if (!placeholder || !input) return;
  placeholder.style.display = input.value ? 'none' : 'block';
}

function setupSearchPlaceholder() {
  const input = document.getElementById('search-bar');
  const placeholder = document.querySelector('.search-placeholder');

  if (!isNavHoverEnabled()) return;

  input.addEventListener('input', () => updatePlaceholder(input, placeholder));

  // Run on setup to catch restored input values
  updatePlaceholder(input, placeholder);
}

// Run on normal load AND back/forward cache restore
window.addEventListener('DOMContentLoaded', setupSearchPlaceholder);
window.addEventListener('pageshow', setupSearchPlaceholder);