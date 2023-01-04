const livros = require('./listaLivros')


function menorValor(arrprodutos, posicaoInical){
    let maisBarato = posicaoInical;

    for (let atual = posicaoInical; atual < arrprodutos.length; atual++){
        if (arrprodutos[atual].preco < arrprodutos[maisBarato].preco) {
            maisBarato = atual
    }
 }
 return maisBarato
}

module.exports = menorValor

