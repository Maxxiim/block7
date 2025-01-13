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
