const circle = document.getElementById('circle');
const toggleButton = document.getElementById('togButton');

toggleButton.addEventListener('click', () => {
    if (circle.style.backgroundColor === 'orange') {
        circle.style.backgroundColor = 'black';
    } else {
        circle.style.backgroundColor = 'orange';
    }
});
