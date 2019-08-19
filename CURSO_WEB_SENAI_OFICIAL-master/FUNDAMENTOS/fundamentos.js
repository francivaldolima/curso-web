//java Script permite execução de uma mesma instrução em linhas separadas
console.log("SENAI")

// No JS existem instruções (linhas) e blocos de códigos onde, cada bloco é estruturado em { .. }
{
    {
        console.log("SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL");
    }
}
// variáveis declaradas como var ficam disponíveis globalmente e permitem dupla declaração.
// variáveis declaradas como let ficam disponível localmente (em um único bloco de códigos) e não permite a dupla declaração... 
var a = "texto"
let b = "outro texto"
console.log(a, b)

a = "teste"
b = "outro teste"
console.log(a, b)

// variáveis declaradas como const não podem ser alteradas, nem duplicadas. 
const c = 5
console.log(c)

