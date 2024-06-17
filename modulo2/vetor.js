let vetor = [1,2,3,4,5,6,7,8,9,10]
let vetor2 =[]

for(let i=0; i< 10; i ++){
    if(vetor[i] % 2 !=0){
        vetor2.push(vetor[i])
    }
}
console.log ( vetor2)