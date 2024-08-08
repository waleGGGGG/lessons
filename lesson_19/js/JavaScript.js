
// керування бургером

const toggleButton = document.getElementById('toggleButton');
function toggleTransform() {
    toggleButton.classList.toggle('active');
}
toggleButton.addEventListener('blur', () => {
    toggleButton.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function () {

    // керування пошуком

    (function () {
        const searchButton = document.getElementById('searchButton');
        const searchWindow = document.getElementById('searchWindow');
        const searchInput = document.getElementById('searchInput');
        const form = document.querySelector('form');

        searchButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (!searchWindow.classList.contains('search__hidden')) {
                form.submit();
                return;
            }

            searchWindow.classList.remove('search__hidden');
            searchWindow.classList.add('search__window');

            searchButton.type = 'submit';

            searchInput.focus();
        });

        document.addEventListener('click', (event) => {
            if (!searchWindow.classList.contains('search__hidden') && !event.target.closest('.search')) {
                searchWindow.classList.add('search__hidden');
                searchWindow.classList.remove('search__window');
                searchButton.type = 'button';
            }
        });

        searchWindow.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                form.submit();
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
});