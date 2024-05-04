let number1 = prompt("Digite o primeiro número!")
let number2 = prompt("Digite o segundo número!")

let sun = Number(number1) + Number(number2)
let sub = Number(number1) - Number(number2)
let mult = Number(number1) * Number(number2)
let div = (Number(number1) / Number(number2)).toFixed(2)
let rest = Number(number1) % Number(number2)

alert(`
      A soma dos números é: ${sun}
      A subtração dos números é: ${sub}
      A multiplicação dos números é: ${mult}
      A divisão dos númeors é: ${div}
      O resto da divisão dos números é: ${rest}
      `
    )