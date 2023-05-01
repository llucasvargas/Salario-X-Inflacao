const entradaDados = require("readline-sync");

const salarios = [
    {valor: 510.00, ano:2010},
    {valor: 545.00, ano:2011},
    {valor: 622.00, ano:2012},
    {valor: 678.00, ano:2013},
    {valor: 724.00, ano:2014},
    {valor: 788.00, ano:2015},
    {valor: 880.00, ano:2016},
    {valor: 937.00, ano:2017},
    {valor: 954.00, ano:2018},
    {valor: 998.00, ano:2019},
    {valor: 1045.00, ano:2020}
]

const inflacaoIpca = [
    {valor: 5.91, ano: 2010},
    {valor: 6.50, ano: 2011},
    {valor: 5.84, ano: 2012},
    {valor: 5.91, ano: 2013},
    {valor: 6.41, ano: 2014},
    {valor: 10.67, ano: 2015},
    {valor: 6.29, ano: 2016},
    {valor: 2.95, ano: 2017},
    {valor: 3.75, ano: 2018},
    {valor: 4.31, ano: 2019},
    {valor: 4.52, ano: 2020}
]

console.log(`Escolha uma opção!
    1 - Salário minimo de 2010 a 2020
    2 - Inflação IPCA de 2010 a 2020
    3 - Comparação salário minimo e inflação IPCA`)

let opcao =  entradaDados.question("\nDigite sua escolha: ")
console.log("\n")

function calcula(salario, indice) {

    let index = 0
    let resultado = ""

    while(index < salario.length && index < indice.length) {

        let anoAtual = 0
        let salarioAtual = 0
        let inflacaoAtual = 0

        salarioAtual += salario[index].valor
        inflacaoAtual += indice[index].valor
        anoAtual += salario[index].ano

        resultado += `\nAno: ${anoAtual} | Salário: R$${salarioAtual.toFixed(2).padStart(10, ".")} | Inflação: ${inflacaoAtual.toFixed(2).padStart(10, ".")}% \n`

        if (index > 0) {
            let diferencaSalarial = salarioAtual - salario[index - 1].valor
            let crescimentoSalarial = (diferencaSalarial / salario[index - 1].valor) * 100
            resultado += `Crescimento salarial: ${crescimentoSalarial.toFixed(2).padStart(34, ".")}%\n\n`
        }
        index++
    }
    return resultado;
}

switch(Number(opcao)){
    case 1:
        for(let salario of salarios) {
            console.log(`Salário: R$${salario.valor.toFixed(2).padStart(10, ".")} Ano:${salario.ano.toFixed(0).padStart(10, ".")}\n`)
        }
    break;
    case 2:
        for(let indice of inflacaoIpca) {
            console.log(`Valor inflação:${indice.valor.toFixed(2).padStart(10, ".")}% Ano:${indice.ano.toFixed(0).padStart(10, ".")}\n`)
        }
    break;
    case 3:
        console.log(calcula(salarios, inflacaoIpca))
    break;
}