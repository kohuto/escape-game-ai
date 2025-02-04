import { openTerminal } from './terminal.js';
import { typewriterEffectHTML } from './typewriter.js';

function showTypingMessage(message, speed = 10) {
  const terminalWindow = document.getElementById('terminal-window');
  const terminalContent = terminalWindow.querySelector('.terminal-content');
  openTerminal();

  // Vyprázdnění starého obsahu terminálu starý obsah
  terminalContent.innerHTML = "";

  // Efekt psaní
  typewriterEffectHTML(terminalContent, message, speed, () => {

  });
}

export { showTypingMessage };
