export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getTail() {
        if (this.size <= 1) return this.head

        let current = this.head

        while (current.next) {
            current = current.next
        }

        return current;
    }

    appendToTail(value) {
        let newTail = new Node(value)

        if (!this.head) {
            this.head = newTail;
            this.size = 1;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newTail
        this.size++;
    }

    appendToHead(value) {
        let newHead = new Node(value)

        newHead.next = this.head;
        this.head = newHead;
        this.size++;
    }

    printList(compact = false) {
        let result = "";

        if (!this.head) {
            console.log('This list is empty')
        }

        let current = this.head;
        while (current) {
            if (compact) {
                result = result.concat(`${current.value} `)
            } else {
                console.log(current.value)
            }

            current = current.next;
        }

        compact && console.log(result)
    }
}

export function getRandomList(length = 10) {
    let list = new LinkedList()

    for (let i = 0; i < length; i++) {
        let randomValue = Math.floor(Math.random() * 100)
        list.appendToTail(randomValue)
    }

    return list;
}