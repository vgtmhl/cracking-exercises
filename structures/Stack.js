/**
 * A stack is a last-in-first-out data structure that implementes the following methods:
 * - push (add an element to the top of the stack)
 * - pop (remove an element from the top of the stack)
 * - peek (get the element on the top of the stack without removing it)]
 * - isEmpty 
 */

export class Stack {

    constructor() {
        this.base = null;
        this.top = null;
        this.size = 0;
        this.content = [];
    }

    push(value) {
        this.content.push(value)
        this.size++

        if (this.size === 1) {
            this.base = value;
        }

        this.top = value;
    }

    pop() {
        let poppedValue = this.content.pop();
        this.size--
        this.top = this.content[this.size - 1]
        return poppedValue

    }

    peek() {
        return this.content[this.size - 1]
    }

    isEmpty() {
        return this.size === 0
    }
}