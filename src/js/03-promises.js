import Notiflix from 'notiflix';

const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submit = document.querySelector('[type="submit"]');
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const initialDelay = parseInt(delay.value);
  const delayStep = parseInt(step.value);
  const promisesAmount = parseInt(amount.value);
  for (let i = 0; i < amount.value; i += 1) {
    const currentDelay = initialDelay + i * delayStep;
    createPromise(i + 1, currentDelay);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
