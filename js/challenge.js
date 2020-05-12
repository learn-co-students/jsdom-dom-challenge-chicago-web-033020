const [minus, plus, heart, pause, counter, submit, list, comment, userLikes] = ['minus', 'plus', 'heart', 'pause', 'counter', 'submit', 'list', 'comment-input', 'user-likes'].map((id) => {return document.getElementById(id)})
const div = document.querySelector('div')

const ticker = setInterval(myTimer, 1000);

const likeObj = {}

function likeCounter(i) {
    return likeObj[i] ? likeObj[i] : 0
}

heart.addEventListener("click",
    function() {
        let i = parseInt(counter.innerHTML)
        likeObj[i] = (likeObj[i] ? likeObj[i] + 1 : 1)
        userLikes.innerHTML = likeObj[i]
        console.log(`Number ${i} now has ${likeObj[i]} like${likeObj[i] !== 1 ? 's' : ''}!`)
    }
)

pause.addEventListener("click",
    function() {
        pause.innerHTML = (pause.innerHTML === 'pause' ? 'resume' : 'pause')
    }
)

plus.addEventListener("click",
    function() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1
        console.log("Just added a like!")
    }
)

minus.addEventListener("click",
    function() {
        const currLikes = Math.max(parseInt(counter.innerHTML))
        if (currLikes > 0) {
            counter.innerHTML = parseInt(counter.innerHTML) - 1
            console.log("Just subtracted a like!")
        }
    }
)

submit.addEventListener('click',
    function(e) {
        e.preventDefault()
        let par = document.createElement('p')
        par.innerHTML = comment.value
        list.appendChild(par)
        console.log("Added a comment!")
        comment.value = ""
    }
)

function myTimer() {
    if (pause.innerHTML === 'pause') {
        let parsedInt = parseInt(counter.innerHTML)
        counter.innerHTML = parsedInt + 1
        userLikes.innerHTML = likeCounter(parsedInt)
    }
}

