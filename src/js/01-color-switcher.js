const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId;
buttonStop.disabled = true;

buttonStart.addEventListener('click', () => {
  console.log('Button clicked!');
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  const setColor = () => {
    body.style.background = getRandomHexColor();
  };

  intervalId = setInterval(setColor, 1000);
});

buttonStop.addEventListener('click', () => {
  console.log('Button stop clicked!');
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
