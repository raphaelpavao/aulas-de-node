const fs = require('fs') //requerendo o módulo fs e atribuindo à constante fs
fs.readFile('arquivo.txt','utf8',(err,data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(data)
})