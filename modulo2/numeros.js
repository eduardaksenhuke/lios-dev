
var somaPares=0
var somaImpares=0
var totalPares=0
var totalImpares=0
var mediaPares=0
var mediaImpares=0

for(let i = 0; i <= 999;i++) {
    if (i % 2 == 0) {
        somaPares += i
        totalPares ++
    }else{
        somaImpares += i
        totalImpares ++
    }
}

mediaImpares = somaImpares / totalImpares
mediaPares = somaPares / totalPares 

console.log(`a soma dos pares é ${somaPares}`)
console.log(`total de pares é ${totalPares}`)
console.log(`a média dos pares è ${mediaPares}`)
console.log(`o total de impares ${totalImpares}`)
console.log(`a média dos impares ${mediaImpares}`)
console.log(`a somas dos impares ${somaImpares}`)

if(mediaPares >mediaImpares) {
    console.log(`a media dos números pares ${mediaPares}, é maior a media dos numeros impares ${mediaImpares}`)
}
if(mediaImpares >mediaPares) {
    console.log(`a media dos números inpares ${mediaImpares}, é maior a media dos numeros pares ${mediaPares}`)
}else{
    console.log(`a media dos dois são iguais`)
}

