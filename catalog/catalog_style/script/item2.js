// открытие блока
function OnBl () {
    blockItem = document.getElementById("page_item")
            blockItem.classList.toggle("active_page_item")
            blockItem.classList.toggle("no_active_page_item")
            console.log('клик по карточке получен')
}
// закрытие блока
function OffBl () {
    blockItemof = document.getElementById("page_item")
    blockItemof.classList.toggle("active_page_item")
    blockItemof.classList.toggle("no_active_page_item")
    console.log('клик по закрытию получен')
}
// добавление товара в карточку
const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function(event) {
    // проверка на атрибут data-card
    if (event.target.hasAttribute('data-card')) {
        console.log('атрибут data-card присутствует')
    }
    // поиск карточки по которой был клик
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


})