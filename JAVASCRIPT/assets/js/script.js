let perguntaInicial = prompt(
  "Ola! Digite qual operacao deseja: \n" +
    "1. adicao \n" +
    "2. subtracao \n" +
    "3. multipliacao \n" +
    "4. divisao \n"
);

let resultado = "";
let num1 = parseFloat(prompt("Digite aqui o primeiro numero:"));
let num2 = parseFloat(prompt("Digite aqui o segundo numero:"));

switch (perguntaInicial) {
  case "1":
    resultado = num1 + num2;
    alert(`O resultado equivale a ${resultado}`);
    break;
  case "2":
    resultado = num1 - num2;
    alert(`O resultado equivale a ${resultado}`);
    break;
  case "3":
    resultado = num1 * num2;
    alert(`O resultado equivale a ${resultado}`);
    break;
  case "4":
    resultado = num1 / num2;
    alert(`O resultado equivale a ${resultado}`);
    break;
  default:
    alert(`O resultado depende da calculadora`);
} 
