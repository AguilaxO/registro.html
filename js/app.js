import { valida } from "./validaciones.js";

// Obtener todos los elemtos input 
const inputs = document.querySelectorAll("input");

// 
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
