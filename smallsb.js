var buttonElement = document.getElementById('GOTbutton')
var GOTtheme = new Audio("gameofthrones.mp3")

buttonElement.addEventListener('mouseenter', function () {
    console.log('I was Hovered on!!'),
    GOTtheme.play()
  })