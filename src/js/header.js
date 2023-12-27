const body = document.querySelector("body")
const p = document.querySelector("p")
const a = document.querySelector("a")
const li = document.querySelector("li")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const inputDarkmodeToggle = document.querySelector(".input-darkmode-toggle")
inputDarkmodeToggle.addEventListener("click", () => {
    if (inputDarkmodeToggle.checked) {
        if (body.style.backgroundColor = "white") {
            body.style.backgroundColor = "#1e2125";
            main.style.backgroundColor = "#1e2125";
            footer.style.backgroundColor = "#1e2125";
            // p.style.color = "white";
            // a.style.color = "white";
    }
}
else {
    if (body.style.backgroundColor = "black")  {
        body.style.backgroundColor = "white";
        main.style.backgroundColor = "white";
        footer.style.backgroundColor = "white";
        p.style.color = "black";
    }
}
})

    const modalLink = document.querySelector('.modal-link');
    const modalHeader = document.getElementById('modal-header');
    const closeModalHeader = document.querySelector('.close-modal-header');
    const closeButtonModal = document.querySelector(".button-modal-header")

    modalLink.addEventListener('click', showModal);

    closeModalHeader.addEventListener('click', closeModal);

    closeButtonModal.addEventListener('click', closeModal);

  function closeModal() {
    modalHeader.style.visibility = 'hidden';
}
function showModal() {
    modalHeader.style.visibility = 'visible';
};

function showName() {

    const enteredName = document.querySelector(".input-modal-header").value;

    modalLink.innerHTML = "Вітаємо " + enteredName;
}
closeButtonModal.addEventListener("click", showName)