document.addEventListener('DOMContentLoaded', () => {
    // Přepínání aktivní třídy pro navigační odkazy
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Formulářová validace na kontaktní stránce
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Prosím, vyplňte všechna pole.');
                event.preventDefault();
            } else {
                alert('Děkujeme za zprávu! Budeme vás kontaktovat co nejdříve.');
            }
        });
    }

    // Animace při scrollování (použijeme Intersection Observer API)
    const observerOptions = {
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.feature-item, .process-item');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
