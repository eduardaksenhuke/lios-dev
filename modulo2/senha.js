let caracteres ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let senha =''
let comprimentoSenha
let numeroAleatorio

console.log('qual o comprimento da senha ')
process.stdin.once('data', function (data){
    comprimentoSenha=parseInt(data.toString().trim())
    processamento(caracteres,senha,comprimentoSenha,numeroAleatorio)
    process.exit()
})

function processamento(caracteres,senha,comprimentoSenha,numeroAleatorio){
    for(let i = 0; i < comprimentoSenha; i++){
        numeroAleatorio=(Math.floor(Math.random()*caracteres.length))
        senha +=caracteres.charAt(numeroAleatorio)
    }
    console.log(`senha gerada: ${senha}`)
}