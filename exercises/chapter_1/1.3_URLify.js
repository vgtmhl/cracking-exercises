import expect from "../utils/expect.js"

const URL_SPACE = '%20'
/**
 * function that takes a string, and replaces all instances of space with '%20'.
 * Of course, I am not going to use String.prototype.replace.
 * 
 * The approach will be to iterate over the source string, copying each letter in a dst string.
 * if the letter is a space, I instead append %20 to the dst string.
 * 
 * This solution is O(n)
 * 
 * With array memory manipulation:
 * Another approach would be first count the number of spaces. For each space, allocate 2 extra characters in the array. 
 * 
 * @param {string} str 
 */
function URLify(str) {
    let res = ""

    for (let c of str) {
        if (c === " ") {
            res += "%20"
        }
        else {
            res += c
        }
    }

    return res
}

expect(URLify, ["one two three"], "one%20two%20three")
expect(URLify, ["test"], "test")