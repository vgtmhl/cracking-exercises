/**
 * Implement a queue using 2 stacks.
 * 
 * We have two stacks: stackOldest and stackNewest 
 * 
 * We push stuff into stackNewest. 
 * 
 * We pop/peek from stackOldest. 
 * 
 * When stackOldest is empty, we push one by one the elements from stackNewest into it. 
 * We can perform this check before pop/peek. 
 */

class QueueOfStacks {
    constructor() {
        this.stackOldest = []
        this.stackNewest = []
        this.size = 0;
    }

    push() {
        this.size++
        this.stackNewest.push()
    }

    pop() {
        if (this.stackNewest.length === 0) {
            this.shiftStacks()
        }

        this.size--
        return this.stackOldest.pop()
    }

    peek() {
        if (this.stackNewest.length === 0) {
            this.shiftStacks()
        }

        return this.stackOldest.at(-1)
    }

    shiftStacks() {
        while (this.stackNewest.length > 0) {
            let entry = this.stackNewest.pop()
            this.stackOldest.push(entry)
        }
    }

}