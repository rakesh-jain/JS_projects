let startStopwatch = document.getElementById('startStopwatch');
let stopStopwatch = document.getElementById('stopStopwatch');
let resetStopwatch = document.getElementById('resetStopwatch');

let stopwatchDisplay = document.getElementById('stopwatch');
let timerInterval;
let elapsedTime = 0;

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    let startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        stopwatchDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    stopwatchDisplay.textContent = "00:00:00";
}

startStopwatch.addEventListener('click', () => {
    stopTimer(); // Ensure no multiple intervals
    startTimer();
});

stopStopwatch.addEventListener('click', stopTimer);

resetStopwatch.addEventListener('click', resetTimer);
