// Uložení do localStorage
export function saveProgress(completedTasks, remainingTime) {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    localStorage.setItem('remainingTime', remainingTime);
  }
  
  // Načtení stavu z localStorage
  export function loadProgress() {
    const storedTasks = JSON.parse(localStorage.getItem('completedTasks')) || {};
    const storedTime = parseInt(localStorage.getItem('remainingTime')) || null;
  
    return {
      completedTasks: storedTasks,
      remainingTime: storedTime
    };
  }
  
  // Smazání stavu z localStorage
  export function clearProgress() {
    localStorage.removeItem('completedTasks');
    localStorage.removeItem('remainingTime');
  }
  