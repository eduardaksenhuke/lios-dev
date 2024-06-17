let notas = [7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0];
let media
let soma = 0
let maxima = notas[0]
let minima = notas[0]
let acima =[]
let reprovadas = 0
for(let i = 0; i < notas.length; i++) {
    soma += notas[i]
}
media = soma/notas.length
console.log(media)

for(let i = 0; i < notas.length; i++) {
    if(notas[i]>maxima){
        maxima = notas[i]
    }
    if(notas[i]<minima){
        minima = notas[i]
    }
}
console.log(maxima)
console.log(minima)

for(let i = 0; i < notas.length; i++){
    if(notas[i]>media) {
        acima.push(notas[i])
    }
}
console.log(acima)

notas.push(9.8)
console.log(notas)


for(let i = 0; i < notas.length; i++){
    if(notas[i]<6.0) {
        reprovadas++
    }
}
console.log(reprovadas)
//(A) o array esta armasenando as notas;
// o for esta percorrendo o array;
// o console.log esta imprimindo o array

//(B) entrada variaveis, for;
// saida console.log;

//(c) notas: esta armasenando as notas;
// soma: esta somando as notas;
// media: esta calculando a media das notas;
// maxima: armasenando a maior nota;
// minima: armasenando a menor nota;
// acima: esta armasenado as notas acima da media;
// reprovadas; esta armasenado as notas reprovadas;
//i: esta percorrendo o array notas;