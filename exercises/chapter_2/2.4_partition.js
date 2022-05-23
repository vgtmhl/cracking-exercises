import { LinkedList } from "../../structures/linkedList.js";

/**
 * Write code to partition a linked list around a value x such as:
 * all nodes less than x come before all values greater/equal to x. 
 * 
 * x can appear anywhere in the "greater/equal than x" partition, it does not need to be the pivot between partitions.
 * 
 * approach 1: go through all nodes, append n < x to the tail, append n >= x to the head. 
 * approach 2: go through all nodes, append n < x to list1, append n >= x to list2. Merge the two. 
 */
function partition(list, x) {
    if (!list.head || list.size <= 1) {
        return list;
    }

    let below = new LinkedList()
    let above = new LinkedList()

    // sort nodes from list into the two sublists
    let current = list.head
    while (current) {
        if (current.value < x) {
            below.appendToTail(current.value)
        }
        else {
            above.appendToTail(current.value)
        }

        current = current.next
    }

    // join the sublists 
    let currBelow = below.head;
    while (currBelow.next) {
        currBelow = currBelow.next
    }
    currBelow.next = above.head;

    // return the result
    return below
}

let testList = new LinkedList()
testList.appendToTail(1)
testList.appendToTail(8)
testList.appendToTail(12)
testList.appendToTail(10)
testList.appendToTail(2)
testList.appendToTail(4)
testList.appendToTail(6)
testList.appendToTail(18)

let resultingList = partition(testList, 5)
resultingList.printList({ compact: true })