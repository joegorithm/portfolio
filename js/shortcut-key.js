/*  Display keyboard shortcut differently based on OS */

const shortcutKey = document.getElementById('shortcut-key');

// Simple OS check
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Set key text accordingly
shortcutKey.textContent = isMac ? '⌘K' : 'Ctrl K';