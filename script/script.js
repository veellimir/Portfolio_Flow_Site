// выпадающее меню корзины
butt_corzin = document.getElementById("corzina")
butt_corzin.addEventListener("click", function() {
    console.log("клик работает")
    menu_corz = document.getElementById("dropdown_box")
    menu_corz.classList.toggle("hidden_menu_corz")
    menu_corz.classList.toggle("visib_menu_corz")

// добавление размытие при открытие корзины
    if("visib_menu_corz"){
        console.log("размытие фона добавленно")
        fon_filt = document.getElementById("bl_filter")
        fon_filt.classList.toggle("filt_bl")
        fon_filt.classList.toggle("filt_bl_on")  
    }  

})
// закрыть
but_close_corz = document.getElementById("close_corzina")
but_close_corz.addEventListener("click", function() {
    console.log("кнопка закрыть работает")
    menu_corz = document.getElementById("dropdown_box")
    menu_corz.classList.toggle("hidden_menu_corz")
    menu_corz.classList.toggle("visib_menu_corz")

// удаление размытие при открытие корзины
    if("close_corzina") {
        console.log('размытие фона удаленно')
        fon_filt = document.getElementById("bl_filter")
        fon_filt.classList.toggle("filt_bl_on")
        fon_filt.classList.toggle("filt_bl")
    }

})
// замена шапки при скроле
let header = document.querySelector('.header_btn'),
    headerH = document.querySelector('.header_btn').clientHeight;
    console.log(headerH)

    document.onscroll = function () {
        let scroll = window.scrollY;
        console.log(scroll)

        if (scroll > headerH) {
            header.classList.add('active')
            // document.body.style.paddingTop = headerH + 'px';
        } else {
            header.classList.remove('active')
            // document.body.removeAttribute = (style)
        }
    }

// функц кнопки смотреть каталог
function OnColor() {
    document.getElementById("btn_smotret_catalog").style.backgroundColor = '#055c48'
}
function OffColor() {
    document.getElementById("btn_smotret_catalog").style.backgroundColor = '#43FFD2'
}
// функц открытие страницы каталог в этой же вкладке
function SmotrCatalog() {
    openwin = "catalog/catalog.html"
    location.href = openwin;
}
// функц открытие страницы о нас в этой же вкладке
function OnasOpis() {
    openonas = "onas/onas.html"
    location.href = openonas;
}
function Diliv_ry () {
    openDiliv = "dilivery/dilivery.html"
    location.href = openDiliv;
}

// открытие соц сетей
function OnInsta() {
    openinst = window.open("https://www.instagram.com");
}
function OnViber() {
    openvib = window.open("https://www.viber.com/ru/")
}
function OnWhats() {
    openwhat = window.open("https://www.whatsapp.com/?lang=ru")
}

 