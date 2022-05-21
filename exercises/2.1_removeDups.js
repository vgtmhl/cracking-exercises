/**
 * Write the code to remove duplicates from an unordered linked list.
 * Follow-up: what if you cannot use a temporary buffer?
 * 
 * The first solution includes the buffer: I just store the values and, whenever I encounter a node with a value 
 * I've encountered before, I just remove it.
 */

// Linked List implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

// Takes a list and a value, appends the value to the end of the list, returns the head of the list
function appendToTail(head, value) {
    const end = new Node(value)

    // if the list is empty, then the new node becomes the head.
    if (!head) {
        head = end;
        return head;
    }

    // else we just scroll through the list
    let current = head;
    while (current.next) {
        current = current.next
    }

    // and when we get to the end (node for which next === null), we set thatNode.next = newNode
    current.next = end;
    return head;
}

// print a list 
function printList(head) {
    if (!head) {
        console.log('list is empty')
        return;
    }

    let output = ""
    let current = head;
    while (current) {
        if (current.value) { output += `${current.value} ` }
        current = current.next;
    }

    console.log(output)
}

// Create a test list, append stuff to it, print it.
const myList = new LinkedList();
appendToTail(myList, 3);
appendToTail(myList, 6);
appendToTail(myList, 9);
appendToTail(myList, 12);
appendToTail(myList, 9);
appendToTail(myList, 3);
appendToTail(myList, 69);
appendToTail(myList, 9);
appendToTail(myList, 3);
appendToTail(myList, 44);
appendToTail(myList, 69);
printList(myList)


// remove duplicates
function removeDups(head) {
    if (!head) { return {} }

    let seen = new Set()
    let curr = head;
    let prev = null;

    while (curr) {
        if (seen.has(curr.value)) {
            prev.next = curr.next
        } else {
            seen.add(curr.value)
        }

        prev = curr;
        curr = curr.next;
    }

    return head
}

const dedupedList = removeDups(myList)
printList(dedupedList)

/* This works but, for only god knows what reason, if the duplicate is of the head node,
then it will not remove it. I'll come back to this at a later time */