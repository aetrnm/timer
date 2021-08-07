const btnIncreaseMinutes = document.getElementById('minutes-increase');
const minutesValue = document.getElementById('minutes-value');
const btnDecreaseMinutes = document.getElementById('minutes-decrease');

const btnIncreaseSeconds = document.getElementById('seconds-increase');
const secondsValue = document.getElementById('seconds-value');
const btnDecreaseSeconds = document.getElementById('seconds-decrease');

const btnStart = document.getElementById('btn-start');

/* MINUTES */

btnIncreaseMinutes.addEventListener('click', () => {
  IncrementMinutes();
});

btnDecreaseMinutes.addEventListener('click', () => {
  DecrementMinutes();
});

/* SECONDS */
btnIncreaseSeconds.addEventListener('click', () => {
  IncrementSeconds();
});

btnDecreaseSeconds.addEventListener('click', () => {
  DecrementSeconds();
});

function IncrementMinutes() {
  const currentMinutesValue = +minutesValue.innerHTML;
  const valueToAssign = (currentMinutesValue + 1) % 60;
  if (valueToAssign === 0) {
    minutesValue.innerHTML = '00';
  } else if (valueToAssign < 10) {
    minutesValue.innerHTML = '0' + valueToAssign;
  } else {
    minutesValue.innerHTML = valueToAssign;
  }
}

function DecrementMinutes() {
  const currentMinutesValue = +minutesValue.innerHTML;
  const valueToAssign = currentMinutesValue - 1;
  if (currentMinutesValue === 0) {
    minutesValue.innerHTML = '59';
  } else if (valueToAssign < 10) {
    minutesValue.innerHTML = '0' + valueToAssign;
  } else {
    minutesValue.innerHTML = valueToAssign;
  }
}

function IncrementSeconds() {
  const currentSecondsValue = +secondsValue.innerHTML;
  const valueToAssign = (currentSecondsValue + 1) % 60;
  if (valueToAssign === 0) {
    secondsValue.innerHTML = '00';
  } else if (valueToAssign < 10) {
    secondsValue.innerHTML = '0' + valueToAssign;
  } else {
    secondsValue.innerHTML = valueToAssign;
  }
}

function DecrementSeconds() {
  const currentSecondsValue = +secondsValue.innerHTML;
  const valueToAssign = currentSecondsValue - 1;
  if (currentSecondsValue === 0) {
    secondsValue.innerHTML = '59';
  } else if (valueToAssign < 10) {
    secondsValue.innerHTML = '0' + valueToAssign;
  } else {
    secondsValue.innerHTML = valueToAssign;
  }
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  const timer = setInterval(() => {
    if (TimesIsUp()) {
      document.getElementById('alarm').play();
      btnStart.disabled = false;
      clearInterval(timer);
    } else if (+secondsValue.innerHTML === 0) {
      DecrementMinutes();
      DecrementSeconds();
    } else {
      DecrementSeconds();
    }
  }, 1000);
});

function TimesIsUp() {
  return +minutesValue.innerHTML === 0 && +secondsValue.innerHTML === 0;
}
