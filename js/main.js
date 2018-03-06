const readMoreButtons = document.getElementsByClassName('card-button-read-more');

const expand = (parentElement) => {
  parentElement.classList.add('expanded')
}

const decide =(e) => {
  e.preventDefault()

  let parent = e.target.parentElement.previousElementSibling

  if(parent.classList.contains('collapsed')) {
    parent.classList.remove('collapsed')
    expand(parent)
  } else if(parent.classList.contains('expanded')){
    parent.classList.remove('expanded')
    parent.classList.add('collapsed')
  } else {
      return
  }

}

Array.from(readMoreButtons).forEach(function(element) {
  element.addEventListener('click', decide)
})

// readMoreButtons.forEach(function(element){
//   element.addEventListener("click", decide())
// })
