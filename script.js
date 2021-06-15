window.onload = function () {
    const BODY = document.querySelector('body');
    const MENU = document.getElementById('menu');
    const MOBILE_MENU = document.querySelector('.headerMobileMenu');
    const BURGER = document.getElementById('burger');
    let arrowNext= document.getElementById('arrow-next');
    let slidersDisplay=document.querySelector('.sliderItemFrontSlide');
    let slidersBackDisplay=document.querySelector('.sliderItemBackSlide');
    let  arrowPrev= document.getElementById('arrow-prev');

//Открываем меню бургер

    BURGER.addEventListener('click', (e) => {
        if (BURGER.classList.contains('headerBurgerButtonActive')) {
            BURGER.classList.remove('headerBurgerButtonActive');
            document.getElementById('mobileMenu').classList.add('headerMobileMenuHidden');
            BODY.classList.remove('scroll-hidden');
        } else {
            BURGER.classList.add('headerBurgerButtonActive');
            document.getElementById('mobileMenu').classList.remove('headerMobileMenuHidden');
            BODY.classList.add('scroll-hidden');
        }
    })

    arrowNext.addEventListener('click', (e) => {
        slidersDisplay.style.display='none'
        slidersBackDisplay.style.display= 'block'
    })

    arrowPrev.addEventListener('click', (e) => {
        slidersDisplay.style.display='block'
        slidersBackDisplay.style.display= 'none'
    })
    randomButton.addEventListener('click', (e) => {
        if (randomButton.classList.contains('portfolioTabsItemActive')) {
            randomButton.classList.remove ('portfolioTabsItemActive')
        } else {
            randomButton.classList.add('portfolioTabsItemActive')
        }
    })

}
    let min=0;
    let max=10;
    let randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let img = document.querySelectorAll('.portfolioPhotoGridItem');

        randomButton = document.querySelectorAll('.portfolioTabsItem').forEach(randomButton => {
        randomButton.addEventListener('click', (e) => {
            img.forEach(img => img.style.order = randomNumber(min,max))

        })
    })


