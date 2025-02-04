export function startTimer(duration, onTimeUp, saveCallback) {
  const timerDisplay = document.createElement('div');
  timerDisplay.id = 'timer';
  document.body.appendChild(timerDisplay);

  let time = duration;
  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (time <= 0) {
      clearInterval(interval);
      if (typeof onTimeUp === 'function') onTimeUp();
    }
    time--;
    if (typeof saveCallback === 'function') saveCallback(time);
  }, 1000);
}
