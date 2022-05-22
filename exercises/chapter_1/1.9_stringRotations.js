import expect from "../utils/expect.js";

/**
 * brute force: for each iteration, we can move the first letter of s to the end anche check for matches:
 * (iLikeDogs, DogsiLike) => DogsiLike => ogsiLikeD => gsiLikeDo => siLikeDog => iLikeDogs [MATCH]
 *
 * substring match => all rotations of A are contained in A+A, thus we can simply check
 * if B is a substring of A+A. We also must check for length equality
 * 
 * There are even more ways, such as KMP (Knuth-Morris-Pratt), to further improve the complexity.
 * Brute force and simple check are both quadratic.
 */

// brute force iterative
function rotateStringBruteForce(s, goal) {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {

            s = s.slice(1, s.length) + s[0]
            if (s === goal) { return true }
        }
    }

    return false
}

// brute force recursive
function rotateStringBruteForceRecursive(s, goal, swaps) {

    if (s === goal) { return true }
    if (swaps === goal.length - 1) { return false }

    s = s.slice(1, s.length) + s[0]
    swaps++;

    return rotateStringBruteForceRecursive(s, goal, swaps)
}

// substring check
function rotateWithSubstringsCheck(s, goal) {
    goal = goal.repeat(2)

    if (goal.includes(s)) {
        return true
    }
    return false
}

expect(rotateStringBruteForce, ["iLikeDogs", "LikeDogsi"], true)
expect(rotateStringBruteForce, ["iLikeDogs", "iLikeCats"], false)

expect(rotateStringBruteForceRecursive, ["iLikeDogs", "LikeDogsi", 0], true)
expect(rotateStringBruteForceRecursive, ["iLikeDogs", "iLikeCats", 0], false)


expect(rotateWithSubstringsCheck, ["iLikeDogs", "LikeDogsi"], true)
expect(rotateWithSubstringsCheck, ["iLikeDogs", "iLikeCats"], false)
