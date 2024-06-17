const readline = require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const numero = Math.floor(Math.random()*100)+1
function solicitarPalpite(){

    rl.question('digite um numero', (palpite) =>{
        if(palpite.trim().toLowerCase() < numero){
            console.log('muito baixo!')
            solicitarPalpite()
        }else if(palpite.trim().toLowerCase() > numero){
            console.log('muito alto!')
            solicitarPalpite()
        }else{
            console.log('parabens!')
            rl.close()
        }
    })
}
solicitarPalpite()