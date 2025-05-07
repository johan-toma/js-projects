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
    const distanceY = buttonPosition.y - mouseY + buttonPosition.height / 2; 
    const distanceX = buttonPosition.X - mouseX + buttonPosition.width / 2;
    const horizontalOffset = buttonPosition.width / 2 + offset;
    const verticalOffset = buttonPosition.height / 2 + offset;
    
    if (findPoint(buttonPosition.left, buttonPosition.top, buttonPosition.right, buttonPosition.bottom, mouseX, mouseY)) {
        setButtonPosition((buttonPosition.x + horizontalOffset / distanceX * 10), (buttonPosition.y + verticalOffset / distanceY * 10));
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

function setButtonPosition(left, top) {
    button.style.top = `${top}px`;
    button.style.left = `${left}px`;
}
