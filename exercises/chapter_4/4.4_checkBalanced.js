function isBalanced(root) {
    /** base case: an empty tree is ofc balanced */
    if (root === null) { return true }

    /** Calculate the height difference of the subtree branches (left and right) */
    let heightDifference = getHeight(root.left) - getHeight(root.right)

    /** If the difference is greater than 1, tree is unbalanced, so we return false */
    if (Math.abs(heightDifference) > 1) { return false }

    /** Else, we run the calculation on the two subtrees */
    else { return isBalanced(root.left) && isBalanced(root.right) }
}

function getHeight(root) {
    /** if root === null, it means we are one step outside of a leaf. So we return -1 to correct the overstepping */
    if (root === null) { return -1 }

    /** Else, we calculate the height of the left and right subtrees */
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}