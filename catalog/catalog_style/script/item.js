// описание товара при клики на товар
const cartWrapper = document.querySelector('.cart-add_block')
// добавление карточек в блок
window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-card')) {
        // document.addEventListener("click", function() {
            console.log("Открыт блок с товаром")
            blockItem = document.getElementById("page_item")
            blockItem.classList.toggle("active_page_item")
            blockItem.classList.toggle("no_active_page_item")
            console.log('клик по карточке получен')
    }
    
})   
window.addEventListener('click', function(event) {
    //Обязателная!!! проверка на атрибут data-card
    if (event.target.hasAttribute('data-card')) {
        console.log('click on button')
    const bl_hov = event.target.closest('.bl_hov')
    console.log(bl_hov)
    
    const infoCard = {
        id: bl_hov.dataset.id,
        imgSrc: bl_hov.querySelector('#coor_img_flow').getAttribute('src'),
        itemName: bl_hov.querySelector('[data-name]').innerText,
        price: bl_hov.querySelector('.price__currency').innerText,
        // but: bl_hov.querySelector('.in_backet').innerText,
    }
    console.log(infoCard)    
    // шаблон html
    const ItemHtml = `<div id="${infoCard.id}">
                        <img src="${infoCard.imgSrc}" class="img_cart-add_block">
                        <p data-name>${infoCard.itemName}</p>
                        <span>${infoCard.price}</span>
                        <br>
                        <button id="add_corzina">В корзину</button>
                    </div>`;
// вставить в блок
    cartWrapper.insertAdjacentHTML('beforeend', ItemHtml)
    }
})
// удаление блока с товаром
click_exit = document.querySelector('.clouse_block_descript')
click_exit.addEventListener("click", function(event) {
console.log("Блок с товаром закрыт")
if ("clouse_block_descript") {
    console.log('Close')
    let elem = document.querySelector('.cart-add_block')
    elem.innerHTML = '';
} 
    blockItem = document.getElementById("page_item")
    blockItem.classList.toggle("active_page_item")
    blockItem.classList.toggle("no_active_page_item")
    // очистка элемента после закрытие блока
    
})