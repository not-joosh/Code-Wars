/*
7 kyu
Odd-Even String Sort
814094% of 1,236191 of 11,600Joz3 Issues Reported
 TypeScript
4.9
VIM
EMACS
Instructions
Output
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
*/
export function sortMyString(s: string): string {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < s.length; i++) { 
        if (i % 2 === 0) {
            evenChars += s[i];
        } else {
        oddChars += s[i];
        }
    }
    return `${evenChars} ${oddChars}`;
}
/*
TEST RESULTS:
        Time: 2936ms Passed: 2Failed: 0
        Test Results:
        Other Tests
        Static Ones
        Completed in 1ms
        Random Tests
        More Complex Ones
        You have passed all of the tests! :)
*/