import { openTerminal } from './terminal.js';
import { typewriterEffectHTML } from './typewriter.js';

function showTypingMessage(message, speed = 50) {
  const terminalWindow = document.getElementById('terminal-window');
  const terminalContent = terminalWindow.querySelector('.terminal-content');

  // 1) Otevřít terminál
  openTerminal();

  // 2) Vyprázdnit starý obsah
  terminalContent.innerHTML = "";

  // 3) Spustit psaní
  typewriterEffectHTML(terminalContent, message, speed, () => {
    console.log("Dopsáno!");
    // sem můžete ještě dopsat, co se má stát po dopsání
  });
}

export { showTypingMessage };
