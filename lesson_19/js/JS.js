"use strict"

// слайдер

function filterProducts() {
    const selectedFilter = document.querySelector('.items-category__input-bottom:checked').parentNode.getAttribute('data-filter');
    const allCards = document.querySelectorAll('.prod-card__article-bottom');

    allCards.forEach(card => {
        if (selectedFilter === 'all' || card.classList.contains(selectedFilter)) {
            card.classList.add('show');
            card.style.display = '';
        } else {
            card.classList.remove('show');
            card.style.display = 'none';
        }
    });

    mySwiper.update();
    checkAndToggleSlider();
}

const mySwiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 24,

    breakpoints: {
        1096.98: {
            slidesPerView: 4,
        },
        792.98: {
            slidesPerView: 3,
        },
        438.98: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});

function checkAndToggleSlider() {
    const allCards = document.querySelectorAll('.prod-card__article-bottom');
    let visibleCardsCount = 0;

    allCards.forEach(card => {
        if (card.offsetParent !== null) {
            visibleCardsCount++;
        }
    });

    console.log(`Visible cards: ${visibleCardsCount}`);

    if (visibleCardsCount < 5) {
        mySwiper.disable();
        document.querySelector('.swiper-button-prev').style.display = 'none';
        document.querySelector('.swiper-button-next').style.display = 'none';
        console.log('Slider disabled');
    } else {
        mySwiper.enable();
        document.querySelector('.swiper-button-prev').style.display = '';
        document.querySelector('.swiper-button-next').style.display = '';
        console.log('Slider enabled');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    filterProducts();
    document.querySelector('.items-category__list-bottom').addEventListener('click', function () {
        setTimeout(function () {
            filterProducts();
        }, 100);
    });
});


document.addEventListener('DOMContentLoaded', function () {

    // пошук

    (function () {
        const searchButton = document.getElementById('searchButton');
        const searchWindow = document.getElementById('searchWindow');
        const searchInput = document.getElementById('searchInput');
        const form = document.querySelector('form');

        function resetSearch() {
            searchWindow.classList.add('search__hidden');
            searchWindow.classList.remove('search__window');
            searchButton.type = 'button';
            searchInput.value = '';
        }

        searchButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (!searchWindow.classList.contains('search__hidden')) {
                if (searchInput.value.trim() !== '') {
                    form.submit();
                }
                resetSearch();
                return;
            }

            searchWindow.classList.remove('search__hidden');
            searchWindow.classList.add('search__window');

            searchButton.type = 'submit';

            searchInput.focus();
        });

        document.addEventListener('click', (event) => {
            if (!searchWindow.classList.contains('search__hidden') && !event.target.closest('.search')) {
                resetSearch();
            }
        });

        searchWindow.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                form.submit();
                resetSearch();
            }
        });
    })();

    // керування шапкою

    (function () {
        window.addEventListener('scroll', function () {
            var headerContainer = document.querySelector('.header__container');
            if (window.scrollY > 1) {
                headerContainer.classList.add('shrink');
            } else {
                headerContainer.classList.remove('shrink');
            }
        });
    })();

    // керування бургером

    (function () {

        const toggleButton = document.getElementById('toggleButton');
        const bottomElement = document.querySelector('.bottom');
        const menuItems = document.querySelectorAll('.bottom');

        function toggleTransform() {
            toggleButton.classList.toggle('active');
            bottomElement.classList.toggle('active');
        }

        toggleButton.addEventListener('click', toggleTransform);

        document.addEventListener('click', function (event) {
            if (!toggleButton.contains(event.target) && !bottomElement.contains(event.target)) {
                toggleButton.classList.remove('active');
                bottomElement.classList.remove('active');
            }
        });

        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                toggleButton.classList.remove('active');
                bottomElement.classList.remove('active');
            });
        });
    })();
});


// фільтри товарів

// верхній блок
//=============

document.querySelectorAll('.items-category__label-bottom').forEach(label => {

    label.addEventListener('click', () => {
        const filter = label.getAttribute('data-filter');
        const products = document.querySelectorAll('.prod-card__article-bottom')
        products.forEach(product => {
            if (filter === 'all') {
                product.classList.add('show');
            } else {
                if (product.classList.contains(filter)) {
                    product.classList.add('show');
                } else {
                    product.classList.remove('show');
                }
            }
        });
    });
});
document.querySelector('[data-filter="all"]').click();

// нижній блок
//============

document.querySelectorAll('.items-category__label').forEach(label => {

    label.addEventListener('click', () => {
        const filter = label.getAttribute('data-filter');
        const products = document.querySelectorAll('.prod-card__article')
        products.forEach(product => {
            if (filter === 'all') {
                product.classList.add('show');
            } else {
                if (product.classList.contains(filter)) {
                    product.classList.add('show');
                } else {
                    product.classList.remove('show');
                }
            }
        });
    });
});
document.querySelector('[data-filter="all"]').click();