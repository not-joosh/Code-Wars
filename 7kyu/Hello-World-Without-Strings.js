/*
        7 kyu
        Hello World - Without Strings
        602090% of 5731,473 of 2,820user9079873
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Task
        You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

        You cannot use the following:

        "Hello, World!"
        'Hello, World!'
        `Hello, World!`
        Good luck and try to be as creative as possible!
*/

const helloWorld = () => {
    const h = 72;
    const e = 101;
    const l1 = 108;
    const l2 = 108;
    const o = 111;
    const comma = 44;
    const space = 32;
    const w = 87;
    const r = 114;
    const d = 100;
    const exclaimationMark = 33;

    return String.fromCharCode(h, e, l1, l2, o, comma, space, w, o, r, l1, d, exclaimationMark);
};
/*
TEST RESULTS:
        Time: 750ms Passed: 2Failed: 0
        Test Results:
        Hello World with out Strings
        Basic Checks
        Hello, World!
        You have passed all of the tests! :)
*/