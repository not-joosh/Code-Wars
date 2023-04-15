/*
        8 kyu
        Is it even?
        1625491% of 3,979447 of 41,604JoniWeiss3 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        In this Kata we are passing a number (n) into a function.

        Your code will determine if the number passed is even (or not).

        The function needs to return either a true or false.

        Numbers may be positive or negative, integers or floats.

        Floats with decimal part non equal to zero are considered UNeven for this kata.
*/
export const testEven = (n : number) : boolean => {
    if(n % 2 === 0) return true;
    else return false;
};
/*
TEST RSEUSLTS:
        Time: 2955ms Passed: 2Failed: 0
        Test Results:
        Tests
        Fixed tests
        Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/