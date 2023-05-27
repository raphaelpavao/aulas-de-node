const x = '10'

if(!Number.isInteger(x)) {
    throw new Error('X não é um número')
}

console.log('Continuando o código...')