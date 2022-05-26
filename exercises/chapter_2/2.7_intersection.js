import { getRandomList } from './../../structures/linkedList.js';

/**
 * Given two linked lists, determine if they have intersections. If they do, return the intersection fragment. 
 * Intersection is based on reference, not on value: We're not looking for nodes with the same value, but we
 * are looking for the exact same nodes.
 */

function getIntersection(list1, list2) {
    const tail1 = list1.getTail();
    const tail2 = list2.getTail();

    // there is no intersection
    if (tail1 !== tail2) { return null }

    // get length difference
    let difference = list1.size > list2.size ? (list1.size - list2.size) : (list2.size - list1.size);

    // if the lists are not the same size, we can ignore the first N nodes of the longer list
    if (difference > 0) {
        let longList = list1.size > list2.size ? list1 : list2;
        let current = longList.head;

        for (let i = 0; i < difference; i++) {
            current = current.next;
        }

        longList.head = current;
    }

    // now we can iterate them side by side, and return the first intersecting node
    let curr1 = list1.head;
    let curr2 = list2.head;

    while (curr1 && curr2) {
        if (curr1 === curr2) {
            return curr1
        }

        curr1 = curr1.next;
        curr2 = curr2.next;
    }
}

// this is a pain in the ass to test, so I'm just going to test on paper