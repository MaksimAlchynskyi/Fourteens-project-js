document.addEventListener('DOMContentLoaded', function () {
  const footballField = document.querySelector('.football-field');
  const football = document.querySelector('.football');


  footballField.addEventListener('mousemove', function (event) {
    let rect = footballField.getBoundingClientRect();


    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

  
    x = Math.max(0, Math.min(x, rect.width - football.offsetWidth));
    y = Math.max(0, Math.min(y, rect.height - football.offsetHeight));

    setTimeout(function () {
      football.style.left = x + 'px';
      football.style.top = y + 'px';
    });
  });
});