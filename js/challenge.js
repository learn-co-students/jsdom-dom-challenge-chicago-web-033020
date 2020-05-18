document.addEventListener('DOMContentLoaded', function() {

  const commentContainer = document.getElementById('list')
  const commentForm = document.getElementById('comment-form')

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const inputField = event.target.querySelector('#comment-input')
    const inputString = inputField.value

    const commentPTag = document.createElement('p')
    commentPTag.textContent = inputString

    commentContainer.appendChild(commentPTag)
  })
  
  

})