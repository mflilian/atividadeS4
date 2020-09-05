// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const frutas = ["uva", "manga", "pitomba"]

function indicaDetalhes(arr){
        for(i = 0; i < arr.length; i++){
        console.log(`Índice: ${i}, Elemento: ${arr[i]}`)
        }
}
indicaDetalhes(frutas)




// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

function soma(arr){
    let total = 0
    for(i = 0; i < arr.length; i++){
        total += arr[i]
        }
        return total
}
console.log(`A soma dos números é ${soma([1, 10, 200])}`)

            // O que aconteceu aqui? A função usou o índice para encontrar os numeros para somar.
            // Entrou na função com o índice 0 e atribuiu ao "total" o número 1. 
            // Índice incrementado, agora ele e 1.
            // Atribuiu ao total um novo valor: "total anterior + 10 (que estava no índice 1)".
            // Índice incrementado. Agora é 2.
            // Entrou na função mais uma vez e atribuiu mais um valor ao total: 
            // "total anterior (11) + 200 (que estava no índice 2)"
            // Resultado: o let agora tem a soma de todos os termos da array.




// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

let arrayUsuario = [1, 2, 50, 100, 34, 12, 5]

function verifica(arr){
let arrayFinal = []
        for (i = 0; i < arr.length; i++){           
            if (arr[i] > 5){
                arrayFinal.push(arr[i])
            }
        }
return arrayFinal
}

console.log(verifica(arrayUsuario))




// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

let arrayUser = [23, 30, 48, 513, 82, 0, 6, 25, 2020]
const parameterUser = 40

function verificaParametro (arr, par){
let arrayFinal = []
        for (i = 0; i < arr.length; i++){
                if(arr[i] > par){
                    arrayFinal.push(arr[i])
                }
        }
return arrayFinal
}
console.log(verificaParametro(arrayUser, parameterUser))




// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

// let arrayUser = [13, 1220, 3, 42, 0, 89]

function encontraMaior(arr){
    let maior = Math.max.apply(null, arr)
    return maior
}
console.log(`O maior número na array [${arrayUser}] é ${encontraMaior(arrayUser)}`)




// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5

let arrayUser = [1220, 3, 42, 0, 89, -50, 22]

function encontraMaiorMenor (arr){
    let maior = Math.max.apply(null, arr)
    let menor = Math.min.apply(null, arr)
    console.log(`O maior número é ${maior} e o menor número é ${menor}`)
}
encontraMaiorMenor(arrayUser)