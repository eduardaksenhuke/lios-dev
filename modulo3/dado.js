let pergunta
let numeroAleatorio = 0

console.log('qual e o numero de lados do dado')

process.stdin.once('data', function (data) {
pergunta = parseInt(data.toString().trim())
numeroAleatorio = Math.floor(Math.random() * pergunta) + 1 
console.log(numeroAleatorio)
process.exit()
})