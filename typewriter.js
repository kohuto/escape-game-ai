export function typewriterEffectHTML(container, html, speed, callback = () => {}) {
        // 1) Vyprázdníme kontejner
        container.innerHTML = "";
        
        // 2) Rozparsujeme HTML na "tokeny": buď text, nebo rovnou celé tagy <...>
        let insideTag = false;
        let currentToken = "";
        const tokens = [];
      
        for (const char of html) {
          if (char === "<") {
            // Pokud existuje nedokončený text, ulož ho
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
      
        // 3) Budeme tokeny postupně vykreslovat
        let i = 0;
        function processNextToken() {
          // Pokud už není žádný token, skončíme
          if (i >= tokens.length) {
            callback();
            return;
          }
      
          const token = tokens[i++];
          // Pokud token začíná < a končí >, je to tag - vložíme hned
          if (token.startsWith("<") && token.endsWith(">")) {
            container.innerHTML += token;
            // hned přejdeme k dalšímu tokenu (bez čekání)
            processNextToken();
          } else {
            // Je to text, vypisujeme znak po znaku
            let textIndex = 0;
            const textInterval = setInterval(() => {
              container.innerHTML += token[textIndex];
              textIndex++;
      
              if (textIndex >= token.length) {
                clearInterval(textInterval);
                // Pokračujeme k dalšímu tokenu
                processNextToken();
              }
            }, speed);
          }
        }
      
        // 4) Spustíme
        processNextToken();
      
      
  }
  