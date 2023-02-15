const cardBacket = document.querySelector('.backet_item')

window.addEventListener('click',function(event) {
    if (event.target.hasAttribute('data-butt'))
    console.log('Кнопка в корзину нажата !')
})
window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-butt')) {
        console.log('Работаем с кнопкой в корзину')
    
    const btnBacket = event.target.closest('.bl_hov')   
    console.log(btnBacket) 

    const backetCard = {
        imgSrc: btnBacket.querySelector('#coor_img_flow').getAttribute('src'),
        itemName: btnBacket.querySelector('[data-name]').innerText,
        price: btnBacket.querySelector('.price__currency').innerText,
    }
    console.log(backetCard)

    const ItemBacketHtml = `<div class="backet_item">
                                <img src="${backetCard.imgSrc}" id="backet_img">
                                <p>${backetCard.itemName}</p>
                                <span>${backetCard.price}</span>
                                <br>
                                <button>Удалить товар</button><button id="">Оплатить</button>
                                <br>
                                <img src="../img/Line 220.png" >
                            </div>`;
        cardBacket.insertAdjacentHTML('beforeend', ItemBacketHtml)
        }
})