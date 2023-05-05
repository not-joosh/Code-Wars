/*
        8 kyu
        Exclamation marks series #1: Remove an exclamation mark from the end of string
        2338492% of 3,1119,912 of 21,949myjinxin20151 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Description:
        Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

        Examples
        remove("Hi!") == "Hi"
        remove("Hi!!!") == "Hi!!"
        remove("!Hi") == "!Hi"
        remove("!Hi!") == "!Hi"
        remove("Hi! Hi!") == "Hi! Hi"
        remove("Hi") == "Hi"
*/
function remove(string) {
    if (string.endsWith('!')) {
        return string.slice(0, -1);
    } else {
        return string;
    }
}
/*
TEST RESULTS:
        Time: 1024ms Passed: 2Failed: 0
        Test Results:
        Tests suite
        sample tests
        random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/