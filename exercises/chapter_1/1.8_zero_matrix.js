
/**
 * Write a function that takes a NxM matrix with some zeroes in it. The resulting matrix will have values zeroed out
 * for the whole row and column where the initial matrix had a zero value.
 * 
 * E.g. if m has a 0 in [3,1], then all row 3 and column 1 will be filled with zeroes.
 * 
 * Solution: Go through the matrix once and annotate each row and column where a zero appears.
 * Go through it again, and zero out any value in those rows and columns .
 * 
 * @param {[[]]} m 
 */
function zeroMatrix(m) {
    let zeroRows = []
    let zeroCols = []

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[0].length; j++) {
            let curr = m[i][j]

            if (curr === 0) {
                zeroRows.push(i)
                zeroCols.push(j)
            }
        }
    }

    for (let k = 0; k < m.length; k++) {
        for (let l = 0; l < m[0].length; l++) {
            if (zeroRows.includes(k) || zeroCols.includes(l)) {
                m[k][l] = 0;
            }
        }
    }

    return m
}

let testMatrix = [
    [1, 2, 3, 4],
    [5, 6, 0, 8],
    [9, 10, 11, 12]
]

let res = zeroMatrix(testMatrix)

for (let row of res) {
    console.log(row)
}