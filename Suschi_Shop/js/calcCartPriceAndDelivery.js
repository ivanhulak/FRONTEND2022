function calcCartPriceAndDelivery(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    

    // Общая стоимость товаров
    let priceTotal = 0;
    

    priceElements.forEach(function(item){
        // Находим количество товаров
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

        // Добавляем стоимость товара в общую стоимость (количество * цену)
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;


    if (priceTotal > 0){
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    // Акция, если цена будет больше 600 грн, то доставка бесплатная
    if (priceTotal >= 600){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '40 грн';
    }
}