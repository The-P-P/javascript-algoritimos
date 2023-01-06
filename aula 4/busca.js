const listaLivrosO = require('./arrayOrdenado')

function busca(array, de, ate, valorBuscado){
    console.log('de: ', de, ',ate: ', ate)
    const meio = Math.floor((de + ate)/2)
    const atual = array[meio];

    if ( de > ate){
        return -1
    }

    if (valorBuscado === atual.preco){
        return meio
    }
    if(valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado)
    }
    if(valorBuscado > atual.preco){
        return busca(array, meio + 1, ate, valorBuscado)
    }
}

console.log(busca(listaLivrosO, 0, listaLivrosO.length - 1, 52))