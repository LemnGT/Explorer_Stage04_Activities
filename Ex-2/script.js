/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
  {
    name: 'Roberto',
    firstTest: 10,
    secondTest: 5
  },

  {
    name: 'Maria',
    firstTest: 9,
    secondTest: 8
  },

  {
    name: 'Fulano',
    firstTest: 6,
    secondTest: 1
  }
]

function average(grade1, grade2) {
  let avg = (grade1 + grade2) / 2
  avg = avg.toString().replace('.', ',')

  let passable =
    avg >= '7'
      ? `Sua média foi de ${avg}! Parabéns, você passou!`
      : `Sua média foi de ${avg}. Sua nota não foi suficiente, tente novamente em uma próxima oportunidade`

  return passable
}

for (let student of students) {
  alert(
    `Estudante ${student.name}, ${average(
      student.firstTest,
      student.secondTest
    )}`
  )
}
