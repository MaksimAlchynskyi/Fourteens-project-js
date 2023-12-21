const ball = document.getElementById('ball');


    function moveBall(event) {
        const x = event.clientX;
        const y = event.clientY;
        
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    }

   
    document.addEventListener('mousemove', moveBall);