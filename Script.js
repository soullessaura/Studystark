document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-timer');
  const timerRow = document.getElementById('timer-row');
  const secondsSpan = document.getElementById('seconds');
  const openStudy = document.getElementById('open-study');

  openStudy.href = 'https://mgayushjs.github.io/Studystark/';

  startBtn.addEventListener('click', () => {
    let seconds = 60;
    secondsSpan.textContent = seconds;
    timerRow.style.display = 'flex';
    startBtn.disabled = true;

    const timer = setInterval(() => {
      seconds--;
      secondsSpan.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = openStudy.href;
      }
    }, 1000);
  });
});
