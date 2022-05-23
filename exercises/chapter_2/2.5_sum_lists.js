import { LinkedList } from './../../structures/linkedList.js';

/**
 * I have 2 numbres represented by a linked list, where each node contains a single digit. 
 * The digits are stored in REVERSE ORDER such that the unit digit is in the head. 
 * 
 * Write a function that adds the 2 numbers and returns the sum as a linked list. 
 * 
 * e.g. (7->1->6) + (5->9->2) = 617 + 592 = 912 = (2->1->9)
 * 
 * Follow up: now the digits are stored in the correct order
 */

function sumLists(l1, l2) {
    let int1 = getValueFromList(l1)
    let int2 = getValueFromList(l2)
    return int1 + int2
}


function getValueFromList(list) {
    let value = 0;
    let multiplier = Math.pow(10, list.size);

    let curr = list.head;

    while (curr) {
        value += (curr.value * multiplier)
        console.log(`multiplying ${curr.value} times ${multiplier}`)

        multiplier = multiplier / 10;
        curr = curr.next
    }

    return value;
}

let list1 = new LinkedList();
list1.appendToTail(3)
list1.appendToTail(5)
list1.appendToTail(1)

let list2 = new LinkedList();
list2.appendToTail(1)
list2.appendToTail(4)
list2.appendToTail(9)

const res = sumLists(list1, list2)
console.log(res)
