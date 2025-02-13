document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para las imágenes de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200); // Añade un retraso para cada imagen
    });

    // Botón de "Volver arriba"
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Interacción con el menú de navegación
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Animación al presionar el botón "Descubrir más"
    const discoverMoreButton = document.getElementById('discover-more');
    discoverMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('servicios').scrollIntoView({
            behavior: 'smooth'
        });
    });
});