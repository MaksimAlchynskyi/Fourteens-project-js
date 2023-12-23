const scientists = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
  ];
  
  const scientistCardsContainer = document.getElementById("scientistCardsContainer");
  
  function displayScientists(scientists) {
    scientistCardsContainer.innerHTML = "";
    scientists.forEach(scientist => {
        const card = document.createElement("div");
        card.className = "scientist-card";
        card.innerHTML = `
            <p>Name: ${scientist.name}</p>
            <p>Surname: ${scientist.surname}</p>
            <p>Born: ${scientist.born}</p>
            <p>Dead: ${scientist.dead}</p>
        `;
        scientistCardsContainer.appendChild(card);
    });
  }
//   1
  function getScientists19thCentury() {
    const scientists19thCentury = scientists.filter(scientist => scientist.born >= 1800 && scientist.born <= 1899);
    displayScientists(scientists19thCentury);
  }
//   2
  function sortScientistsAlphabetically() {
    const scientistsAlphabetical = scientists.slice().sort((a, b) => a.surname.localeCompare(b.surname));
    displayScientists(scientistsAlphabetical);
  }
//   3
  function sortScientistsByYearsLived() {
    const scientistsByYearsLived = scientists.slice().sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    displayScientists(scientistsByYearsLived);
  }
//   4
  function findScientistBornLatest() {
    const latestBornScientist = scientists.reduce((latest, scientist) => (latest.born < scientist.born) ? scientist : latest);
    
    scientistCardsContainer.innerHTML = "";
        const card = document.createElement("div");
        card.className = "scientist-card";
        card.innerHTML = `
            <p>Name: ${latestBornScientist.name}</p>
            <p>Surname: ${latestBornScientist.surname}</p>
            <p>Born: ${latestBornScientist.born}</p>
            <p>Dead: ${latestBornScientist.dead}</p>
        `;
        scientistCardsContainer.appendChild(card);
  }
//   5
  function findAlbertEinsteinBirthYear() {
    const albertEinsteinBirthYear = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein").born;
    console.log(albertEinsteinBirthYear);
    alert(`Birth year of Albert Einstein: ${albertEinsteinBirthYear}`)
  }
//   6
  function finScientistsWithCSurname() {
    const scientistsWithCSurname = scientists.filter(scientist => scientist.surname.startsWith("C"));
    displayScientists(scientistsWithCSurname);
  }
//   7
  function deleteScientistsWithoutAName() {
    const scientistsWithoutAName = scientists.filter(scientist => !scientist.name.startsWith("A"));
    displayScientists(scientistsWithoutAName);
  }
//   8
  function findLongestLivedScientistAndShortestLivedScientist() {
    const [longestLivedScientist, shortestLivedScientist] = scientists.reduce(([longest, shortest], scientist) => {
      const yearsLived = scientist.dead - scientist.born;
      return [
          (yearsLived > longest.dead - longest.born) ? scientist : longest,
          (yearsLived < shortest.dead - shortest.born) ? scientist : shortest
      ];
    }, [scientists[0], scientists[0]]);

    console.log(longestLivedScientist);
    scientistCardsContainer.innerHTML = "";
    const card = document.createElement("div");
    card.className = "scientist-card";
    card.innerHTML = `
        <p>Name: ${longestLivedScientist.name}</p>
        <p>Surname: ${longestLivedScientist.surname}</p>
        <p>Born: ${longestLivedScientist.born}</p>
        <p>Dead: ${longestLivedScientist.dead}</p>
    `;
    scientistCardsContainer.appendChild(card);

    const cardTwo = document.createElement("div");
    cardTwo.className = "scientist-card";
    cardTwo.innerHTML = `
        <p>Name: ${shortestLivedScientist.name}</p>
        <p>Surname: ${shortestLivedScientist.surname}</p>
        <p>Born: ${shortestLivedScientist.born}</p>
        <p>Dead: ${shortestLivedScientist.dead}</p>
    `;
    scientistCardsContainer.appendChild(cardTwo);
  }
//   9
  function findScientistsWithMatchingInitials() {
    const scientistsWithMatchingInitials = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
    displayScientists(scientistsWithMatchingInitials);
  }

  document.querySelector(".button-scien1").addEventListener("click", getScientists19thCentury);
  document.querySelector(".button-scien2").addEventListener("click", sortScientistsAlphabetically);
  document.querySelector(".button-scien3").addEventListener("click", sortScientistsByYearsLived);
  document.querySelector(".button-scien4").addEventListener("click", findScientistBornLatest);
  document.querySelector(".button-scien5").addEventListener("click", findAlbertEinsteinBirthYear);
  document.querySelector(".button-scien6").addEventListener("click", finScientistsWithCSurname);
  document.querySelector(".button-scien7").addEventListener("click", deleteScientistsWithoutAName);
  document.querySelector(".button-scien8").addEventListener("click", findLongestLivedScientistAndShortestLivedScientist);
  document.querySelector(".button-scien9").addEventListener("click", findScientistsWithMatchingInitials);