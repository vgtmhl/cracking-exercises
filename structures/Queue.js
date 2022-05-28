/**
 * A queue is a first-in-first-out structure with a set of methods:\
 * - addItem (add an element to the end of the queue)
 * - removeItem (remove the first item from the queue)
 * - peek (show the first item in the queue)
 * - isEmpty 
 */

export class Queue {
    constructor() {
        this.head = null;
        this.trail = null;
        this.size = 0
        this.content = []
    }

    addItem(value) {
        this.content.push(value)
        this.tail = value;
        this.size++;

        if (this.size) {
            this.head = value;
        }
    }

    removeItem() {
        let removedItem = this.content.shift()
        this.size--

        if (this.size >= 0) {
            this.head = this.content[0]
            this.tail = this.content[this.size - 1]
        }

        return removedItem
    }

    peek() {
        return this.content[0]
    }

    isEmpty() {
        return this.size === 0;
    }

    printQueue() {
        let out = ""
        this.content.forEach(entry => out += `${entry} `)
        console.log(out)
    }
}