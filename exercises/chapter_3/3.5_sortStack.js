/**
 * Write a program to sort a stack such that the smallest items are on top.
 * You can use another temporary stack, but you cannot use other data structures.
 * The stack supports: push, pop, peek, isEmpty.
 * 
 * Initial situation: I am given a stack that is not sorted
 */
import { Stack } from "../../structures/Stack.js"
let testStack = new Stack()
testStack.push(5)
testStack.push(2)
testStack.push(7)
testStack.push(1)
testStack.push(9) // 5, 2, 7, 1, 9 ==> 1, 2, 5, 7, 9

/**
 * let curr = pop(S1)
 * let next = peek(s1)
 * 
 * if (curr > next) do shuffle1
 * 
 * shuffle1: 
 * while (curr > next) 
 *   let val = pop(s1)
 *   s2.push(val)
 * 
 * s1.push(curr)
 * 
 * while(s2.length) 
 *   let val = pop(s2)
 *   s1.push(val)
 * 
 * if (curr < next) do shuffle2
 * 
 * suffle2:
 * while (curr < next) 
 *   pop smaller values on s2 
 *   insert curr into s1
 *   pop s2 into s1
 */

function sortStack(stack) {
    let s1 = stack;
    let s2 = new Stack()
}


