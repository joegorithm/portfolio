const img = document.querySelector(".profile-image");
const jonathanSrc = '/media/jonathan-hill.png';
const chickenSrc = '/media/white-chicken.jpg';

img.addEventListener('click', () => {
    if (img.src.endsWith('jonathan-hill.png')) {
        setTimeout(() => {
            img.src = chickenSrc;
        }, 1000);
    } else {
        img.src = jonathanSrc;
    }
});