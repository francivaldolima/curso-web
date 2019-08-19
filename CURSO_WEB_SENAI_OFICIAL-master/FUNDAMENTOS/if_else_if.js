Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)){
        console.log("Conceito A")
    }else if(nota.entre(7,8.9)){
        console.log('Conceito B')
    }else if(nota.entre(5, 6.9)){
        console.log('Conceito C')
    }else if(nota.entre(0, 4.9)){
        console.log('Conceito D')
    }else {
        console.log('Nota Inválida')
    }
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(0)

