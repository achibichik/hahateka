// Скрипт для анимации по наведению

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.content img');

    document.addEventListener('mousemove', (event) => {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const offsetX = (event.clientX - rect.left) / rect.width;
            const offsetY = (event.clientY - rect.top) / rect.height;

            const translateX = (offsetX - 0.5) * 10; 
            const translateY = (offsetY - 0.5) * 10;

            img.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
});

