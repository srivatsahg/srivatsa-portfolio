document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Switcher Logic
    const html = document.documentElement;
    const blueBtn = document.getElementById('theme-blue');
    const greenBtn = document.getElementById('theme-green');

    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('preferred-theme', theme);
    };

    blueBtn?.addEventListener('click', () => setTheme('blue'));
    greenBtn?.addEventListener('click', () => setTheme('green'));

    // Load saved theme
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) setTheme(savedTheme);

    // 2. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
