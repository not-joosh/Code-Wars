/*
        8 kyu
        Remove exclamation marks
        36011390% of 5,4467,297 of 62,684wichu
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
class Solution {
    static String removeExclamationMarks(String s) {
        return s.replaceAll("[!]","");   
    }
}
/*
TEST RESULTS:
        Time: 2237ms Passed: 4Failed: 0
        Test Results:
        SolutionTest
        testRandomString
        testSimpleString1
        testSimpleString2
        testSimpleString3
        Completed in 24ms
        You have passed all of the tests! :)
*/