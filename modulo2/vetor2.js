let vetor2 = [27,10,3,0,20,5,6,3]
let vetorpar=[]
let vetorinpar=[]

vetor2.push(12)

for(let i = 0; i < vetor2.length; i ++) {
    if(vetor2[i] % 2 == 0){
        vetorpar.push(vetor2[i])
    }
    if(vetor2[i]% 2 !=0){
        vetorinpar.push(vetor2[i])
    }
}
console.log(vetorinpar)
console.log(vetorpar)