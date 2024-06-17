let notas = [70,49,12,15,56,13,65,10,32,90]
let media = []
let soma 
let maior = notas[0]
let menor = notas[0]
let acimaMedia = 0
let abaixoMedia = 0

for(let i = 0; i < notas.length; i ++) {
    soma += notas[i]

}
media = soma / notas.length
console.log(media)

for(let i = 0; i < notas.length; i++) {
    if(maior = notas[i]){
        maior = notas[i]
    }else if(menor>notas[i]){
        menor = notas
    }
}

mediaTotal = mediaTotal/notas.length
console.log(`${mediaTotal}`)
console.log(`${maior}, ${menor}`)
notas.push(66)

for(let i = 0; i < notas.length; i++) {
    if (notas[i]>= mediaTotal) {
        acimaMedia++
    }
    if(notas[i]< 80) {
        abaixoMedia++
    }
}
console.log(`${acimaMedia}`)
console.log(`${abaixoMedia}`)
console.log(`${notas}`)