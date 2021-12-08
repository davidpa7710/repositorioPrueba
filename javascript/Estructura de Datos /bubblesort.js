'use strict'

// console.log('Aqui van ordenados de menor a mayor: ' + numeros.sort(function(a, b){return a - b}));
// console.log('Aqui van ordenados de mayor a menor: ' + numeros.sort(function(a, b){return b - a}));


function bubble(arreglo) {
    var len = arreglo.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) { // this was missing
            if (arreglo[j] > arreglo[j + 1]) {
                // swap
                var numero = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = numero;
            }
        }
    }
    return arreglo;
}

let resultado = bubble([14, 25, 3, 43, 5, 79, 45, 6, 8]);
console.log(resultado);


//SENSEI RESULT

// const arr = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9]

// const bubbleSort = numeros => {
//     const total = numeros.length

//     for (let i = 0; i < total; i++) {
//         for(let j = 0; j < total; j++) {
//             if (numeros[j] > numeros[j + 1]) {
//                 [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]]
//             }
//         }
//     }
//     return numeros
// }

// const result = bubbleSort(arr)
// console.log(result);