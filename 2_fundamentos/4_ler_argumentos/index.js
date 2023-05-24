console.log('Todos os argumentos')
console.log(process.argv)

console.log('O terceiro argumento (índice 2)')
const argsNome = process.argv.slice(2)
console.log(argsNome)

console.log('O quarto argumento (índice 3)')
const argsIdade = process.argv.slice(3)
console.log(argsIdade)

console.log("Separando só o nome, faz o split da variável com '=' e pega o índice 1 que é o segundo parâmetro")
const nome = argsNome[0].split('=')[1]
console.log(nome)

console.log("Separando só a idade, faz o split da variável com '=' e pega o índice 1 que é o segundo parâmetro")
const idade = argsIdade[0].split('=')[1]
console.log(idade)