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

const list = getRandomList()
list.printList({ compact: true })