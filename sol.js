const counter = document.getElementById("counter")
const pause = document.getElementById("pause")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const form = document.getElementById("comment-form")
const likesList = document.getElementsByClassName("likes")
const buttons = document.querySelectorAll("button")
const count = {}

let timer = window.setInterval(countUp, 1000)

// Incrementing a count-up timer
function countUp(){
return counter.innerText = parseInt(counter.innerText) + 1
}

//Pause the timer
function pauseTimer() {
  if (pause.textContent === "pause") {
    window.clearInterval(timer)
    buttons.forEach(function(button){
      if (button === pause) {
        button.textContent = "resume"
      } else {
      button.disabled = true
      }
    })
  } else {
    timer = window.setInterval(countUp, 1000)
    buttons.forEach(function(button){
      if (button === pause) {
        button.textContent = "pause"
      } else {
      button.disabled = false
      }
    })
  }
}

//Decrease timer by 1
function decrementCounter(event) {
  return counter.innerText = parseInt(counter.innerText) - 1
}

//Increase timer by 1
function incrementCounter(event) {
  return counter.innerText = parseInt(counter.innerText) + 1
}

// Like a number
function addLike() {
  const counterNum = counter.innerText
  
  if (count[counterNum]) {
    count[counterNum] += 1
    let lists = likesList[0].childNodes
    for (let i=0; i < lists.length; i++) {
      if (lists[i].textContent[0] === counterNum) {
          lists[i].textContent = `${counterNum} has been liked ${count[counterNum]} times`
      }}
  } else {
    count[counterNum] = 1
    const newLi = document.createElement("li")
    newLi.textContent = `${counterNum} has been liked 1 time`
    likesList[0].appendChild(newLi)
  }
}

//Add a comment
function addComment(event) {
  event.preventDefault()
  const commentText = event.target.comment.value
  const currentDiv = document.getElementById("list")
  const newP = document.createElement("p")
  newP.textContent = commentText
  currentDiv.appendChild(newP)
  form.reset()
}

heart.addEventListener('click', addLike)
pause.addEventListener("click", pauseTimer)
form.addEventListener('submit', addComment)
minus.addEventListener('click', decrementCounter)
plus.addEventListener('click', incrementCounter)