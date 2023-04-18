/*
        8 kyu
        Multiplication table for number
        3596187% of 3,05299 of 27,756Dmitry Kudla1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Your goal is to return multiplication table for number that is always an integer from 1 to 10.

        For example, a multiplication table (string) for number == 5 looks like below:

        1 * 5 = 5
        2 * 5 = 10
        3 * 5 = 15
        4 * 5 = 20
        5 * 5 = 25
        6 * 5 = 30
        7 * 5 = 35
        8 * 5 = 40
        9 * 5 = 45
        10 * 5 = 50
        P. S. You can use \n in string to jump to the next line.

        Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/
export function multiTable(number:number):string {
    return (`1 * ${number} = ${1*number}\n2 * ${number} = ${2*number}\n3 * ${number} = ${3*number}\n4 * ${number} = ${4*number}\n5 * ${number} = ${5*number}\n6 * ${number} = ${6*number}\n7 * ${number} = ${7*number}\n8 * ${number} = ${8*number}\n9 * ${number} = ${9*number}\n10 * ${number} = ${10*number}`)
};
/*
TEST RESULTS:
        Time: 2760ms Passed: 2Failed: 0
        Test Results:
        Basic tests
        Testing for fixed tests
        Random Tests
        Testing for 48 random tests
        Completed in 1ms
        You have passed all of the tests! :)
*/