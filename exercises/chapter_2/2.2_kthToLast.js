import expect from './../../utils/expect.js';

/**
 * Implement an algorithm to return the k-th largest element of a linked list.
 * Start by implementing a Node class and a List class, with methods to append to tail and to print the list.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    appendToTail(value) {
        let newTail = new Node(value)

        if (!this.head) {
            this.head = newTail;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next
        }

        current.next = newTail
        this.size++;
    }

    printList() {
        if (!this.head) {
            console.log('list is empty')
            return;
        }

        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}

let list = new List();
list.appendToTail(5)
list.appendToTail(2)
list.appendToTail(6)
list.appendToTail(4)
list.appendToTail(1)
list.appendToTail(3)
list.appendToTail(7)

/**
 * First way: if I want to find the k-th element, I can simply sort the list, and return the 
 * (listLength - k)th element of the list.
 * 
 * Maybe I can do it without sorting the list? I guess I can just put every element of the list in an array,
 * and then sort the array :] So let's go for this as a very dumb solution
 */

function kthToLast(list, k) {
    if (!list.head) { console.log('List is empty'); return; }
    if (list.size === 1) { return list }

    let arr = []
    let current = list.head

    while (current) {
        arr.push(current.value)
        current = current.next
    }

    let sorted = arr.sort((a, b) => a - b)
    let targetIndex = sorted.length - k;
    return sorted[targetIndex]
}

expect(kthToLast, [list, 2], 6)
