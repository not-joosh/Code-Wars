/*
        8 kyu
        Short Long Short
        1676692% of 3,180525 of 34,6231 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

        Hint for R users:

        The length of string is not always the same as the number of characters
        For example: (Input1, Input2) --> output

        ("1", "22") --> "1221"
        ("22", "1") --> "1221"
*/
export function shortLongShort(a:string, b:string) {
    const shorter = a.length < b.length ? a : b;
    const longer = a.length < b.length ? b : a;
    return shorter + longer + shorter;
};
/*
TEST RESULTS:
        Time: 3047ms Passed: 2Failed: 0
        Test Results:
        Basic tests
        Should pass basic tests
        Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/