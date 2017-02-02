function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //using attribute selector as in css []
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; //stop function from running all together
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing') //can also use classList.remove, classList.toggle
}

function removeTransition(e) {
  if (e.propertyName != 'transform') return //skip it if it's not a transform
  this.classList.remove('playing')
  console.log(e);
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
