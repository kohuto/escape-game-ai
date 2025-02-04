let audio;

export function playBackgroundAudio() {
  if (!audio) {
    audio = new Audio('audio/escape.mp3');
    audio.loop = true;
  }
  audio.play().catch(() => {});
}
