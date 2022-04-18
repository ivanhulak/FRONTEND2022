$(function(){
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

    $('select').styler();
}); 

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