let num = [5,2,8]
let resu

num[3] = 6
num.push(7)

console.log(`${num[3]} valor adicionado após declarar o let`)
console.log(`${num[4]} valor adicionado após o último elemento`)
console.log(`${num.length} posições`)
console.log(`${num.sort()} ordem crescente`)

resu = num[0] * num[1]
console.log(`o resultado de ${num[0]} x ${num[1]} = ${resu}`)

for(let cont = 0; cont <= num.length; cont = cont + 1){
    console.log(`${num[cont]}`)
}