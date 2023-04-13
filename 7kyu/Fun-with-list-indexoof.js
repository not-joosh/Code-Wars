/*
        7 kyu
        Fun with lists: indexOf
        362194% of 336888 of 1,675janitormeir
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

        For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

        The linked list is defined as follows:

        function Node(data, next = null) {
        this.data = data;
        this.next = next;
        }
        Note: the list may be null and can hold any type of value.

        Good luck!
*/
function indexOf(head, value) {
    let current = head;
    let index = 0;
    while (current) {
        if (current.data === value) {
            return index;
        }
        current = current.next;
        index++;
    }
    return -1;
}
/*
TEST RESULTS:
        Time: 680ms Passed: 2Failed: 0
        Test Results:
        indexOf
        basic tests
        random tests
        Completed in 5ms
        You have passed all of the tests! :)
*/ 