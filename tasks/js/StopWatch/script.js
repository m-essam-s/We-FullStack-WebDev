let minutes = 0;
let seconds = 0;
let interval;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    minutesDisplay.textContent = `${minutes} Min`;
    secondsDisplay.textContent = `${seconds} sec`;
}

function startStopwatch() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startStopBtn.textContent = 'Start';
    } else {
        interval = setInterval(updateStopwatch, 1000);
        startStopBtn.textContent = 'Stop';
    }
}

function resetStopwatch() {
    clearInterval(interval);
    interval = null;
    minutes = 0;
    seconds = 0;
    minutesDisplay.textContent = '0 Min';
    secondsDisplay.textContent = '0 sec';
    startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
