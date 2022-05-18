/**
 * given 2 strings, write a function to determine if one is a permutation of the other
 * i.e. if s2 contains the same characters as s1, possibly in a different order
 */
import expect from "../utils/expect.js"

/**
 * I use a key-value object to map each letter with its frequency for both strings, and then
 * compare the maps.
 * 
 * this runs in N(a) where a is the length of the longest between s1 and s2
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns true if s1 is a permutation of s2. false otherwise.
 */
function checkPermutations(s1, s2) {
    if (s1.length === 0 || s2.length === 0 || s1.length !== s2.length) { return false }

    // populate heatmap for s1
    const s1_heatmap = {}
    for (let i = 0; i < s1.length; i++) {
        let currentChar = s1[i]

        if (!(s1[i] in s1_heatmap)) {
            s1_heatmap[currentChar] = 1
        }
        else {
            s1_heatmap[currentChar] = s1_heatmap[currentChar] + 1
        }
    }

    // populate heatmap for s2
    const s2_heatmap = {}
    for (let i = 0; i < s2.length; i++) {
        let currentChar = s2[i]

        if (!(s2[i] in s2_heatmap)) {
            s2_heatmap[currentChar] = 1
        }
        else {
            s2_heatmap[currentChar] = s2_heatmap[currentChar] + 1
        }
    }

    // if the maps do not contain the same keys, then it's obviously false
    let s1_keys = Object.keys(s1_heatmap).sort().join("")
    let s2_keys = Object.keys(s2_heatmap).sort().join("")

    if (s1_keys !== s2_keys) {
        return false
    }


    // compare heatmaps 
    for (let [key, value] in Object.entries(s1_heatmap)) {

        if (s2_heatmap[key] !== value) {
            return false
        }
    }

    return true
}

expect(checkPermutations, ["teststring", "stringtest"], true)
expect(checkPermutations, ["teststrXng", "stringtest"], false)
expect(checkPermutations, ["doggo", "stringtest"], false)
