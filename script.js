const button = document.querySelector('.btn');
const offset = 100;


document.addEventListener('mousemove', (e) => {
    const buttonPosition = button.getBoundingClientRect();
    //initial position (0, 0)
    //button size 227px width 80px height 

    const mouseX = e.pageX;
    const mouseY = e.pageY;

    //left, top A
    //right, bottom B

    if(findPoint(buttonPosition.left+100, buttonPosition.top, buttonPosition.right+100, buttonPosition.bottom, mouseX, mouseY)) {
        setButtonPosition(e.target);
    }
    else if (findPoint(buttonPosition.left, buttonPosition.top, buttonPosition.right, buttonPosition.bottom, mouseX, mouseY)) {
        setButtonPosition(e.target);
    }
    
});

button.addEventListener('click', (e) => {
    alert("Nice try");
    window.close();
});

function findPoint(x1,y1,x2,y2,x,y) {

    if (x > x1 && x < x2 && y > y1 && y < y2) {
        return true; 
    }
    else {
        return false;
    }

}

function setButtonPosition(btn) {
    btn.style.right = `${Math.floor(Math.random() * 100)}px`;
    btn.style.top = `${Math.floor(Math.random() * 100)}px`

    if(Math.floor(Math.random() * 100) < 100) {
        btn.style.top = `${Math.floor(Math.random() * 300) + 100}px`
    }

    if(Math.floor(Math.random() * 100) > 100) {
        btn.style.right = `${Math.floor(Math.random()) * -10}px`;
    }
}
