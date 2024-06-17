let valor1
let valor2
let operacao

console.log(calculadora(5, 3, '+')); // 8
console.log(calculadora(5, 3, '-')); // 2
console.log(calculadora(5, 3, '*')); // 15
console.log(calculadora(5, 3, '/')); // 1.666...


function calculadora(valor1, valor2,operacao){
    switch (operacao){
        case'+':
        return valor1 + valor2
        break
    
        case'-':
        return valor1 - valor2
        break

        case'*':
        return valor1 * valor2
        break

        case'/':
        return valor1 / valor2
        break
    }
}
