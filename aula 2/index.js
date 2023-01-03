const listaDeLivros = require ("./arrays.js")

function mergeSort(array){
     if(array.length > 1){
        const meio = Math.floor(array.length/2);

        const parte1 = mergeSort(array.slice(0, meio))
        const parte2 = mergeSort(array.slice(meio, array.length));

        array = ordena(parte1, parte2)
     }   return array;
}

function ordena(parte1, parte2){
    let posiçãoatualparte1 = 0
    let posiçãoatualparte2 = 0

    const resultado = []

    while(posiçãoatualparte1 < parte1.length && posiçãoatualparte2 < parte2.length){
        let produtoatualparte1 = parte1[posiçãoatualparte1]
        let produtoatualparte2 = parte2[posiçãoatualparte2]

        if(produtoatualparte1.preco < produtoatualparte2.preco){
            resultado.push(produtoatualparte1)
            posiçãoatualparte1++;
        }else{
            resultado.push(produtoatualparte2)
            posiçãoatualparte2++;
        }
    }

    return resultado.concat(posiçãoatualparte1 < parte1.length 
        ? parte1.slice(posiçãoatualparte1) 
        : parte2.slice(posiçãoatualparte2))
}

console.log(mergeSort(listaDeLivros.edGalho))
console.log(mergeSort(listaDeLivros.edFolha))