/**
 * If a (literal) stack of plates is too high, it might topple.
 * IRL, we would probably start a new stack when the previous stack exceeds some threshold.
 * 
 * Implement a DS SetOfStacks that does just this: it starts out as a single stack, but then,
 * when the size exceeds some threshold, it starts stacking new elements on a new stack.
 * 
 * push should push on the latest stack.
 * pop should return the top from the latest stack.
 * 
 */

class MultiStack {
    constructor(capacity) {
        this.stackCapacity = capacity;
        this.stacks = [[]]
        this.sizes = [0]
        this.currentStack = 0
    }

    peek() {
        let currentStackSize = this.sizes[this.currentStack]
        let currentStack = this.stacks[currentStackSize]
        let lastElementIndex = currentStackSize - 1;
        return currentStack[lastElementIndex]
    }

    pop() {
        let currentStackSize = this.sizes[this.currentStack]

        if (currentStackSize === 0) {

            if (this.currentStack === 0) {
                console.log('All stacks are empty')
                return
            }
            this.stacks.pop()
            this.currentStack--
        }

        this.sizes[this.currentStack]--;
        return this.stacks[this.currentStack].pop()

    }

    push(value) {
        let currentStackSize = this.sizes[this.currentStack]

        if (currentStackSize === this.stackCapacity) {
            this.currentStack++

            const newStack = [value]
            this.stacks.push(newStack)
            this.sizes.push(1)
            return;
        }

        this.sizes[this.currentStack]++
        this.stacks[this.currentStack].push(value)
    }
}

const mySOP = new MultiStack(3)
console.log(mySOP)

mySOP.push(3)
mySOP.push(5)
mySOP.push(1)
console.log(mySOP)

mySOP.push(13)
mySOP.push(15)
mySOP.push(11)
console.log(mySOP)

mySOP.pop()
console.log(mySOP)
mySOP.pop()
mySOP.pop()
mySOP.pop()
console.log(mySOP)

