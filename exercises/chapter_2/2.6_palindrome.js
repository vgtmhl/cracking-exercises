/**
 * Implement a function to check if a linked list is a palindrome
 * 
 * Solution: reverse the linked list, compare the result with the original list 
 * (optimization: I do not need to compare the whole list, comparing half of it is enough)
 */

import { getRandomList, LinkedList } from './../../structures/linkedList.js';
import expect from './../../utils/expect.js';

// function that returns true if a linked list is a palindrome
function isPalindrome(list) {
    let invertedList = reverseList(list)

    return compareLists(list, invertedList)
}

// function that takes a list and returns a list that is equal to the inverted first list
function reverseList(list) {
    if (list.size <= 1) { return list }

    let reversedList = new LinkedList();

    let current = list.head;

    while (current) {
        reversedList.appendToHead(current.value)
        current = current.next
    }

    return reversedList
}


// function that compares two lists. Returns true if they are equal 
function compareLists(list_one, list_two) {
    if (list_one.size !== list_two.size) { return false }

    let current_one = list_one.head;
    let current_two = list_two.head;

    while (current_one && current_two) {
        if (current_one.value !== current_two.value) {
            return false;
        }

        current_one = current_one.next;
        current_two = current_two.next;
    }

    return true;
}

const palindromeList = new LinkedList()
palindromeList.appendToTail(5)
palindromeList.appendToTail(10)
palindromeList.appendToTail(15)
palindromeList.appendToTail(20)
palindromeList.appendToTail(15)
palindromeList.appendToTail(10)
palindromeList.appendToTail(5)

const nonPalindromeList = new LinkedList()
nonPalindromeList.appendToTail(1)
nonPalindromeList.appendToTail(10)
nonPalindromeList.appendToTail(8)
nonPalindromeList.appendToTail(20)
nonPalindromeList.appendToTail(15)
nonPalindromeList.appendToTail(31)
nonPalindromeList.appendToTail(5)

expect(isPalindrome, [palindromeList], true)
expect(isPalindrome, [nonPalindromeList], false)