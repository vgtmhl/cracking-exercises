import expect from "../utils/expect.js";

/**
 * Given a NxN square matrix representing an image, write a function to rotate it by 90 degrees.
 * Can you do it in place?
 * 
 * Rotating by 90 degrees will result in a matrix where rows and columns are swapped.
 * E.g. first element of first row will be first element of first column,
 * second element of first row will be second element of second column, and so on.
 * 
 * Non in-place: iterate over the matrix cols first, insert each value in another matrix rows first
 * In-place: I can just invert each row, and then calculate the transpose of the matrix.
 * 
 * @param {matrix} m 
 */
function rotateMatrix(m) {
    let side = m[0].length;
    let lastIdx = side - 1;
    let dst = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            dst[j][lastIdx - i] = m[i][j]
        }
    }

    return dst;
}

let testMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
let actual = rotateMatrix(testMatrix)

for (let i = 0; i < actual[0].length; i++) {
    for (let j = 0; j < actual[0]; j++) {
        if (actual[i][j] !== expected[i][j]) {
            throw new Error(`wrong result`)
        }
    }
}

console.log(`all good:P`)

function rotateMatrixInPlace(m) {
    let i;
    let j;

    // invert rows 
    for (i = 0; i < m[0].length; i++) {
        m[i].reverse()
    }

    // transpose resulting matrix
    for (i = 0; i < m[0].length; i++) {
        for (j = 0; j < m[0].length; j++) {
            let temp = m[i][j]
            m[i][j] = m[j][i]
            m[j][i] = temp
        }
    }

    return m
}

let expectedInPlace = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
let actualInPlace = rotateMatrix(testMatrix)

for (let i = 0; i < actualInPlace[0].length; i++) {
    for (let j = 0; j < actualInPlace[0]; j++) {
        if (actualInPlace[i][j] !== expectedInPlace[i][j]) {
            throw new Error(`wrong result`)
        }
    }
}

console.log(`all good in place:P`)
