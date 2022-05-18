/**
 * Util function to test the exercises. 
 * This function accepts the function to test, the arguments, and the expected result. 
 * 
 * The function leverages console.assert to print messages to the console
 * 
 * @param {Function} fn 
 * @param {Array} args 
 * @param {Any} expectedResult 
 */
function expect(fn, args, expectedResult) {
    let actualResult = fn(...args)
    let assertion = actualResult === expectedResult

    console.assert(assertion, `
        arguments: ${args},
        expected result: ${expectedResult}
        actual result: ${actualResult}
    `)
}

export default expect