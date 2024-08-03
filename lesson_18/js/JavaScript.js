// керування бургером

const toggleButton = document.getElementById('toggleButton');
function toggleTransform() {
    toggleButton.classList.toggle('active');
}
toggleButton.addEventListener('blur', () => {
    toggleButton.classList.remove('active');
});