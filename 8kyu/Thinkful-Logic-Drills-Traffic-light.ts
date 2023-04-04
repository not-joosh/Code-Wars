/*
        8 kyu
        Thinkful - Logic Drills: Traffic light
        30110192% of 5,235537 of 65,273Grae-Drake
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

        Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

        For example, when the input is green, output should be yellow.
*/
export function updateLight(current: string): string {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            throw new Error('Invalid traffic light color');
    }
}
/*
TEST RESULTS:
        Time: 3693ms Passed: 2Failed: 0
        Test Results:
        Thinkful - Logic Drills: Traffic light
        Testing for fixed tests
        Random tests
        Completed in 1ms
        You have passed all of the tests! :)
*/