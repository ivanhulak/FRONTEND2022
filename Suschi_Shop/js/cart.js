// Div внутри корзины куда мы добавляем товар
const cartWrapper = document.querySelector('.cart-wrapper');


// Добавляю прослушку на все окно
window.addEventListener('click', function(event){

    // Проверяем, что кликнули на "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')){

        // Находим конпку с товаром внутри которой кликнули
        const card = event.target.closest('.card');

        // Собираем данные с этого обьекта и записываем их в productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        console.log(productInfo);

        // Проверяем есть ли товар в корзине дабы избежать дубляжа товаров
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);


        // Если товар есть в корзине
        if (itemInCart){

            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

        // Если товара нету в корзине
        } else {
            // Собранные данные подставляем в шаблон
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }


        // После нажатия кнопки "Добавить в корзину, количество сбрасывается на 1"
        // Сбрасываем количество товара в карточке после выбора
        card.querySelector('[data-counter]').innerText = '1';

        // Отображаем статус КОРЗИНЫ пустая / полная
        toggleCartStatus();

        // Пересчёт общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }
});