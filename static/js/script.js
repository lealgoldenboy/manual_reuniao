document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.function img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            if (window.innerWidth >= 768) {
                img.style.maxWidth = '200px';
            } else {
                img.style.maxWidth = '100%';
            }
        });
    });

    window.addEventListener('resize', () => {
        images.forEach(img => {
            if (window.innerWidth >= 768) {
                img.style.maxWidth = '200px';
            } else {
                img.style.maxWidth = '100%';
            }
        });
    });
});