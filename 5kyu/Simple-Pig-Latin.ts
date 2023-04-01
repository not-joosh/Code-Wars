/*
        5 kyu
        Simple Pig Latin
        195649086% of 10,4321,252 of 127,853user25058769 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

        Examples
        pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
        pigIt('Hello world !');     // elloHay orldway !
*/
export const pigIt = (a: string): string => {
    return a.split(' ').map((word) => {
        const firstLetter = word.charAt(0);
        const restOfWord = word.slice(1);
        const newWord = restOfWord + firstLetter + 'ay';
        return /[a-zA-Z]/.test(word) ? newWord : word;
    }).join(' ');
};
/*
TEST RESLTS:
        Time: 2975ms Passed: 2Failed: 0
        Test Results:
        Tests
        Fixed tests
        Random test
        Completed in 7ms
        You have passed all of the tests! :)
*/