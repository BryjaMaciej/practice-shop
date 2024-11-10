const measure = document.querySelector('#units');
const right = document.querySelector('#convert-to-right');
const left = document.querySelector('#convert-to-left');
const tleft = document.querySelector('#tleft');
const tright = document.querySelector('#tright');
const arrow = document.querySelector('#direction');
const calculate = document.querySelector('#calculate');
let units = '';
let direction = '';
let results = '';

function selectMeasure(e) {
    units = e.target.dataset.unit;
    const buttons = measure.querySelectorAll('button');
    for (let index = 0; index < buttons.length; index++) {
       buttons[index].classList.remove('marked');
    }
    e.target.classList.add('marked');
}

function changeModeLeft(e) {
    right.classList.remove('marked');
    e.target.classList.add('marked');
    arrow.innerText = '<-';
    direction = 'left';
}

function changeModeRight(e) {
    left.classList.remove('marked');
    e.target.classList.add('marked');  
      arrow.innerText = '->';
      direction = 'right';

}

function calculateResult() {
    if(units === 'hours') {
        if(direction === 'right') {
            results = tleft.value * 60;
            tright.value = results;
        } else {
            results = tright.value / 60;
            tright.value = results;
        }
        
    } else {
        if(direction === 'right') {
            results = tleft.value * 0.62
            tright.value = results;
        } else {
            results = tright.value * 1.6
            tleft.value = results;
        }
    }
}

measure.addEventListener('click', selectMeasure);
right.addEventListener('click', changeModeRight);
left.addEventListener('click', changeModeLeft);
calculate.addEventListener('click', calculateResult);
