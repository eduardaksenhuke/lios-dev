let numero 

console.log("digite o numero para saber a tabuada")

process.stdin.once('data',function(data){
    numero = parseInt(data.toString().trim())
    calculo(numero)
    process.exit

})

function calculo(numero){
    for(let i= 0; i <= 100; i = i + 1){
        console.log(`${numero}*${i}=${numero*i}`)
    }
    }


    
