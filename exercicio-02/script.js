const min = 1
const max = 100
const resultado = Math.floor(Math.random() * (max - min + 1)) + min

const btnCalcular = document.getElementById("btn-calcular")
const divRoot = document.getElementById("root")
const textResultado = document.createElement("h3")
divRoot.appendChild(textResultado)

console.log(resultado)

btnCalcular.addEventListener("click", (event) => {
  event.preventDefault()
  // ENTRADA
  // Pegar os dois valores e a operação
  const inputNumeroAposta = document.getElementById("numero-aposta")
  const numeroApostado = Number(inputNumeroAposta.value)

  if (numeroApostado > resultado) {
    textResultado.textContent = "Errouuuuu! É menos bicho..."
  } else if (numeroApostado < resultado) {
    textResultado.textContent = "Errouuuuu! É mais bicho..."
  } else {
    textResultado.textContent = "O loco bicho! Acertou!"
  }
})
