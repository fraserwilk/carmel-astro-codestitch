//
//    Dark Mode System with OS Sync
//

// Helper functions to toggle dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}

// Determine and apply initial theme
function detectColorScheme() {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
        // User has a saved preference
        theme = localStorage.getItem('theme');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // No saved preference, fall back to OS setting
        theme = 'dark';
    }

    theme === 'dark' ? enableDarkMode() : disableDarkMode();
}

// Apply theme on page load
detectColorScheme();

// Sync theme with OS changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only auto-change if user hasn’t explicitly set a theme
    if (!localStorage.getItem('theme')) {
        e.matches ? enableDarkMode() : disableDarkMode();
    }
});

// Add event listener to the dark mode button toggle (only if it exists)
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        localStorage.getItem('theme') === 'light'
            ? enableDarkMode()
            : disableDarkMode();
    });
}
