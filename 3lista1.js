/*
 Desenvolva um programa que receba a nota, de 0 a 10, e o sexo de 10 alunos,
usando a estrutura FOR. No final, exiba no console:
a. A média geral dos alunos
b. Quantos homens enviaram as notas
c. Quantas mulheres tiveram nota acima de 7
d. Qual a maior nota entre os homens
Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de
alunos!
*/
var nota
var sexo
var homens = 0
var mulheres7 = 0
var notaMedia = 0
var notaMaiorHomens = 0
var totalNotas = 0

for (var contador = 0; contador < 10; contador++) {
    nota = parseInt(prompt("Insira sua nota"))
    sexo = prompt("Qual seu sexo? m ou f")

    if(sexo == "m"){
        homens++
    }
    if(sexo == "f" && nota > 7){
        mulheres7++
    }

    if(sexo == "m" && nota >= notaMaiorHomens){
        notaMaiorHomens = nota
    }
    totalNotas = totalNotas + nota
}
notaMedia = totalNotas / 10
console.log("Alunos homens enviaram as notas ", homens, " e as mulheres que tiraram mais que 7 foram ", mulheres7)
console.log("A media dos alunos são ", notaMedia)
console.log("A maior nota dos alunos masculinos foram ", notaMaiorHomens)
