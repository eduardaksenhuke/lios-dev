const readline = require('readline')
let numeroDerodadas = 0

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log('Boas Vindas')
const numero = Math.floor(Math.random()*100)+1
function solicitarPalpite(){
    numeroDerodadas = numeroDerodadas +1

    rl.question('Digite um número: ', (palpite) => {
        console.log(palpite)
        switch (true) {
            case numeroDerodadas == 10:
                console.log('Você esgotou suas rodadas')
                rl.close()
            break
            case palpite.trim().toLowerCase() < numero:
                console.log('muito baixo!')
                solicitarPalpite()
            break
            case palpite.trim().toLowerCase() > numero:
                console.log('muito alto!')
                solicitarPalpite()
            break
            case palpite == numero:
                console.log('parabens!')
                console.log(`Quantidade de rodadas: ${numeroDerodadas}`)
                rl.close()
            break
            default:
                console.log('O numero é inválidado')
                solicitarPalpite()
            
        }
    })
}
solicitarPalpite()