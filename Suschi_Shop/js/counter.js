// Добавляю прослушку на все окно
window.addEventListener('click', function(event){

    // Обьявляю переменную для счётчика, которая видна во всех блоках
    let counter;

    if (event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus'){
        // Нахожу счётчик
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
        
    }


    // Проверяем или нажата кнопка Плюс
    if (event.target.dataset.action === 'plus'){
        // Меняю цыфру количества выбраного товара
        counter.innerText = ++counter.innerText;
    };


    // Проверяем или нажата кнопка Минус
    if (event.target.dataset.action === 'minus'){


        // Меняю цыфру количества выбраного товара + проверка, чтобы не писать отрицательные значения
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        // Если мы уменьшаем занчение В КОРЗИНЕ до 0, то выбраный товар удаляется из корзины
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText)  === 1){
            // Удаляем элемент из корзины
            event.target.closest('.cart-item').remove();
            toggleCartStatus();

            calcCartPriceAndDelivery();
        };


    };


    // Проверяем, что мы кликнули на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    }

});


