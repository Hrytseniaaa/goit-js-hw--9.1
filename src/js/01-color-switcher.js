

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  btnStart: document.querySelector('[ data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body')
} 


let timerId = null;

const startGenerator = () => {
  timerId = setInterval(() => {
    refs.bodyEl.style.background = getRandomHexColor()
  }, 1000);

  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}


const stopGenerator = () => {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  }


refs.btnStart.addEventListener('click', startGenerator)
refs.btnStop.addEventListener('click', stopGenerator)