// script.js

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('toggle-button');
    body.classList.toggle('night');

    if (body.classList.contains('night')) {
        button.textContent = 'Switch to Day Mode';
        localStorage.setItem('theme', 'night');
    } else {
        button.textContent = 'Switch to Night Mode';
        localStorage.setItem('theme', 'day');
    }
}

// Add animation class when elements are in view
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });

    // Check theme on page load
    const theme = localStorage.getItem('theme');
    if (theme === 'night') {
        document.body.classList.add('night');
        document.getElementById('toggle-button').textContent = 'Switch to Day Mode';
    }
});
