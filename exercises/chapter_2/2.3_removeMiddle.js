import { getRandomList } from './../../structures/linkedList.js';

/**
 * Write a function that deletes a middle node of a singly linked list,
 * Given only access to that node. 
 * 
 * It is immediately evidente that you can't do it in the "conventional" way, where you would do:
 * prev.next = current.next
 * 
 * What I can do, though, is to copy the next node into current (both value and next), and then remove the next node.
 */

function removeNode(list, node) {

    // check that this is not the head nor the tail
    // I can actually use === as I'm comparing the memory addresses of these 2:D
    if (list.head === node || !node.next) {
        return;
    }

    // copy the next node into the current one, unlink the next node
    node.value = node.next.value;
    node.next = node.next.next;
    node.next.next = null;
}

