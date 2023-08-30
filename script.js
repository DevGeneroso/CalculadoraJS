function appendToDisplay(value) {
  var display = document.getElementById('display');
  display.value += value; // Adiciona o valor ao campo de exibição
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = ''; // Limpa o campo de exibição
}

function calculateResult() {
  var display = document.getElementById('display');
  var result = eval(display.value); // Avalia a expressão no campo de exibição e calcula o resultado
  display.value = result; // Exibe o resultado no campo de exibição
}

function deleteLastDigit() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1); // Remove o último dígito do campo de exibição
}

// Função para lidar com o evento de pressionar uma tecla
function handleKeyPress(event) {
  const key = event.key;

  if (key === "Enter") {
    calculateResult();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLastDigit();
  } else if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    appendToDisplay(key);
  }
}

// Adiciona o evento de pressionar uma tecla ao documento
document.addEventListener("keydown", handleKeyPress);
