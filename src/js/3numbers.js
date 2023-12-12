
function findAndDisplayHighestNumber() {
    let a = parseFloat(document.getElementById("input-number-1").value);
    let b = parseFloat(document.getElementById("input-number-2").value);
    let c = parseFloat(document.getElementById("input-number-3").value);

    const mostNumber = findHighestNumber(a, b, c);

 
    console.log("Most Number: ", mostNumber);
  }

  function findHighestNumber(a, b, c) {

    return Math.max(a, b, c);
  }