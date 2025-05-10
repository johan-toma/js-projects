const expandButton = document.querySelector('.expandable-btn');
let content = document.querySelector('.content');

expandButton.addEventListener('click', () => {
    console.log(content.style.opacity)
    if(content.style.opacity === "1") {
        content.style.opacity = "0";
    }
    else {
        content.style.opacity = "1";
    }
});