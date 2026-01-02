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

    // 3. Image Modal Lightbox
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');

    // Open modal when pet image is clicked
    document.querySelectorAll('.pet-item img').forEach(img => {
        img.addEventListener('click', (e) => {
            modal.classList.add('active');
            modalImage.src = e.target.src;
            modalImage.alt = e.target.alt;
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
