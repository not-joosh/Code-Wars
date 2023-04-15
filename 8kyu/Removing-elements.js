/*
        8 kyu
        Removing Elements
        49520293% of 4,77126,580 of 47,487MorgzC41
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

        Example:
        ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

        None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr) {
    return arr.filter((_, i) => i % 2 === 0);
}
/*
TEST RESLTS:
        Time: 837ms Passed: 2Failed: 0
        Test Results:
        Basic tests
        Testing for fixed tests
        Completed in 2ms
        Random tests
        Testing for 40 random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/