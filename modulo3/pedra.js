let tela = ['pedra','papel','tesoura']
let escolhaComputador = ''
let escolhaUsuario = ''
let resultado = ''

console.log('qual a sua escolha')
process.stdin.once('data', function (data){
    escolhaUsuario = data.toString().trim()
    escolhaComputador = tela[(Math.floor(Math.random()*tela.length))]
    processamento(escolhaComputador,escolhaUsuario,resultado)
    process.exit()
})

function processamento(escolhaComputador,escolhaUsuario,resultado){
    if(escolhaComputador == escolhaUsuario){
        resultado ='empate'
    }
    else if(
        (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura') ||
        (escolhaUsuario == 'tesoura' && escolhaComputador == 'papel') ||
        (escolhaUsuario == 'papel' && escolhaComputador == ' pedra') 
    ) {
        resultado = 'voce ganhou'
    }
    else{
        resultado = 'voce perdeu'
    }
    console.log(`escolha do computado: ${escolhaComputador}`)
    console.log(`escolha do usuario: ${escolhaUsuario}`)
    console.log(`resultado: ${resultado}`)
}