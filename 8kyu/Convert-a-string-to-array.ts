/*
        8 kyu
        Convert a string to an array
        46116690% of 6,7411,362 of 86,751samjam483 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Write a function to split a string and convert it into an array of words.

        Examples (Input ==> Output):
        "Robin Singh" ==> ["Robin", "Singh"]

        "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
export function stringToArray(s: string): string[] {
    return s.split(' ');
};
/*
TEST RESULT:
        Time: 2837ms Passed: 3Failed: 0
        Test Results:
        stringToArray
        example 1
        example 2
        random tests
        Completed in 12ms
        You have passed all of the tests! :)
*/