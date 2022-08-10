

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  btn: document.querySelectorAll('button'),
  bodyEl: document.querySelector('body')
} 

const startGenerator = () => {
  timerId = setInterval(() => {
    refs.bodyEl.style.background = getRandomHexColor()
  }, 1000);

  refs.btn[0].disabled = true;
  refs.btn[1].disabled = false;
}


const stopGenerator = () => {
  clearInterval(timerId);
  refs.btn[0].disabled = false;
  refs.btn[1].disabled = true;
  }


refs.btn[0].addEventListener('click', startGenerator)
refs.btn[1].addEventListener('click', stopGenerator)