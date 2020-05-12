let totalSeconds = 0;
let counterText = document.getElementById('counter');
let addBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let heartBtn = document.getElementById('heart');
let pauseBtn = document.getElementById('pause');
let resumeBtn = document.getElementById('resume');

function addSec() {
    counterText.innerText = totalSeconds++;
}

addBtn.addEventListener('click', addSec);

function minusSec() {
    counterText.innerText = totalSeconds--; 
}

minusBtn.addEventListener('click', minusSec);

let interval = setInterval(addSec, 1000);

function pauseCounter() {
    clearInterval(interval);
    pauseBtn.hidden = true;
    resumeBtn.hidden = false;
    addBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
}

pauseBtn.addEventListener('click', pauseCounter);

function restartCounter() {
    interval = setInterval(addSec, 1000);
    resumeBtn.hidden = true;
    pauseBtn.hidden = false;
    addBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
}

resumeBtn.addEventListener('click', restartCounter);