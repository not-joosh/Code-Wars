/*
        8 kyu
        Count by X
        69717493% of 6,55435,256 of 82,251shums16
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Create a function with two arguments that will return an array of the first n multiples of x.

        Assume both the given number and the number of times to count will be positive numbers greater than 0.

        Return the results as an array or list ( depending on language ).

        Examples
        countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
        countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
};
/*
TEST RESULTS:
        Time: 822ms Passed: 2Failed: 0
        Test Results:
        Basic Tests
        Testing for fixed tests
        Random Tests
        Completed in 2ms
        You have passed all of the tests! :)
*/