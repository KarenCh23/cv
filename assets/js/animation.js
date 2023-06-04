// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {



    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }


    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }


    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
     
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }

    


  }
  
  // ——————————————————————————————————————————————————
  // HOME-PAGE SECRET CODE ANIMATION
  // ——————————————————————————————————————————————————
  
  let phrases = [
    'Bienvenue,',
    'Je m\'appelle Karen',
    'développeuse web front-end',
    'découvrez mon profil !',
  ]
  
  const el = document.querySelector('.text-animation')
  let fx = new TextScramble(el)
  let counter = 0
  

  const next = () => {
    fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 600)
    })
    counter = (counter + 1) % phrases.length

  }


let Interval = setInterval(next, 20);
const buttonElement = document.querySelector('#secret-code')

const handleSecretClick = (event) => {

    const secretbtn = event.currentTarget;

    if (secretbtn) {
    clearInterval(Interval);
      buttonElement.style.display = "none";
    
    }
} 
 
const btn = buttonElement.addEventListener('click', handleSecretClick)

// ——————————————————————————————————————————————————
  // BACK TO HOME PAGE BUTTON 
  // ——————————————————————————————————————————————————
let mybutton = document.getElementById("back-home");

// When the user scrolls down 20px from the top of the page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} 

// When the user clicks on the button, scroll top + go back to the home menu
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ——————————————————————————————————————————————————
  // SKILLS PAGE ANIMATION
  // ——————————————————————————————————————————————————
let skillTitle = document.querySelector('#skill-title')
  
  let prefix = 'I work with '
  let skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'a touch of..',
    'art & creativity',
    'PHP & MySQL',
  ].map(s => `${s}.`)
  const delay = 2
  const step = 1
  const tail = 5
  const timeout = 75
  
  
  const colors = [
    'lightSeaGreen',
    'paleGreen',
    'limeGreen',
    'lightSkyBlue',
    'blue',
    'mediumBlue',
    'azur',
    'yellow',
    'cyan',
    'aqua',
    'blueViolet',
  ]


  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  function getRandomChar() {
    return String.fromCharCode(Math.random() * (127 - 33) + 33)
  }
  function getRandomColoredString(n) {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < n; i++) {
      const char = document.createElement('span')
      char.textContent = getRandomChar()
      char.style.color = getRandomColor()
      fragment.appendChild(char)
    }
    return fragment
  }
  
  const $ = {
    text: '',
    prefixP: -tail,
    skillI: 0,
    skillP: 0,
    direction: 'forward',
    delay,
    step,
  }
  
  function render() {
    const skill = skills[$.skillI]
  
    if ($.step) {
      $.step--
    } else {
      $.step = step
      if ($.prefixP < prefix.length) {
        if ($.prefixP >= 0) {
          $.text += prefix[$.prefixP]
        }
        $.prefixP++
      } else {
        if ($.direction === 'forward') {
          if ($.skillP < skill.length) {
            $.text += skill[$.skillP]
            $.skillP++
          } else {
            if ($.delay) {
              $.delay--
            } else {
              $.direction = 'backward'
              $.delay = delay
            }
          }
        } else {
          if ($.skillP > 0) {
            $.text = $.text.slice(0, -1)
            $.skillP--
          } else {
            $.skillI = ($.skillI + 1) % skills.length
            $.direction = 'forward'
          }
        }
      }
    }
  
    skillTitle.textContent = $.text

    skillTitle.appendChild(getRandomColoredString(
      $.prefixP < prefix.length ?
      Math.min(tail, tail + $.prefixP):
      Math.min(tail, skill.length - $.skillP)))
    setTimeout(render, timeout)

  }
  setTimeout(render, 500)

// ——————————————————————————————————————————————————
  // CONTACT PAGE ANIMATION
  // ——————————————————————————————————————————————————

//   skillTitle = document.querySelector('#contact-title')
//   prefix = 'Like what you see ? '
//   skills = [
//     'Let\'s meet !',
//     'talk',
//     'and work together !'
    
//   ].map(s => `${s}.`)


// render()

