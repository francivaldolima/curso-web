const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = '3.0'

const soma = peso1 + peso3
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))
console.log(soma)

const nota1 = 7.785
const nota2 = 8.789
const total = nota1*peso1 + nota2*peso2
console.log(total)
const media = total / (peso1 + peso2)
console.log(media)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)

// O js não possui o operado de exponenciação... utilizamo o método pow. 
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)