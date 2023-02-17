/*
        8 kyu
        ASCII Total
        755493% of 1,2573,637 of 8,363user3220651
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

        Examples:

        uniTotal("a") == 97
        uniTotal("aaa") == 291
*/
function uniTotal (string) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        total += string.charCodeAt(i);
    }
    return total;
}
/*
TEST RESULTS:
        Time: 870ms Passed: 2Failed: 0
        Test Results:
        sample tests
        random tests
        You have passed all of the tests! :)
*/