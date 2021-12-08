'use strict'

class Nodo {
    constructor(value, left, rigth) {
        this.value = value
        this.left = left
        this.rigth = rigth
    };
};

class ArbolBinario {
    constructor() {
        this.root = null
    }
    insertar(value) {
        const nodoNuevo = new Nodo(value, null, null)
        if (!this.root) {
            this.root = nodoNuevo
        } else{
            let nodoActual = this.root
            let bandera = false
            while (!bandera) {
                if (value === nodoActual.value) {
                    bandera = true
                    return;
                }
            }
        }
    }

}
const arbolBinario = new ArbolBinario
arbolBinario.insertar(50)