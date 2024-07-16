// ANIMATION TEXT

let visitWindow = document.querySelector('.home')

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const textDev = document.querySelector('.home .desc')

let interval = null;

if (visitWindow) {
  window.onload = function() {
    alternateLetters()
  }

  textDev.addEventListener('mouseover', () => {
    alternateLetters()
  })
  
  const alternateLetters = () => {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      textDev.innerText = textDev.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return textDev.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= textDev.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }
}


// MENUS

let links = document.querySelectorAll('.link a')

links.forEach(link => {
    link.addEventListener('click', e => {
      let local = link.dataset.local

      let idLocal = document.querySelector('#' + local)

      let sectionVisible = document.querySelector('article.show')

      if(sectionVisible) {
        sectionVisible.classList.remove('show')
      }

      idLocal.classList.add('show')
    })
});