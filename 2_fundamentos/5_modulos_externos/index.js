const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const nome = args['nome']

const idade = args['idade']

console.log(`O nome da pessoa é ${nome} e tem ${idade} anos`)