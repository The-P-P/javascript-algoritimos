const {lista1, lista2} = require('./listaLivros2.js')


function juntaLista(lista1, lista2){

    let listaFinal = []
    let posicaoatuallista1 = 0
    let posicaoatuallista2 = 0
    let atual = 0

    while (posicaoatuallista1 < lista1.length && posicaoatuallista2 < lista2.length){
        let produtoatuallista1 = lista1[posicaoatuallista1]
        let produtoatuallista2 = lista2[posicaoatuallista2]

        if (produtoatuallista1.preco < produtoatuallista2.preco){
            listaFinal[atual] = produtoatuallista1
            posicaoatuallista1++
        }
        else{
            listaFinal[atual] = produtoatuallista2
            posicaoatuallista2++
        }
        atual++
    }

    while (posicaoatuallista1 < lista1.length){
        listaFinal[atual] = lista1[posicaoatuallista1]
        posicaoatuallista1++
        atual++
    }

    while(posicaoatuallista2 < lista2.length){
        listaFinal[atual] = lista2[posicaoatuallista2]
        posicaoatuallista2++
        atual++

    }   
    return listaFinal
}
console.log(juntaLista(lista1, lista2))