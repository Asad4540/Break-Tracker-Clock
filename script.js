let workTimer, breakTimer;
let workTime = 0, breakTime = 0;
let isWorking = false, isOnBreak = false;

// Elements
const workTimerDisplay = document.getElementById('work-timer');
const breakTimerDisplay = document.getElementById('break-timer');
const logInBtn = document.getElementById('log-in-btn');
const breakBtn = document.getElementById('break-btn');
const resetBtn = document.getElementById('reset-btn');

// Update the time format (HH:MM:SS)
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Work Timer logic
function startWorkTimer() {
  workTimer = setInterval(() => {
    workTime++;
    workTimerDisplay.textContent = formatTime(workTime);
  }, 1000);
}

function stopWorkTimer() {
  clearInterval(workTimer);
}

// Break Timer logic
function startBreakTimer() {
  breakTimer = setInterval(() => {
    breakTime++;
    breakTimerDisplay.textContent = formatTime(breakTime);
  }, 1000);
}

function stopBreakTimer() {
  clearInterval(breakTimer);
}

// Reset Timers
function resetTimers() {
  stopWorkTimer();
  stopBreakTimer();
  workTime = 0;
  breakTime = 0;
  workTimerDisplay.textContent = "00:00:00";
  breakTimerDisplay.textContent = "00:00:00";
  logInBtn.textContent = "Log In";
  breakBtn.textContent = "Start Break";
  isWorking = false;
  isOnBreak = false;
}

// Log In Button click event
logInBtn.addEventListener('click', () => {
  if (!isWorking) {
    startWorkTimer();
    logInBtn.textContent = 'Log Out';
  } else {
    stopWorkTimer();
    logInBtn.textContent = 'Log In';
  }
  isWorking = !isWorking;
});

// Break Button click event
breakBtn.addEventListener('click', () => {
  if (!isOnBreak) {
    startBreakTimer();
    breakBtn.textContent = 'End Break';
  } else {
    stopBreakTimer();
    breakBtn.textContent = 'Start Break';
  }
  isOnBreak = !isOnBreak;
});

// Reset Button click event
resetBtn.addEventListener('click', resetTimers);
