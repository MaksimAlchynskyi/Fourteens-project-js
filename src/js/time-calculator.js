const inputTime = document.querySelector('.enter-number');
const searchTime = document.querySelector('.search-time');
const time = document.querySelector('.day-hour-min-sec');

searchTime.addEventListener('click', () => {
    const hours = Math.floor(inputTime.value / 60);
    const remainingMinutes = inputTime.value % 60;
    time.textContent = `${hours}:${remainingMinutes}`
});