const listaLivros =  require('./array.js')
const trocaLugar = require('./encontraMenores.js')

function quicksort(array, esquerda, direita){
    if (array.length > 1){
        let inatual = parciona(array, esquerda, direita)
        if (esquerda < inatual - 1){
            quicksort(array, esquerda, direita - 1);
        }
        if(inatual < direita){
            quicksort(array, inatual, direita)
        }
    }

    return array
}

function parciona(array, esquerda, direita){
    let pivo =  array[Math.floor((esquerda + direita)/2)]
    let atualEsquerda = esquerda
    let atualdireita = direita

    while(atualEsquerda <= atualdireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++

        }
        while(array[atualdireita].preco > pivo.preco){
            atualdireita--

        }

        if (atualEsquerda <= atualdireita){
            trocaLugar(array, atualEsquerda, atualdireita)
            atualEsquerda++
            atualdireita--

        }
    }
}

console.log(quicksort(listaLivros, 0, listaLivros.length - 1))