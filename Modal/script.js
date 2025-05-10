const modalButton = document.querySelector('.modal-button');
let modal = document.querySelector('.modal-container');
const close = document.querySelector('.close');

modalButton.addEventListener('click', () => {
    modal.style.display = "block";
});

close.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}

