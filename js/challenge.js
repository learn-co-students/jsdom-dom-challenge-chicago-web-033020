let counter = 0
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const input = document.querySelector('#comment-input');
const subForm = document.querySelector('#comment-form');
const inputSub = document.querySelector('#submit');
const ul = document.querySelector('.likes');
const ulc = document.querySelector('.comments');
const comment = document.querySelector('#comment');
let countLike = {};

var intervalID = window.setInterval(addCounter, 1000);

function addCounter() {
  counter = parseInt(document.getElementById("counter").innerHTML);
  counter = counter + 1;
  document.getElementById("counter").innerHTML = `${counter}`;
}

function plusThis(e) {
  counter = parseInt(document.getElementById("counter").innerHTML);
  counter = counter + 1;
  document.getElementById("counter").innerHTML = `${counter}`;
}

plus.addEventListener("click", plusThis);

function minusThis(e){
  counter = parseInt(document.getElementById("counter").innerHTML);
  counter = counter - 1;
  document.getElementById("counter").innerHTML = `${counter}`;
}

minus.addEventListener("click", minusThis);

function pauseThis(e){
  if (pause.innerHTML === ' pause ') {
    pause.innerHTML = ' resume ';
    plus.disabled = true;
    minus.disabled = true;
    window.clearInterval(intervalID);
  } else {
    pause.innerHTML = ' pause '
    plus.disabled = false;
    minus.disabled = false;
    intervalID = window.setInterval(addCounter, 1000);
  }
  
}

pause.addEventListener("click", pauseThis);

function likeThis(e){
  counter = parseInt(document.getElementById("counter").innerHTML);
  
  if (counter in countLike) {
    countLike[counter] += 1;
  } else {
    countLike[counter] = 1;
  }
  let li = document.createElement('li');
  li.innerHTML = `${counter} is liked ${countLike[counter]} times`;
  ul.appendChild(li);
  // console.log(`${counter} is liked ${countLike[counter]} times`);
}


heart.addEventListener("click", likeThis);

function submitThis(e){
  e.preventDefault();
  let lic = document.createElement('li');
  lic.innerHTML = e.target.comment.value;
  ulc.appendChild(lic);
}

subForm.addEventListener("submit", submitThis);
