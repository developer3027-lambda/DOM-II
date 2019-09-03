// mouseover - change the bus img on mouse event

const busB = document.querySelector('.intro img');
busB.addEventListener('mouseover',(e) => {
    busB.src = 'img/fun-busB.jpg';
})

//keydown - key down event
const keyPress = document.addEventListener('keydown',(e) => {
    alert(`You pressed the ${e.key} key`);
})

//wheel