let isRunning = false;
let timer;
let elapsedTime = 0;
let startTime;
let lapCount = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
    lapCount = 0;
}

function lap() {
    if (isRunning) {
        lapCount++;
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapItem);
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
