document.addEventListener('DOMContentLoaded', function () {

    // керування бургером

    (function () {
        const toggleButton = document.getElementById('toggleButton');

        function toggleTransform() {
            toggleButton.classList.toggle('active');
        }

        function closeMenu() {
            toggleButton.classList.remove('active');
        }

        toggleButton.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleTransform();
        });

        document.addEventListener('click', function (event) {
            if (!toggleButton.contains(event.target)) {
                closeMenu();
            }
        });

        toggleButton.addEventListener('blur', closeMenu);
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