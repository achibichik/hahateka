document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.content img[draggable="true"]');
    const bascet = document.querySelector('.bascet');
    const bascetTotal = bascet.querySelector('h2:last-of-type');

    function handleDragStart(event) {
        const price = event.target.getAttribute('data-price');
        event.dataTransfer.setData('text/plain', price);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const priceText = event.dataTransfer.getData('text/plain');
        const priceValue = parseFloat(priceText);

        if (isNaN(priceValue)) {
            alert("Произошла ошибка при преобразовании значения цены.");
            return;
        }

        const currentTotal = parseFloat(bascetTotal.innerText.replace(/\./g, '').replace('₽', '').replace(',', '.'));
        const newTotal = (currentTotal + priceValue).toFixed(2).replace('.', ',');

        bascetTotal.innerText = `${newTotal.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₽`;
    }

    items.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
    });

    bascet.addEventListener('dragover', handleDragOver);
    bascet.addEventListener('drop', handleDrop);
});