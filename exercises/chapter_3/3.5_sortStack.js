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


