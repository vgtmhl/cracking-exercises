/**
 * Given the root of a tree, write a function to validate if it's a binary search tree.
 * 
 * A tree is a BST if all its subtrees are valid BSTs.
 */

function isValidBST(root, min, max) {
    /** If we got to the leaves without meeting the breaking condition */
    if (!root) { return true }

    /** if the node is smaller than the minimum or larger than the maximum, then it breaks the BST properties */
    if (root.val < min || root.val > max) { return false }
    else return (
        /**
         * Else, we test the subtrees:
         * - the left subnode shound not be larger than the current node.
         * - the right subnode should not be smaller than the current node.
         */
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    )
}