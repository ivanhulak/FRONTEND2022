// ************************************************************************************************
// ********************************    Search Line   **********************************************
// ************************************************************************************************
let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');

searchSelect.addEventListener('click', function(e){
    categoriesSearch.classList.toggle('_active');
    searchSelect.classList.toggle('_active');
})

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++){
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function(e){
        checkboxCategory.classList.toggle('_active');

        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

        if (checkboxActiveCategories.length > 0){
            searchSelect.classList.add('_categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('_categories');
        }
    })
}
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
let products_body_list= document.querySelectorAll('.products__body');
let sub_text_list = document.querySelectorAll('.additional__text');


for (let item of products_body_list){
    item.addEventListener('click', function(event){
        if (event.target.closest('.more')){
            event.target.classList.toggle('active');
            for (let elem of sub_text_list){
                if (elem.previousElementSibling.classList.contains('active')){
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            }
        } else if (event.target.closest('.cart')){
            // event.target.classList.toggle('active');
            let htmlCollection = document.querySelectorAll('.item');
            let itemsArray = Array.prototype.slice.call(htmlCollection);

            console.log(itemsArray);
            for (let index = 0; index < itemsArray.length; index++){
                console.log(`Операция №:${index} ***********************`);
                let itemArray = itemsArray[index];
                const id = itemArray.dataset.id;
                if (!list_id.includes(id)){
                    let place = itemsArray.indexOf(itemArray);
                    console.log(itemsArray.splice(place, 1));
                };
            };
            console.log("itemsArray", itemsArray);
        }
    });
};
// ************************************************************************************************
// ***************************************   Cart   ***********************************************
// ************************************************************************************************
let cart = {
     'ovtuq10': 0,
     'emyds93' : 0,
     'qwert34': 0,
     'thnmk22': 0,
     'cvtyw09': 0,
     'plwry78': 0,
     'vypfr49': 0,
     'gpzyu79': 0,
     'qofut35': 0,
};
// list_id это массив с моими айдишками товаров
// Это массив того, что выбрал пользователь к покупке
let list_id = [];

let trash = document.querySelector('.cart');
let cart__info = document.querySelector('.cart__info');
let cart__label = document.querySelector('.cart__label');


// Массив с айтемами (карточками товаров) 
// Я выбираю только те item, у которых есть id в моём массиве товаров (list_id)



document.onclick = event => {
    if (event.target.classList.contains('product__add-btn')){
        event.target.classList.toggle('bought');
        cart__label.classList.add('active');
        var activeButtons = document.querySelectorAll('.product__add-btn.bought');
        cart__label.innerHTML = ' ' + activeButtons.length;
        if (activeButtons.length == 0){
            cart__label.classList.remove('active');
        }
        if (event.target.classList.contains('bought')){
            event.target.innerHTML = 'Придбано';
            addFunction(event.target.dataset.id);
        } else {
            event.target.innerHTML = 'Придбати';
            removeFunction(event.target.dataset.id);
        }
    }
}

const addFunction = id => {
    cart[id] ++;
    list_id.push(id);
    renderCart();
}
const removeFunction = id => {
    cart[id] --;
    list_id.splice(list_id.indexOf(id), 1)
    renderCart();
}
const renderCart = () => {
    console.log("Cart:", cart);
    console.log("List_id:", list_id);
}
renderCart();


trash.addEventListener('mouseover', function(event){
    cart__info.classList.add('active');
    trash.addEventListener('mouseleave', function(event){
        cart__info.classList.remove('active');
    });
});
// ******************************   Scroll to   ********************************
function setScrollIntoView(){
    const footer= document.querySelector('.footer');
    footer.scrollIntoView({block: "center", behavior: "smooth"});
}

let sale__btn = document.getElementById('sale');
sale__btn.addEventListener('click', setScrollIntoView);