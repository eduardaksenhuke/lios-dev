let coresFavoritas = ['preto', 'azul', ' verde']
let coresEspecias = []
let corDoUsuario


console.log('qual a sua cor favorita?')
process.stdin.once('data', function (data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()

})

function processamento(corDoUsuario){
    if(coresFavoritas.includes(corDoUsuario)){
        console.log('a sua cor favorita e uma das favoridas')
    }else{
        coresEspecias.push(corDoUsuario)
        console.log('a sua cor vaforita e diferente, vamos adicionar a lista')
    }
    console.log(`${coresFavoritas}`)
    console.log(`${coresEspecias}`)
    console.log(`As cores favoritas sao:${coresFavoritas.length}`)

}  