// TRADICIONAL
/* function fatorial(numero) {
    let fat = 1
    for(let i = numero ; i > 1; i--) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5)) */


// RECURSIVIDADE
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
} 

console.log(fatorial(5))
