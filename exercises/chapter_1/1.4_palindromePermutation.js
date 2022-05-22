import expect from "../utils/expect.js"

/**
 * given a string, check if it is a permutation of a palindrome.
 * it does not have to be a real world. Ignore casing and non-letters.
 * 
 * To generalize this, let's ponder upon properties of a palindrome: in a palindrome, each letter
 * must be present an EVEN number of times, with the exception of 1 (if the palindrome has odd length, then 
 * the pivot is oly present once).
 * 
 * So I can generate a frequency map for the letters of s, and then check that AT MOST one letter has odd frequency
 * 
 * generating the map requires to iterate the word, which is O(n) where n is the length of the word.
 * iterating over the values of the map is O(x) where x is the size of the set of letters used in s. 
 */
function palindromePermutation(s) {
    if (s.length <= 1) return false;

    // remove thise space
    s = s.replaceAll(" ", "").toLowerCase()


    let fm = {} // frequency map

    for (let c of s) {
        if (!(c in fm)) { fm[c] = 1 }
        else {
            fm[c] = fm[c] + 1
        }
    }

    let frequencies = Object.values(fm)
    let oddInstances = 0

    for (let f of frequencies) {
        if (f % 2 !== 0) { oddInstances++ }
    }

    if (oddInstances > 1) { return false }

    return true
}

expect(palindromePermutation, ["taco cat"], true)
expect(palindromePermutation, ["tact coA"], true)
expect(palindromePermutation, ["level"], true)
expect(palindromePermutation, ["red rum sir is murder"], true) 