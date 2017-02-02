window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //using attribute selector as in css []
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; //stop function from running all together
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing') //can also use classList.remove, classList.toggle
})

const keys = document.querySelectorAll('.key')
