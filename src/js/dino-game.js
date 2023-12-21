const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const dinoGame = document.querySelector('.dino-game');

dinoGame.addEventListener('mousedown', (event) => {
    cactus.style.animation = 'cactusMove 1.5s infinite linear';
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 550)
};

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert('GAME OVER');
        cactus.style.animation = 'none';
    };
}, 10);