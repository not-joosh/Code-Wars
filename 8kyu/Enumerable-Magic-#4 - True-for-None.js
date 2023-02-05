/*

        8 kyu
        Enumerable Magic #4 - True for None?
        751290% of 7933,294 of 5,229bellmyer1 Issue Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

*/
function none(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) return false;
    }
    return true;
}
/*
TEST RESULTS:
        Time: 623ms Passed: 5Failed: 0
        Test Results:
        none ?
        Test Passed: Value == true
        Test Passed: Value == false
        Test Passed: Value == false
        Test Passed: Value == false
        Test Passed: Value == true
        Completed in 4ms
        You have passed all of the tests! :)
*/