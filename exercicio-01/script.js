const selectOperacao = document.getElementById("select-operacao")
const btnCalcular = document.getElementById("btn-calcular")
const divRoot = document.getElementById("root")
const textResultado = document.createElement("h3")
divRoot.appendChild(textResultado)

const primeiroNumero = document.getElementById("primeiro-numero")
const segundoNumero = document.getElementById("segundo-numero")

btnCalcular.addEventListener("click", (event) => {
  event.preventDefault()
  // ENTRADA
  // Pegar os dois valores e a operação
  const primeiroValor = Number(primeiroNumero.value)
  const segundoValor = Number(segundoNumero.value)

  if (primeiroValor === 0) {
    alert("Informe o primeiro valor")
    return
  }

  if (segundoValor === 0) {
    alert("Informe o segundo valor")
    return
  }
  // PROCESSAMENTO
  const operacao = selectOperacao.value

  // lógica de fazer a operação baseado na operação selecionada
  let resultado = 0

  if (operacao === "somar") {
    resultado = primeiroValor + segundoValor
  } else if (operacao === "subtrair") {
    resultado = primeiroValor - segundoValor
  } else if (operacao === "multiplicar") {
    resultado = primeiroValor * segundoValor
  } else if ((operacao === "dividir") && (segundoValor > 0)) {
    resultado = primeiroValor / segundoValor
  }

  // Mostrar o resultado 
  textResultado.textContent = resultado
})
