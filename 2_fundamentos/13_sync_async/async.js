const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo2.txt','oi',function(err) {
    setTimeout(function() {
        console.log('Arquivo criado')
    },2000)
})

console.log('Fim')