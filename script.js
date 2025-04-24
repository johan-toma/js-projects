const button = document.querySelector('.btn');
const body = document.body;
const img = document.querySelector('.img');

body.style.backgroundColor = "white";

button.addEventListener('click', () => {
    if(body.style.backgroundColor === 'white') {
        body.style.backgroundColor = '#4b4b4b';
        button.style.boxShadow = "0 0 0 2px yellow";
        img.src = "sun.png";
    }
    else{
        body.style.backgroundColor = "white";
        button.style.boxShadow = "0 0 0 2px black";
        img.src = "night.png";
    }
});