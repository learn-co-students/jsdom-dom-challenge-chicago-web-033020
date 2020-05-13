document.addEventListener("DOMContentLoaded", function() {

    console.log("DOM Loaded");

});

// ---- ** TIMER ** ----
const getCounter = document.querySelector("#counter");

let count = 0;

// include second arg, default will make timer go super fast
const timerIntervals = setInterval(timer, 1000);

function timer() {

    count++;

    getCounter.innerHTML = count;

}

// ---- ** INCREMENT & DECREMENT ** ----
const minusButton = document.querySelector("#minus");

const plusButton = document.querySelector("#plus");

minusButton.addEventListener("click", function() {
    // console.log("Clicked");
    // console.log(count);
    count--;

    getCounter.innerHTML = count;

});

plusButton.addEventListener("click", function() {
    // console.log("Clicked");
    // console.log(count);
    count++;

    getCounter.innerHTML = count;

});

// ---- ** HEART / LIKE ** ----
const heartButton = document.querySelector("#heart");

heartButton.addEventListener("click", function() {

    const likesList = document.getElementsByClassName("likes")[0];

    const newLike = document.createElement("li");

    newLike.innerText = `${count} has been liked`;

    likesList.append(newLike);

    // *** need to finish - add like count ****

});

// ---- ** PAUSE ** ----

const pauseButton = document.querySelector("#pause");

// if (pauseButton.innerText == "pause") {

//     pauseButton.addEventListener("click", function() {

//         clearInterval(timerIntervals);

//         pauseButton.innerText = "resume"

//     });
// }

pauseButton.addEventListener("click", function() {
    if (pauseButton.innerText === "pause") {
        clearInterval(timerIntervals);

        pauseButton.innerText = "resume"
    } 
    else if (pauseButton.innerText === "resume") {
        setInterval(timer, 1000);
        pauseButton.innerText = "pause"
    }
});

// ** NEED TO FINISH - ADD RESUME TIME FEATURE

// pauseButton.addEventListener("click", function() {

//     clearInterval(timerIntervals);

//     pauseButton.innerText = "resume";

//     pauseButton.addEventListener("click", function() {
//         setInterval(timer, 1000);
//         pauseButton.innerText = "pause";
//     });

    // allButtons = document.querySelectorAll("button");

    // allButtons.forEach(elem => {disabled = true})

// });

// ---- ** COMMENT ** ----
document.querySelector("#comment-form").addEventListener("submit", function(event) {

    event.preventDefault();

    const getComment = event.target.querySelector("#comment-input").value;
    // console.log(getComment);

    const commentContent = document.createTextNode(getComment);

    const getList = document.querySelector("#list");

    const createParagraph = document.createElement("p");

    getList.appendChild(createParagraph).append(commentContent);

    document.getElementById("comment-form").reset();

})

