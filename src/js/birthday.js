const input = document.querySelector('.input');
const search = document.querySelector('.search');
const text = document.querySelector('.year-you-born');

search.addEventListener('click', () => {
    if (input.value % 4 === 0) {
        text.textContent = 'Ви народилися у високосний рік!';
        text.style.color = '#039900';
    } else {
        text.textContent = 'Ви народилися не у високосний рік!';
        text.style.color = '#900';
    };
});