import '../scss/style.scss'

let swiperInstance
const breakpoint = 768

function enableSwiper() {
    swiperInstance = new Swiper('.swiper', {
        spaceBetween: 16,
        slidesPerView: 'auto',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    })
}

function handleResize() {
    const windowWidth = window.innerWidth

    if (windowWidth >= breakpoint) {
        if (swiperInstance) {
            swiperInstance.destroy(true, true)
            swiperInstance = null
        }
    } else {
        if (!swiperInstance) {
            enableSwiper()
        }
    }
}

window.addEventListener('resize', handleResize)
document.addEventListener('DOMContentLoaded', () => {
    handleResize()
})

// =======================================
const btnDropDown = document.querySelector('.services__dropdown')
const dropDownText = document.querySelector('.services__dropdown-text')
const imgDropDown = document.querySelector('.services__dropdown-svg')
const carouselList = document.querySelector('.swiper-wrapper')

function showBlockBrands() {
    if (dropDownText.innerText === 'Показать все') {
        dropDownText.innerText = 'Скрыть'
    } else dropDownText.innerText = 'Показать все'

    imgDropDown.classList.toggle('services__dropdown-svg__active')
    carouselList.classList.toggle('swiper-wrapper__active')
}

btnDropDown.addEventListener('click', showBlockBrands)

// =======================================
// burger modal

const btnBurger = document.getElementById('burger')
const modalSidebar = document.getElementById('sidebar')
const btnCloseSidebar = document.querySelector('.sidebar__menu-close')

btnBurger.addEventListener('click', () => {
    if (btnBurger) {
        modalSidebar.classList.add('sidebar__active')
        document.body.style.overflow = 'hidden'
    }
})

btnCloseSidebar.addEventListener('click', () => {
    if (btnCloseSidebar) {
        modalSidebar.classList.remove('sidebar__active')
        document.body.style.overflow = 'auto'
    }
})
