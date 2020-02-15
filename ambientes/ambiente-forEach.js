let num = [2, 5, 4, 1, 61, 12]

num.sort()

/* for(let i = 0 ; i <= num.length ; i++ ) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} */

/* for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
 */

let pos = num.indexOf(2)

pos > 0 ?  console.log(`O número buscado foi ${pos}`) :  console.log(`Número não encontrado`)


