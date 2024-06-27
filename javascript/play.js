document.addEventListener('DOMContentLoaded', function() {
    const stepImages = document.querySelectorAll('.stepImages img');
    const dropZone = document.getElementById('dropZone');
    let  width=0
    let hieght=0
    

    // Назначаем обработчик события dragstart для всех изображений в stepImages
    stepImages.forEach(img => {
        img.addEventListener('dragstart', () => {
            handleDragStart()
            
        });

        width=img.offsetWidth
        hieght=img.offsetHeight
        console.log(img.offsetHeight)
    });

    // Назначаем обработчики событий dragover и drop для dropZone
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();

        const id = event.dataTransfer.getData('text/plain');
        const draggedImg = document.getElementById(id);

        // Проверяем, что элемент был перетащен из stepImages
        if (draggedImg && draggedImg.parentElement.classList.contains('stepImages')) {
            // Удаляем изображение из step1
            draggedImg.parentElement.removeChild(draggedImg);

            // Создаем новый элемент img для step2
            const newImg = new Image();
            newImg.src = draggedImg.src;
            newImg.style.position = 'absolute'; // Позиционируем поверх других элементов
            
            const rect = dropZone.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            console.log(draggedImg.offsetHeight)

            // Устанавливаем позицию изображения
            newImg.style.top = `${offsetY - (hieght/2.5)}px`; // Выравниваем по центру
            newImg.style.left = `${offsetX - (width/2.5)}px`;


            dropZone.appendChild(newImg);
        }
    }

    
});
