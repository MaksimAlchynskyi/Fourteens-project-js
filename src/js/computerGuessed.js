let answerGueseNumberComputerGuesed = document.querySelector(".text-win-or-lose-guese-number-computer-guesed")
const checkNumberGueseNumberComputerGuesed = document.querySelector(".check-number-guese-number-computer-guesed")
const inputCheckNumberGueseNumberComputerGuesed = document.querySelector(".input-guese-number-computer-guesed")
checkNumberGueseNumberComputerGuesed.addEventListener("click", () => {
  const userInput = document.querySelector(".input-guese-number-computer-guesed").value;
      const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерация случайного числа от 1 до 10
      answerGueseNumberComputerGuesed.style.color = "red";
      if (isNaN(userInput) || userInput < 1 || userInput > 10) {
              answerGueseNumberComputerGuesed.innerHTML = "Будь ласка, введіть число від 1 до 10.";
      } else {
          if (parseInt(userInput) === randomNumber) {
              answerGueseNumberComputerGuesed.innerHTML = "Вітаю, ви вгадали число! (" + randomNumber + ")";
              answerGueseNumberComputerGuesed.style.color = "green";
            } else {
                answerGueseNumberComputerGuesed.innerHTML = "Ви програли, комп’ютер загадав (" + randomNumber + ")";
          }
      }
})  