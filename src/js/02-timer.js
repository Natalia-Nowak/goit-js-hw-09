import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const buttonStart = document.querySelector('[data-start]');
buttonStart.disabled = true;

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const timer = document.querySelector('.timer');
timer.style.display = 'flex';
timer.style.gap = '40px';
const fields = document.querySelectorAll('.field');
for (const field of fields) {
  field.style.display = 'flex';
  field.style.flexFlow = 'column';
  field.style.textAlign = 'center';
  field.style.fontSize = '30px';
}

let intervalId;
let pickedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    pickedDate = selectedDates[0];
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
};

buttonStart.addEventListener('click', function () {
  buttonStart.disabled = true;
  const setTime = () => {
    const difference = pickedDate - new Date();

    if (difference <= 0) {
      clearInterval(intervalId);
      return;
    }

    const differenceDate = convertMs(difference);

    dataDays.innerHTML = addLeadingZero(differenceDate.days);
    dataHours.innerHTML = addLeadingZero(differenceDate.hours);
    dataMinutes.innerHTML = addLeadingZero(differenceDate.minutes);
    dataSeconds.innerHTML = addLeadingZero(differenceDate.seconds);
  };
  intervalId = setInterval(setTime, 1000);
});

const selector = document.querySelector('#datetime-picker');

const picker = flatpickr(selector, options);

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
