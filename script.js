// Základní funkce pro interaktivitu

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav .menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Formulářová validace
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
});
