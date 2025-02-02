// Otevření terminálu
export function openTerminal() {
    console.log('openTerminal called'); 
    const terminalWindow = document.getElementById('terminal-window');
    if (terminalWindow) {
      terminalWindow.classList.remove('hidden');
    }
  }
  
  export function closeTerminal() {
    const terminalWindow = document.getElementById('terminal-window');
    if (terminalWindow) {
      const terminalContent = terminalWindow.querySelector('.terminal-content');
      // Pokud existuje metoda cancelTypewriter, zavoláme ji pro zastavení efektu psaní
      if (terminalContent && typeof terminalContent.cancelTypewriter === 'function') {
        terminalContent.cancelTypewriter();
      }
      terminalWindow.classList.add('hidden');
    }
  }
  

  
  
  // Zobrazení zprávy v terminálu (např. chybová hláška)
  export function showTerminalMessage(message) {
    const terminalWindow = document.getElementById('terminal-window');
    const terminalContent = terminalWindow.querySelector('.terminal-content');
    if (terminalContent) {
      terminalContent.innerHTML = `<p style='color: red;'>${message}</p>`;
      openTerminal();
    }
  }

