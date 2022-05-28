/**
 * Design a data structure that uses a single array to represent 3 stacks.
 */

class MultiStack {
    constructor(stackSize, numberOfStacks) {
        this.totalCapacity = stackSize * numberOfStacks;
        this.capacityOfEachStack = stackSize;
        this.allValues = new Array(this.totalCapacity).fill(0)
        this.stackSizes = new Array(numberOfStacks).fill(0)
    }

    /** pushes an element on top of the selected stack if space is available */
    push(stackNumber, value) {
        if (this.isFull(stackNumber)) {
            console.log(`Stack #${stackNumber} is full`)
            return
        }

        const indexOfTop = this.indexOfTop(stackNumber) + 1

        this.allValues[indexOfTop] = value
        this.stackSizes[stackNumber]++
    }

    /** pops an element off the top of the selected stack if the stack id not empty */
    pop(stackNumber) {
        if (this.isEmpty(stackNumber)) {
            console.log(`Stack #${stackNumber} is empty`)
            return
        }

        const index = this.indexOfTop(stackNumber)
        const poppedValue = this.allValues[index]
        this.allValues[index] = null;

        this.stackSizes[stackNumber]--
        return poppedValue
    }

    /** returns the element at the top of the selected stack */
    peek(stackNumber) {
        if (this.isEmpty(stackNumber)) {
            console.log(`Stack #${stackNumber} is empty`)
            return
        }

        const index = this.indexOfTop(stackNumber)
        return this.allValues[index]
    }

    /** returns the index of the element on the top of the stack */
    indexOfTop(stackNumber) {
        const base = this.indexOfBottom(stackNumber)
        const offset = this.stackSizes[stackNumber]
        return base + offset - 1;
    }

    /** returns the index of the first element in the stack */
    indexOfBottom(stackNumber) {
        return (this.capacityOfEachStack * stackNumber);
    }

    isEmpty(stackNumber) {
        return this.stackSizes[stackNumber] === 0;
    }

    isFull(stackNumber) {
        return this.stackSizes[stackNumber] === this.capacityOfEachStack;
    }

    printContent(stackNumber) {
        let startIndex = this.indexOfBottom(stackNumber)
        let endIndex = this.indexOfTop(stackNumber);
        let out = ""

        for (let i = startIndex; i <= endIndex; i++) {
            if (this.allValues[i]) {
                out += `${this.allValues[i]} `
            }
        }

        console.log(out)
    }
}

const myMS = new MultiStack(5, 3) // 3 stacks with 5 cells capacity
myMS.push(0, 1)
myMS.push(0, 7)
myMS.push(0, 5)

myMS.push(1, 15)
myMS.push(1, 63)
myMS.push(1, 71)
myMS.push(1, 66)

myMS.push(2, 193)

myMS.printContent(0)
myMS.printContent(1)
myMS.printContent(2)

console.log('---')

myMS.pop(1)
myMS.printContent(1)
myMS.pop(1)
myMS.pop(1)
myMS.pop(1)
myMS.printContent(1)
myMS.pop(1)
myMS.push(1, 11)
myMS.push(1, 12)
myMS.push(1, 13)
myMS.push(1, 14)
myMS.push(1, 15)
myMS.printContent(1)

myMS.push(1, 16)





