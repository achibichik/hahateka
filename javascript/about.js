
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');

    content.addEventListener('mouseenter', () => {
        content.classList.add('expanded');
    });

    content.addEventListener('mouseleave', () => {
        content.classList.remove('expanded');
    });
});
