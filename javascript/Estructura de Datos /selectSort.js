let arr = [34, 5, 55, 4, 88, 6, 77, 22, 12, 1]

function selectSort(numeros) {
    let n = numeros.length
    for (let i = 0; i < n; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (numeros[j] < numeros[min]) {
                min = j;
            }
        }
        let temp = numeros[min]
        numeros[min] = numeros[i]
        numeros[i] = temp
    }
    return numeros
}
selectSort(arr)
console.log(arr)


// let palabra1 = 'Hola';
// let palabra2 = palabra1;

// palabra2 = 'Adios';

// console.log('palabra1 ', palabra1);
// console.log('palabra2 ', palabra2);


// const arregloLetras1 = ['a', 'b', 'c', 'd'];
// const arregloLetras2 = arregloLetras1.slice();
// const arregloLetras3 = [...arregloLetras1];

// arregloLetras2[0] = 'z';
// arregloLetras3[0] = 'u';

// console.log('arregloLetras1 ', arregloLetras1);
// console.log('arregloLetras2 ', arregloLetras2);
// console.log('arregloLetras3 ', arregloLetras3);


// const arregloObjetos = [{ piece: 5 }, { piece: 2 }, { piece: 5 },];
// const arregloObjetos2 = arregloObjetos.slice();
// const arregloObjetos3 = arregloObjetos.map(arregloObjeto => ({...arregloObjeto}));

// arregloObjetos2[0].piece = 10;
// arregloObjetos3[0].piece = 8;

// console.log('arregloObjetos ', arregloObjetos);
// console.log('arregloObjetos2 ', arregloObjetos2);
// console.log('arregloObjetos3 ', arregloObjetos3);
