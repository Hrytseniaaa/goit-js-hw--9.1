
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseCreate = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        Notify.success(`✅ Fulfilled promiseCreate ${position} in ${delay}ms`);
      } else {
        // Reject
        Notify.failure(`❌ Rejected promiseCreate ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promiseCreate
    .then(result => {
      Notify.success(result);
    })
    .catch(result => {
      Notify.failure(result);
    });
}

const onSubmitInit = e => {
  e.preventDefault();
  let delay = Number(refs.delay.value)
  const step = Number(refs.step.value)
  const amount = Number(refs.amount.value)

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay);
    delay += step;
  }
}

refs.form.addEventListener('submit', onSubmitInit);
