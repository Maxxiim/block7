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
// dropdown brand
const btnDropDown = document.querySelector('.services__dropdown')
const dropDownText = document.querySelector('.services__dropdown-text')
const imgDropDown = document.querySelector('.services__dropdown-svg')
const carouselList = document.querySelector('.swiper-wrapper')

function showBlockBrands() {
    if (dropDownText.innerText === 'Показать все') {
        imgDropDown.classList.toggle('services__dropdown-svg__active')
        dropDownText.innerText = 'Скрыть'
    } else dropDownText.innerText = 'Показать все'

    imgDropDown.classList.toggle('services__dropdown-svg__active')
    carouselList.classList.toggle('swiper-wrapper__active')
}

btnDropDown.addEventListener('click', showBlockBrands)

// =======================================
// dropdown techniq

const btnDropDownTechniq = document.getElementById('btnTechniq')
const dropDownTextTechniq = document.getElementById('techniqText')
const imgDropdownTechniq = document.getElementById('imgSvgTechniq')
const carouselListTechniq = document.querySelector('.swiper-wrapper__techniq')

btnDropDownTechniq.addEventListener('click', () => {
    if (dropDownTextTechniq.innerText === 'Показать все') {
        dropDownTextTechniq.innerText = 'Скрыть'
    } else dropDownTextTechniq.innerText = 'Показать все'

    imgDropdownTechniq.classList.toggle('services__dropdown-svg__active')
    carouselListTechniq.classList.toggle('swiper-wrapper__techniq-active')
})

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

// =======================================
// feedback modal

const btnFeeedback = document.querySelector('.sidebar__footer-message')
const btnFeedbackClose = document.querySelector('.feedback__menu-close')
const modalFeedback = document.getElementById('feedback')

btnFeeedback.addEventListener('click', () => {
    modalFeedback.classList.add('feedback__active')
    document.body.style.overflow = 'hidden'
})

btnFeedbackClose.addEventListener('click', () => {
    modalSidebar.classList.remove('sidebar__active')
    modalFeedback.classList.remove('feedback__active')
    document.body.style.overflow = 'auto'
})

// =======================================
// feedback-call modal

const btnFeedbackCall = document.querySelector('.sidebar__footer-phone')
const modalFeedbackCall = document.getElementById('feedbackCall')
const btnFeedblackClose = document.querySelector('.feedbackcall__menu-close')

btnFeedbackCall.addEventListener('click', () => {
    modalFeedbackCall.classList.add('feedback-call__active')
    document.body.style.overflow = 'hidden'
})

btnFeedblackClose.addEventListener('click', () => {
    modalSidebar.classList.remove('sidebar__active')
    modalFeedbackCall.classList.remove('feedback-call__active')
    document.body.style.overflow = 'auto'
})

// =======================================
// dropdown text

const dropdownTextBtn = document.querySelector('.content__descr-more')
const dropdownText = document.querySelector('.content__descr-more-text')
const hiddenText = document.querySelector('.content__descr__hidden')
const dropDownTextHidden = document.querySelector('.content__descr-text-more')
const dropdownSvgText = document.querySelector('.content__descr-more-svg')

function showContentText() {
    if (dropdownText.innerText === 'Читать далее') {
        dropdownText.innerText = 'Cкрыть'
    } else dropdownText.innerText = 'Читать далее'

    dropdownSvgText.classList.toggle('content__descr-more-svg__active')
    hiddenText.classList.toggle('content__descr__hidden-active')
    dropDownTextHidden.classList.toggle('content__descr-text-more__active')
}

dropdownTextBtn.addEventListener('click', showContentText)
