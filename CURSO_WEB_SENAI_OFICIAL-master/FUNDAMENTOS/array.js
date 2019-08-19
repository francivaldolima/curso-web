const valores = [10, 5, 9.3, 8]

console.log(valores[5])

valores[100] = 90

console.log(valores[100])
console.log(valores.length)
// envio para última posição
valores.push('teste')
console.log(valores.length)
console.log(valores[101])
//recuperar/exclui da última posição
console.log(valores.pop())

console.log(typeof valores)
console.log(valores[101])
// recuperando o último valor sem excluir...
console.log(valores[valores.length-1])


