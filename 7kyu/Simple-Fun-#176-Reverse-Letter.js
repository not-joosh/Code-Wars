/*
        7 kyu
        Simple Fun #176: Reverse Letter
        2357293% of 2,6897,828 of 22,464myjinxin20151 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Task
        Given a string str, reverse it and omit all non-alphabetic characters.

        Example
        For str = "krishan", the output should be "nahsirk".

        For str = "ultr53o?n", the output should be "nortlu".

        Input/Output
        [input] string str
        A string consists of lowercase latin letters, digits and symbols.

        [output] a string
*/

function reverseLetter(str) {
    const letters = str.split('').filter(c => c.match(/[a-z]/i));
    return letters.reverse().join('');
}
  

/*
Test Results:
        Time: 993ms Passed: 2Failed: 0
        Test Results:
        Basic Tests
        It should works for basic tests.
        Completed in 2ms
        100 Random Tests --- Testing for correctness of solution
        It should works for random tests.
        Completed in 23ms
        You have passed all of the tests! :)
*/
