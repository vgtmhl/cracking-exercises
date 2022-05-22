import expect from "../utils/expect.js";

/**
 * Implement a string compression function based on the number of characters in a string.
 * E.g. aabcccccaaa would compress into a2b1c5a3.
 * 
 * Only return the compressed version if it's shorter than the original string.
 * Assume only lowercase and uppercase letters.
 * 
 * @param {string} s 
 */
function compress(s) {

    let char = s[0];
    let num = 1;
    let res = "";

    for (let i = 1; i < s.length; i++) {
        if (s[i] === char) {
            num++
        }

        if (s[i] !== char || i === s.length - 1) {
            res = res.concat(`${char}${num}`)
            char = s[i]
            num = 1;
        }
    }

    if (res.length < s.length) {
        return res
    }

    return s
}

expect(compress, ["aaaabbccccdeeee"], "a4b2c4d1e4")
expect(compress, ["aaaaaa"], "a6")
expect(compress, ["abcd"], "abcd")