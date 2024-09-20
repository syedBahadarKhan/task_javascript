const button = document.getElementById('toggleButton');
let isBlack = false;

button.addEventListener('click', () => {
    isBlack = !isBlack;
    document.body.style.backgroundColor = isBlack ? 'black' : 'white';
    document.body.style.color = isBlack ? 'white' : 'black'; // Change text color for better visibility
});