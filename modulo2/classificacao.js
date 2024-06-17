let nota 

console.log('digite um nota de 0 a 100')

process.stdin.once('data', function(data) {
    nota = parseInt(data.toString().trim())
    console.log(`a nots do aluno é:${classificador(nota)}`)
    process.exit()

})

function classificador(nota) {
    switch(true) {
        case nota >= 90 && nota <= 100:
            return 'A - provado'

        case nota >= 80 && nota <= 89:
             return 'B- aprovado'

        case nota >= 70 && nota <= 79:
            return 'C - aprovado'
        case nota  >= 60 && nota <= 69:
            return 'D - reprovado'
        
        case nota >= 0 && nota <= 59:
            return 'F - reprovado'
            
        default:
            return'Operação Inválida'
    }
    
}