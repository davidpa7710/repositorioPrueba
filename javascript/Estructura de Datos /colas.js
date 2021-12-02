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
        return this.queue;
    }
    dequeue() {
        return this.queue.shift()
    }
    peek() {
        return this.queue[0]
    }
    size() {
       return this.queue.length
    }
    print() {
        return this.queue
    }
    isEmpty() {
        return this.queue.length === 0
    }
    back() {
        return this.queue.length - 1
    }
}
const queue = new Queue();
console.log(queue.enqueue('Checo'))
console.log(queue.enqueue('Max'))
console.log(queue.enqueue('Alonso'))
console.log(queue.enqueue('Hamilton'));
console.log(queue.dequeue())
console.log(queue.size())
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.print());