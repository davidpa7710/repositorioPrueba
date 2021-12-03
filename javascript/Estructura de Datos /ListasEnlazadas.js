'use strict'

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class LinkendList {
    constructor() {
        this.head = null;
    };
    insertar(value) {
        const node = new Node(value, this.head)
        this.head = node
        console.log('head ', this.head);
    }
    delete() {
        if (this.head) {
            if (this.head.next) {
                const node2 = this.head.next;
                this.head = node2
            } else {
                this.head = null
            }
        }
        console.log('DELETE ', this.head);
    }
    recorrido() {
        let nodoActual = this.head;
        while (nodoActual) {
            console.log('RECORRIDO ', nodoActual);
            nodoActual = nodoActual.next;
        }
    }
    busqueda(value) {
        if (!this.head) {
          return null;
        }
        let nodoActual = this.head;
        while (nodoActual) {
          if (nodoActual.value === value) {
            return nodoActual;
          }
          nodoActual = nodoActual.next;
        }
      }
};

const linkendlist = new LinkendList;

linkendlist.insertar('a')
linkendlist.insertar('b')
linkendlist.insertar('c')
linkendlist.delete()
linkendlist.recorrido()
linkendlist.busqueda('c')
console.log('Valor Encontrado', busqueda());