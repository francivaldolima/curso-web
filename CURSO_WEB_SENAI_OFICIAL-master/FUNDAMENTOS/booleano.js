let texto = true

console.log(texto)

console.log('Elementos VERDADEIROS: ')
console.log(!!'a')
console.log(!!' ')
console.log(!!3)
console.log(!![])
console.log(!!{})


console.log('Elementos FALSO:')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)

//diferença entre NULL  e undefined
let teste = null
console.log(teste)

console.log('testando ou')
console.log(!!('' && null && 0 && " "))

