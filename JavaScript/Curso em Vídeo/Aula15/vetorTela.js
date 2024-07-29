let valor = [8, 1, 7, 4, 9]

console.log(`[${valor}]`)

for(let cont=0; cont < valor.length; cont++){
    console.log(`A posição ${cont} tem o valor ${valor[cont]}`)
}

console.log(`${valor.indexOf(7)}`)

for(let cont in valor){
    console.log(`A posição ${cont} tem o valor ${valor[cont]}`)
}
