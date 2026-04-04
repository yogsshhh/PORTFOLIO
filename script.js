// DOM Elements
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

// Function to toggle theme
function toggleTheme() {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    }
}

function updateThemeIcon(theme) {
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Event Listener for Theme Button
themeBtn.addEventListener('click', toggleTheme);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple reveal animation on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    
    sections.forEach(section => {
        if (section.offsetTop < scrollPos - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
