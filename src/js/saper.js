const element = document.querySelector('#elements');
const display = document.querySelector('#points');
const end = document.querySelector('#message');
let count = 0;

function makeNoise(e) {
    const td = e.target.closest('td');
    e.target.classList.add('show');

    if(td.dataset.points) {
        count += Number(td.dataset.points);
        display.innerHTML = count;
    }

    if(td.dataset.isBomb || count>=150) {
        end.innerText = "Koniec gry"
    }

}

element.addEventListener('click', makeNoise);