/*
        8 kyu
        Convert number to reversed array of digits
        138932991% of 9,8891,939 of 126,234emporio2 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Convert number to reversed array of digits
        Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

        Example(Input => Output):
        35231 => [1,3,2,5,3]
        0 => [0]
*/
export const digitize = (n: number): number[] => {
    const digits = Array.from(String(n), Number);
    return digits.reverse();
};
/*
TEST RESULTS:
        Time: 3143ms Passed: 3Failed: 0
        Test Results:
        digitize
        Sample test
        Basic tests
        Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/