
document.addEventListener('DOMContentLoaded', function () {

    //пошук

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
                form.submit();
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

        // Знаходимо кнопку бургера та елемент .bottom
        const toggleButton = document.getElementById('toggleButton');
        const bottomElement = document.querySelector('.bottom');

        // Функція для переключення класу active у обох елементів
        function toggleTransform() {
            toggleButton.classList.toggle('active');
            bottomElement.classList.toggle('active');
        }

        // Додаємо обробник події click до кнопки бургера
        toggleButton.addEventListener('click', toggleTransform);

        // Закриваємо меню при натисканні на будь-яку частину екрану
        document.addEventListener('click', function (event) {
            if (!toggleButton.contains(event.target) && !bottomElement.contains(event.target)) {
                toggleButton.classList.remove('active');
                bottomElement.classList.remove('active');
            }
        });

        // Запобігаємо закриттю меню при натисканні всередині самого меню
        bottomElement.addEventListener('click', function (event) {
            event.stopPropagation();
        });


        // const toggleButton = document.getElementById('toggleButton');

        // function toggleTransform() {
        //     toggleButton.classList.toggle('active');
        // }

        // function closeMenu() {
        //     toggleButton.classList.remove('active');
        // }

        // toggleButton.addEventListener('click', function (event) {
        //     event.stopPropagation();
        //     toggleTransform();
        // });

        // document.addEventListener('click', function (event) {
        //     if (!toggleButton.contains(event.target)) {
        //         closeMenu();
        //     }
        // });

        // toggleButton.addEventListener('blur', closeMenu);
    })();
});