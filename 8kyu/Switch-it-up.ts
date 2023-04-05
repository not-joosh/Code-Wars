/*
        8 kyu
        Switch it Up!
        2688989% of 4,744605 of 52,968iamchingel2 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        When provided with a number between 0-9, return it in words.

        Input :: 1

        Output :: "One".

        If your language supports it, try using a switch statement.
*/
export function switchItUp(intNumber:number):string {
    switch(intNumber) {
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Zero";
    }
}
/*
TEST RESULTS:
        Time: 2928ms Passed: 2Failed: 0
        Test Results:
        solution
        Basic Tests
        random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/