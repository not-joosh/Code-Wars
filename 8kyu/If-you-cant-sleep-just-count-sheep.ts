/*
        8 kyu
        If you can't sleep, just count sheep!!
        66718793% of 6,432994 of 76,626joshra
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        If you can't sleep, just count sheep!!

        Task:
        Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
export function countSheep(num: number): string {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
};
/*
TEST RESULTS:
        Time: 3451ms Passed: 2Failed: 0
        Test Results:
        Sample Test Cases
        Should return a string
        Random Test Cases
        Completed in 1ms
        You have passed all of the tests! :)
*/