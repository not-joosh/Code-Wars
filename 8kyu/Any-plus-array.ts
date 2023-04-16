/*
        8 kyu
        Array plus array
        32215293% of 6,221267 of 57,831Dmitry Kudla1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

        P.S. Each array includes only integer numbers. Output is a number too.
*/
export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
    let sum1: number = 0;
    let sum2: number = 0;
    arr1.map((number) => {
        sum1 += number;
    }); 
    arr2.map((number) => {
        sum2 += number;
    });
    return sum1 + sum2; 
};
/*
TEST RESULTS:
        Time: 3182ms Passed: 2Failed: 0
        Test Results:
        Tests
        Fixed tests
        Random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/