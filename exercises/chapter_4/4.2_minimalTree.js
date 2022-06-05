/**
 * Given a sorted array of unique integers, write an algorithm to build a bst out of it.
 * I will implement a Node class representing the node of a binary tree, with a value and two children
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createMinimalBST(arr, start, end) {
    if (end <= start) { return null }

    // create a node with the medium point of our array
    let mid = Math.floor((start + end) / 2)
    let value = arr[mid]
    let node = new Node(value)

    node.left = createMinimalBST(arr, start, mid)
    node.right = createMinimalBST(arr, mid + 1, end)

    return node

}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tree = createMinimalBST(testArr, 0, 10)
