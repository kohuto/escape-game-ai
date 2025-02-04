// main.js

import { tasks } from './tasks.js';
import { saveProgress, loadProgress, clearProgress } from './storage.js';
import { openTerminal, closeTerminal, showTerminalMessage } from './terminal.js';
import { startTimer } from './timer.js';
import { playBackgroundAudio } from './audio.js';
import { showTypingMessage } from './showTypingMessage.js';
import { typewriterEffectHTML } from './typewriter.js';

// Mustache
const MustacheLib = window.Mustache;

// Uchování stavu
let completedTasks = {};
let remainingTime = 45 * 60; // 45 minut

// Smaže uložený progress
function handleClearProgress() {
  clearProgress();
  location.reload();
}

// Vytvoření tlačítka pro restart
function createRestartButton() {
  const restartButton = document.createElement('button');
  restartButton.classList.add('restart-button');
  restartButton.innerHTML = '&#x21bb;';
  restartButton.addEventListener('click', handleClearProgress);
  document.body.appendChild(restartButton);
}

// Vykreslení políček pro odpověď
function renderAnswerInputs(task) {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  const inputs = [];
  for (let i = 0; i < task.correctAnswer.length; i++) {
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.maxLength = 1;
    inputBox.classList.add('input-box');
    inputContainer.appendChild(inputBox);
    inputs.push(inputBox);
  }

  // Nastavit fokus na první políčko
  setTimeout(() => inputs[0].focus(), 0);

  // Ověření správnosti po vyplnění políček
  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }

      const userInput = inputs.map(box => box.value).join('').toLowerCase();
      if (userInput.length === task.correctAnswer.length) {
        const feedback = document.getElementById('feedback');
        if (userInput === task.correctAnswer) {
          feedback.innerHTML = '<p style="color: green;">Správná odpověď!</p>';
          completedTasks[task.id] = true;
          saveProgress(completedTasks, remainingTime);
          // Zkontrolujeme, zda teď už nejsou všechny

  const allTasksDone = tasks.every(t => completedTasks[t.id]);
  if (allTasksDone) {
    showTypingMessage(`
      <h2>Dokončeno!</h2>
      <p>Vyřešil jsi všechny úkoly. Teď už můžeš uniknout!</p>
    `,60);
  }
        } else {
          feedback.innerHTML = '<p style="color: red;">Špatná odpověď, zkus to znovu.</p>';
        }
      }
    });
  });

  return inputContainer;
}

function showIntro() {
    const introText = `<h2>Vítej ve ztemnělém datovém centru</h2>
<p>Kde umělá inteligence <strong>SPECTRA</strong> uzamkla všechny východy. Někde tu čeká přístupový kód, ale času je málo. Čeká tě devět úkolů a každý splněný tě posune o krok dál.</p>

<p>Kliknutím na objekty rozlouskneš jednotlivé hádanky, ale <strong>SPECTRA</strong> nic neodpouští – dávej pozor na sebemenší detail. Sleduj zbývající minuty a nepolevuj, dokud nerozluštíš i tu poslední část.</p>

<p>Dokážeš vyzrát na všechny nástrahy a dostat se k únikovým dveřím včas? Hodně štěstí.</p>
`;  
    showTypingMessage(introText, 60);
   
  }
  

// vykreslení úkolu do terminálu pomocí Mustache + typewriter
function showTaskInTerminal(task) {
  // 1) Najdeme šablonu
  const templateEl = document.getElementById('task-template');
  const templateString = templateEl.innerHTML;

  // 2) Připravíme data
  const data = {
    title: task.title,
    description: task.description,
    hasInput: task.hasInput
  };

  // 3) Vyrenderujeme HTML pomocí Mustache
  const renderedHtml = MustacheLib.render(templateString, data);

  // 4) Najdeme terminál a vyprázdníme obsah
  const terminalWindow = document.getElementById('terminal-window');
  const terminalContent = terminalWindow.querySelector('.terminal-content');
  terminalContent.innerHTML = "";

  // 5) Otevřeme terminál
  openTerminal();

  // 6) Spustíme efekt psaní textu po znacích
  //    (poslední parametr 60 = rychlost v ms mezi znaky)
  typewriterEffectHTML(terminalContent, renderedHtml, 60, () => {

    // 7) Pokud úkol vyžaduje vstup, přidáme políčka pro odpověď
    if (task.hasInput) {
      const inputContainer = renderAnswerInputs(task);
      terminalContent.appendChild(inputContainer);

      // Případně ještě div #feedback, pokud ho Mustache nevytváří sama
      if (!document.getElementById('feedback')) {
        terminalContent.appendChild(document.createElement('div')).id = 'feedback';
      }
    }
  });
}

// Spouštěcí funkce po načtení DOM
function init() {
  // Načtení stavu z localStorage
  const { completedTasks: loadedTasks, remainingTime: loadedTime } = loadProgress();
  if (loadedTasks) completedTasks = loadedTasks;
  if (loadedTime) remainingTime = loadedTime;
    // 1) Zavoláme hned showIntro
  showIntro();
  // Spustíme timer
  startTimer(
    remainingTime,
    // Když čas vyprší
    () => alert('Čas vypršel!'),
    // Ukládací callback
    (newTime) => {
      remainingTime = newTime;
      saveProgress(completedTasks, remainingTime);
    }
  );

  // Vytvoříme tlačítko pro restart
  createRestartButton();

  // Napojíme tlačítko na zavření terminálu
  const btnClose = document.getElementById('closeTerminalBtn');
  if (btnClose) {
    btnClose.addEventListener('click', closeTerminal);
  }

  // Spuštění přehrávání zvuku na první klik
  document.addEventListener('click', () => {
    playBackgroundAudio();
  }, { once: true });

  // Generování klikací oblasti podle tasks
  const clickableMap = document.querySelector('.clickable-map');
  tasks.forEach(task => {
    const area = document.createElement('div');
    area.classList.add('clickable-area');
    area.dataset.taskId = task.id;

    // Nastavení pozice (z task.position)
    area.style.top = task.position.top;
    area.style.left = task.position.left;
    area.style.width = task.position.width;
    area.style.height = task.position.height;

    clickableMap.appendChild(area);

    area.addEventListener('click', () => {
      // Kontrola, zda je splněn předchozí úkol
      const currentTaskNumber = parseInt(task.id.slice(-2));
      const previousTaskId = `ukol${String(currentTaskNumber - 1).padStart(2, '0')}`;

      if (currentTaskNumber > 1 && !completedTasks[previousTaskId]) {
        showTypingMessage(`Nejdříve vyřešte úkol ${currentTaskNumber - 1}!`, 60);
        
        return;
      }

      // Vykreslíme úkol do terminálu pomocí Mustache + typewriter
      showTaskInTerminal(task);
    });
  });
}

// Spustíme init po načtení DOM
document.addEventListener('DOMContentLoaded', init);
