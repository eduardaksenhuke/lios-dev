const readline = require('readline')
let numeroDerodadas = 0

const rl=readline.createInterface({
    0
    input:process.stdin,
    output:process.stdout
})

console.log('Boas Vindas')
const numero = Math.floor(Math.random()*100)+1
function solicitarPalpite(){
    numeroDerodadas = numeroDerodadas + 1

    rl.question('digite um numero: ', (palpite) =>{
        console.log(palpite)
         if(numeroDerodadas == 10) {
            console.log(`Você esgotou suas rodadas`)
            rl.close()
        }
        else {
            if(palpite.trim().toLowerCase() < numero){
                console.log('muito baixo!')
                solicitarPalpite()
            }
            else if(palpite.trim().toLowerCase() > numero){
                console.log('muito alto!')
                solicitarPalpite()
            }
            else if(palpite == numero){
                console.log('parabens!')
                console.log(`Quantidade de rodadas: ${numeroDerodadas}`)
                rl.close()
            }
            else{
                console.log('O numero é inválidado')
                solicitarPalpite()
            }
        }
    })
}
solicitarPalpite()