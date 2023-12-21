
function findMaximum() {
  // Get the input values
  const number1 = parseFloat(document.querySelector('.input-number-1').value);
  const number2 = parseFloat(document.querySelector('.input-number-2').value);
  const number3 = parseFloat(document.querySelector('.input-number-3').value);

  // Find the maximum number
  const maxNumber = Math.max(number1, number2, number3);

  // Display the result
  document.getElementById('maxNumber').textContent = maxNumber;
}