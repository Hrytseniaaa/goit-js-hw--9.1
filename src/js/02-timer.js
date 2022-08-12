import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    dataSelector: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button'), 
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
}


const render = (result) => {
    refs.daysEl.textContent = result.days.toString().padStart(2, '0');
    refs.hoursEl.textContent = result.hours.toString().padStart(2, '0');
    refs.minutesEl.textContent = result.minutes.toString().padStart(2, '0');
    refs.secondsEl.textContent = result.seconds.toString().padStart(2, '0');
}

const getStartTimer = (e) => {

    const { value } = refs.dataSelector
    const selectedDate = new Date(value);
    let timerId = setInterval(() => {
        const oddsInSeconds = selectedDate - Date.now();
        if (oddsInSeconds <= 0) {
             clearInterval(timerId);
            return;
            }
        const result = convertMs(oddsInSeconds);
        render(result);
    }, 1000) 
    

}


flatpickr(refs.dataSelector, { 
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0] - Date.now() <= 0) {
            Notiflix.Notify.failure('Please choose a date in the future');
           
            refs.btn.disabled = true
            return
        } else {
            refs.btn.disabled = false
        }
        
    }
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// слухачі
refs.btn.addEventListener('click', getStartTimer)