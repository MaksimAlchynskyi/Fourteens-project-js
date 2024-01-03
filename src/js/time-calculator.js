const inputTime = document.querySelector('.enter-number');
const searchTime = document.querySelector('.search-time');
const time = document.querySelector('.day-hour-min-sec');

searchTime.addEventListener('click', () => {
    const oneMinuteInSeconds = 60;
    const oneHourInSeconds = 60 * oneMinuteInSeconds;
    const oneDayInSeconds = 24 * oneHourInSeconds;
    console.log(inputTime.value);
    const days = Math.floor(inputTime.value / oneDayInSeconds);
    const remainingHours = Math.floor((inputTime.value % oneDayInSeconds) / oneHourInSeconds);
    const remainingMinutes = Math.floor((inputTime.value % oneHourInSeconds) / oneMinuteInSeconds);
    const remainingSeconds = Math.floor(inputTime.value % oneMinuteInSeconds);
   return time.textContent = `${days}дн. ${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
});