const listaLivros =  require('./array.js')

function encontraMenores (pivo, array){
    let menores = 0

    for(let atual = 0; atual < array.length; atual++){
        let pordutoatual = array[atual]
        if (pordutoatual.preco < pivo.preco){
            menores++
        }
    }
    
    trocaLugar(array, array.pivo, menores)
    return array
}

function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}


function divideNoPivo(array){
    let pivo = array[Math.floor(array.length/2)];
    console.log(pivo)
    encontraMenores(pivo, array)
    let valoresMenores = 0;

    for(let analizando = 0; analizando < array.length; analizando++){
        let atual = array[analizando];
        if (atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analizando, valoresMenores)
            valoresMenores++
        }
    }
    return array;

}

// console.log(divideNoPivo(listaLivros))

//console.log(encontraMenores(listaLivros[4], listaLivros))

module.exports = trocaLugar;
