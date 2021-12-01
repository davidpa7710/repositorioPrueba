//enque: agregar un nuevo elemento a la cola
//deque: Retorna el primer valor de la cola quitandola de la cola.
//peek: nos permite conocer el primer elemento agregado sin retirar el elemento de la cola.
//size: retorna el numero de elementos que tiene la cola
//print: muestra el contenido de la cola
//isEmpty: indica si la cola está vacía.
//back: nos permite conocer el último elemento de la cola sin retirar el elemento de la cola

class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(elemento) {
        this.queue.push(elemento)
        this.queue;
    }
    dequeue() {
        this.queue.shift()
    }
    peek() {
        this.queue[0]
    }
    size() {
        this.queue.length()
    }
    print() {
        return this.queue
    }
    isEmpty() {
        this.queue.length === 0
    }
    back() {
         return this.queue.length - 1
    }
}
