function fatorial(num){
    let fat = 1
    for (let c = num; c > 1; c = c - 1){
    fat *= c
    }
    return fat
}

let calc = fatorial(5)
console.log(calc)