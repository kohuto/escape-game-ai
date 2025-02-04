export function typewriterEffectHTML(container, html, speed, callback = () => {}) {
  // Vyprázdnění kontejner
  container.innerHTML = "";
  
  // Zavedení příznaku zrušení
  let cancelled = false;

  // externí kód může zrušit efekt
  container.cancelTypewriter = () => { cancelled = true; };

  // Rozparsování HTML na tokeny
  let insideTag = false;
  let currentToken = "";
  const tokens = [];

  for (const char of html) {
    if (char === "<") {
      if (currentToken) {
        tokens.push(currentToken);
      }
      currentToken = "<";
      insideTag = true;
    } else if (char === ">") {
      currentToken += ">";
      tokens.push(currentToken);
      currentToken = "";
      insideTag = false;
    } else {
      currentToken += char;
    }
  }
  if (currentToken) {
    tokens.push(currentToken);
  }

  let i = 0;
  function processNextToken() {
    // Pokud byl efekt zrušen, ukončí se vykreslování
    if (cancelled) return;

    if (i >= tokens.length) {
      callback();
      return;
    }

    const token = tokens[i++];
    // Pokud jde o HTML tag, vložíme ho ihned
    if (token.startsWith("<") && token.endsWith(">")) {
      container.innerHTML += token;
      processNextToken();
    } else {
      // Pokud jde o text, vykreslujeme znak po znaku
      let textIndex = 0;
      const textInterval = setInterval(() => {
        // Kontrola, zda byl efekt zrušen během intervalu
        if (cancelled) {
          clearInterval(textInterval);
          return;
        }
        container.innerHTML += token[textIndex];
        textIndex++;

        if (textIndex >= token.length) {
          clearInterval(textInterval);
          processNextToken();
        }
      }, speed);
    }
  }

  processNextToken();
}
