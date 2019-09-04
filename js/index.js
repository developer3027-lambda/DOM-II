// mouseover - change the bus img on mouse event

const busB = document.querySelector('.intro img');
busB.addEventListener('mouseover',(e) => {
    busB.src = 'img/fun-busB.jpg';
})

//keydown - key down event
const keyPress = document.addEventListener('keydown',(e) => {
    alert(`You pressed the ${e.key} key`);
})

//wheel - scale when scroll with wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.25, scale), 2);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.img');
  el.onwheel = zoom;

  //load page
  const onLoad = window.addEventListener('load',(e) => {
      alert('Do NOT double click the buttons!');
  })

  //focus
  const navFocus = document.querySelectorAll('.nav-link');
  navFocus[0].addEventListener('focus',(e) => {
      navFocus[0].textContent = 'Focus';
  })

  //blur
  navFocus[0].addEventListener('blur',(e) => {
    navFocus[0].textContent = 'Home';
    navFocus[1].style.background = 'white';
})

  //select
  navFocus[1].addEventListener('click',(e) => {
    navFocus[1].style.background = 'lightgrey';
})

const btnScaleUp = document.querySelectorAll('.btn');
btnScaleUp.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        item.style.transform = 'scale(1.2)';
        item.style.background = 'lightblue';
    })
})

const btnScaleDown = document.querySelectorAll('.btn');
btnScaleDown.forEach(item => {
    item.addEventListener('mouseleave', (e) => {
        item.style.transform = 'scale(1)';
        item.style.background = 'teal';
        item.textContent = 'Sign Me Up!';
    })
})

const btnDouble = document.querySelectorAll('.btn');
btnDouble.forEach(item => {
    item.addEventListener('dblclick', (e) => {
        item.style.background = 'red';
        item.style.transform = 'scale(1.5)';
        item.textContent = 'STOP THAT!';
    })
})
//future use for button txt.
let btnAngry = ['STOP THAT!','RUDE!','WHAT!?!']
