/*
        6 kyu
        Character with longest consecutive repetition
        34810794% of 1,204268 of 9,716suic
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        For a given string s find the character c (or C) with longest consecutive repetition and return:

        [c, l]: [string, number]
        where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

        For empty string return:

        ["", 0]
        Happy coding! :)
*/
export function longestRepetition(text: string): [string, number] {
    let maxChar = '';
    let maxCount = 0;
    let currentChar = '';
    let currentCount = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== currentChar) {
            if (currentCount > maxCount) {
                maxChar = currentChar;
                maxCount = currentCount;
            }
            currentChar = text[i];
            currentCount = 1;
        } else {
            currentCount++;
        }
    }
    if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
    }
    return [maxChar, maxCount];
}
/*
TEST RESULTS:
        Time: 2902ms Passed: 2Failed: 0
        Test Results:
        Fixed Tests
        should work with fixed tests
        Completed in 2ms
        Random Tests
        should work with random test
        Completed in 17ms
        You have passed all of the tests! :)
*/