'use strict'

class Pila {
    constructor() {
        this.pila = []
    };

    push(dato) {
        this.pila.push(dato)
    };

    pop() {
        this.pila.pop()
    };
    print() {
        return pila
    };
};

const pila = new Pila();

pila.push('a');
pila.push('b');
pila.push('c');
pila.push(1);
console.log(pila.print());
pila.pop()
pila.pop()
console.log(pila.print());