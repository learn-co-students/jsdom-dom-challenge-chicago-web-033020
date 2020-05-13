
const timer = setInterval(function() {
  var counter = document.getElementById("counter");
  var number = parseInt(counter.innerText);
  counter.innerText = number + 1}, 1000);

const minus = document.getElementById("minus");
minus.addEventListener("click", function(event) {
  const counter = document.getElementById("counter");
  const number = parseInt(counter.innerText);
  counter.innerText = number - 1
  // console.log(counter.innerText)
})

const plus = document.getElementById("plus");
plus.addEventListener("click", function(event) {
  const counter = document.getElementById("counter");
  const number = parseInt(counter.innerText);
  counter.innerText = number + 1
  // console.log(counter.innerText)
})

const heart = document.getElementById("heart");
heart.addEventListener("click", function(){
  const counter = document.getElementById("counter")
  const number = parseInt(counter.innerText);
  const newLike = document.createElement("li")
  const likesList = document.getElementsByClassName("likes")[0]
  newLike.innerText = `${number} has been liked`
  likesList.append(newLike)

  // console.log(newLike.innerText)
})


const pause = document.getElementById("pause");
pause.addEventListener("click", function(event) {
  clearInterval(timer);
  pause.innerText = "resume";
  allButtons = document.querySelectorAll("button");
  allButtons.forEach(elem => {disabled = true})
})

const input = document.getElementById("comment-form").addEventListener("submit", function(event){
  event.preventDefault();
  const comment = event.target["comment-input"].value;
  const newComment = document.createElement("p")
  newComment.innerText = comment
  document.body.append(newComment)
  event.target.reset()
})

