const livros = require('./listaLivros')
const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length -1; atual++){
    let menor = menorValor(livros, atual)

    let livroatual = livros[atual];
    console.log('posicao atual', atual)
    console.log('livro atual ',livros[atual])
    let livrosMenorPrecos = livros[menor];
    console.log('livro menor preco ',livros[menor])

    livros[atual] = livrosMenorPrecos
    livros[menor] = livroatual
}

console.log(livros)

