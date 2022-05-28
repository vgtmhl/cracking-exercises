/**
 * Design a stack that implements a function min() that returns the minimuim element.
 * Insertion and deletion should remain O(1)
 * 
 * Solution: maintain two stacks in the same data structure: one holds all the elements,
 * the second one only holds elements that are equal/less that the previous minimum
 * 
 * When we push something to stack1, we only push to stack2 if it's less than the current minimum
 * When we pop something from stack1, we only pop from stack2 if it's equal to the top element of stack2
 */

class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.stackSize = 0;
        this.minStackSize = 0;
    }

    peek() {
        if (this.stackSize === 0) {
            console.log('Stack is empty')
            return;
        }

        return stack[stackSize - 1]
    }

    pop() {
        if (this.stackSize === 0) {
            console.log('Stack is empty')
            return;
        }

        let poppedElement = this.stack.pop()

        // fix min stack if needed
        if (poppedElement === this.minStack[this.minStackSize - 1]) {
            this.minStack.pop()
            this.minStackSize--
        }

        this.stackSize--
        return poppedElement
    }

    push(value) {
        this.stack.push(value)
        this.stackSize++;

        // fix min stack if needed
        if (this.minStackSize === 0 || value <= this.minStack[this.minStackSize - 1]) {
            this.minStack.push(value)
            this.minStackSize++
        }
    }

    min() {
        return this.minStack[this.minStackSize - 1]
    }
}

const myMS = new MinStack()

myMS.push(10)
myMS.push(11)
myMS.push(12)
myMS.push(9)
myMS.push(7)
myMS.push(17)
myMS.push(7)
myMS.push(6)
myMS.push(31)
console.log(myMS.min())
myMS.pop()
myMS.pop()
console.log(myMS.min())
myMS.pop()
myMS.pop()
console.log(myMS.min())
myMS.pop()
console.log(myMS.min())


