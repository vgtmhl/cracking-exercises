import expect from "../utils/expect.js";

/**
 * there are 3 edits that can be done to a string: 
 * - insert a character 
 * - remove a character 
 * - replace a character 
 * 
 * given two strings, write a function to check if they are 1 edit away 
 * 
 * I see 2 scenarios here: 
 * s1 and s2 have the same length. In this case, I just iterate over checking s1[i] against s2[i], and I accept 1 difference.
 * s1 and s1 have different length by 1. In this case:
 *  - assign the names of short and long 
 *  - iterate checking short[i] against long[i]
 *  - when there is a mismatch, that is the gap. then short[i] = short[0:i-1] + long[i] + short[i+1: end]
 *  - if short === long, then they are one step away. Else they are more than one step away 
 * 
 * Both cases are linear
 */
function isOneAway(s1, s2) {

    let len1 = s1.length;
    let len2 = s2.length;

    let short, long;
    let sameLength = false;

    if (len1 > len2) {
        long = s1
        short = s2
    } else if (len1 < len2) {
        long = s2;
        short = s1;
    } else {
        sameLength = true;
    }

    if (sameLength) {
        return checkSameLength(s1, s2)
    } else {
        return checkDifferentLength(short, long)
    }
}

// oneAway for the replace step
function checkSameLength(s1, s2) {
    let mismatches = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) { mismatches++ }
    }

    return mismatches === 1;
}

// oneAway for the insert/remove step
function checkDifferentLength(short, long) {
    let fixed = false
    let i = 0;

    while (!fixed) {
        if (short[i] !== long[i]) {
            let first = short.slice(0, i)
            let mid = long[i]
            let second = short.slice(i + 1, short.length)

            short = `${first}${mid}${second}`
            fixed = true
        }
        i++
    }

    return short === long
}

expect(isOneAway, ["cat", "cato"], true)
expect(isOneAway, ["cat", "cxt"], true)

expect(isOneAway, ["cat", "scrat"], false)
expect(isOneAway, ["dog", "long"], false)
