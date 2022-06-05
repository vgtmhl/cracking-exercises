import LinkedList from '../../structures/linkedList.js'
/**
 * Given a graph, write an algorithm that returns an array of linked lists, each list containing each level of the graph
 */
function createLevelLinkedList(root, lists, level) {
    // base case
    if (root === null) return;

    let list;

    // get the correct list for the current level.
    if (lists.length === level) {
        // list for this level doesn't exist yet, create it and add it to the array
        list = new LinkedList()
        lists.push(list)
    } else {
        list = lists[level]
    }

    list.add(root)
    createLevelLinkedList(root.left, lists, level + 1)
    createLevelLinkedList(root.right, lists, level + 1)
}

function createLevelLinkedLists(root) {
    let lists = []
    createLevelLinkedList(root, lists, 0)
    return lists;
}