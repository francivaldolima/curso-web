//arquivo for e while

let cont = 1
/* while:
while(cont <=10){
console.log(`Valor do contador: ${cont}`)
cont++
}*/

//for:
/*
for(let n = 1; n<=10; n++){
    console.log(`Valor do contador: ${n}`)
}*/

// passeando por array com for: 
const notas = [8.9, 7, 6, 10]
for(let i=0; i<notas.length; i++){
    console.log(`NOTA(${i+1}) = ${notas[i]}` )
}