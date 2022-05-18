import expect from "../utils/expect.js"

/**
 * implement an algorithm to determine if a string has duplicates.
 * What id you can't use additional data structures ?
 */

/* Option 1: O(n) with additional data structure (Set) */
function isUnique(s) {
    if (s.length <= 1) { return true }

    let seen = new Set();

    for (let c of s) {
        if (seen.has(c)) {
            return false;
        } else {
            seen.add(c)
        }
    }

    return true;
}

expect(isUnique, ["testString"], false)
expect(isUnique, ["abcdefghijklmnopqrstuvwxyz"], true)


/* Option 2: O(n logn) without additional data structure */
function isUnique2(s) {
    let sorted = s.split("").sort().join("")

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
            return false
        }
    }

    return true
}

expect(isUnique2, ["testString"], false)
expect(isUnique2, ["abcdefghijklmnopqrstuvwxyz"], true)