


// Nav Links
const menu = document.getElementById('navMenu')
const links = menu.querySelectorAll('a')
const toggle = document.getElementById('toggle')
// Dots
const dotsMenu = document.getElementById('dots')
const dots = dotsMenu.querySelectorAll('.dot')

// Wrapper
const wrapper = document.querySelector('.outer-wrapper');

// Active Link
menu.addEventListener('click', (e) => {
  // e.preventDefault()
  
  if (e.target.tagName !== 'A') {
    return
  } else {
    links.forEach(link => {
      link.classList.remove('active')
    });
    e.target.classList.add('active')
    toggle.checked = false
  }
})
// Active dots
dotsMenu.addEventListener('click', (e) => {
  // e.preventDefault()  
  
  
  if (e.target.tagName !== 'A') {
    return
  } else {
    console.log(e.target.tagName);
    dots.forEach(dot => {
      dot.classList.remove('active')
    });

    if(e.target.tagName === 'DIV'){
      e.target.classList.add('active')
    }else{
      e.target.parentElement.classList.add('active')
    }
    toggle.checked = false
  }
})



let titleClass = 'fadeInDown'
let imgClass = 'fadeIn'
let titles = document.querySelectorAll('.section__titles')
let images = document.querySelectorAll('.image')
let width = window.innerWidth;
let i;

window.onscroll = function() {
  let scrollLeft = window.pageXOffset;
	switch (scrollLeft) {
		case width:
			i = 0;
      
      titles[i].classList.add(titleClass)
      images[i].classList.add(imgClass)

			break;
		case 2*width:
			i = 1;
			titles[i].classList.add(titleClass)
      images[i].classList.add(imgClass)

			break;
		case 3*width:
			i = 2;
			titles[i].classList.add(titleClass)
      images[i].classList.add(imgClass)

			break;
		case 4*width:
			i = 3;
			titles[i].classList.add(titleClass)
      images[i].classList.add(imgClass)

			break;
		case 5*width:
			i = 4;
			titles[i].classList.add(titleClass)
      images[i].classList.add(imgClass)

			break;		
  }
}


class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]LOPHMB{}—=+*^?#________'
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


const phrases = [
  'современном',
  'красивом',
  'технологичном',
  'простом',
  'великолепном',
  'ярком',
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2000)
  })
  counter = (counter + 1) % phrases.length
}

next()


particlesJS.load('particles', './js/particles.json');