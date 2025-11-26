
const slider = document.getElementById('slider');

document.querySelector('.slide-btn.left').onclick = () => {
    slider.scrollLeft -= 320; 
};

document.querySelector('.slide-btn.right').onclick = () => {
    slider.scrollLeft += 320;
};

