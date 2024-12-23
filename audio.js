let audio; // bude sdílené v rámci modulu

export function playBackgroundAudio() {
  if (!audio) {
    audio = new Audio('audio/escape.mp3');
    audio.loop = true;
  }
  audio.play().catch(error => console.error('Audio playback failed:', error));
}
