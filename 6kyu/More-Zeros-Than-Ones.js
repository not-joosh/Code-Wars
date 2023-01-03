/*

        6 kyu
        More Zeros than Ones
        811393% of 434972 of 2,057crimbus1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

        You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

        Examples

        'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
                    True       True       False      True       False
                        
                --> ['a','b','d']
            
        'DIGEST'--> ['D','I','E','T']

*/
function moreZeros(s) {
    const result = [];
    const seen = new Set();
    for (const c of s) {
        const binary = c.charCodeAt(0).toString(2);
        let zeroCount = 0;
        let oneCount = 0;
        for (const b of binary) {
            if (b === '0') {
                zeroCount++;
            } else if (b === '1') {
                oneCount++;
            }
        }
        if (zeroCount > oneCount && !seen.has(c)) {
            result.push(c);
            seen.add(c);
        }
    }
    return result;
 }
/*
Test Results:
        Time: 1034ms Passed: 3Failed: 0
        Test Results:
        Function testing
        Basic tests
        No duplicates
        Random Tests
        Completed in 6ms
        You have passed all of the tests! :)
*/