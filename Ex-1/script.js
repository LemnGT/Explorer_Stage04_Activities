/*
-   A soma dos dois números;
-   A subtração dos dois números;
-   A multiplicação dos dois números;
-   A divisão dos dois números;
-   O resto da divisão dos dois números;
-   Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
-   Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

alert(
  'Olá! Com farei todas as operações matemáticas, além de dizer se são iguais e se sua soma é par! '
)

let num1 = Number(prompt('Insira o primeiro número: '))
let num2 = Number(prompt('Insira o segundo número: '))
let soma = num1 + num2

alert(`A soma dos dois números é: ${soma}`)
alert(`A subtração dos dois números é: ${num1 - num2}`)
alert(`A multiplicação dos dois números é: ${num1 * num2}`)
alert(`A divisão dos dois números é: ${num1 / num2}`)
alert(`O resto dos dois números é: ${num1 % num2}`)

if (num1 == num2) {
  alert('Os números são iguais')
} else {
  alert('Os números são diferentes')
}

function even(number) {
  if (number % 2 == 0) {
    return `A soma "${number}" é par`
  } else {
    return `A soma "${number}" é impar`
  }
}

alert(even(soma))
