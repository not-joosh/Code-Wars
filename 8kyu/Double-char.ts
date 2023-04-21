/*
        8 kyu
        Double Char
        46916493% of 5,042739 of 57,768Alpri Else
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

        Examples (Input -> Output):
        * "String"      -> "SSttrriinngg"
        * "Hello World" -> "HHeelllloo  WWoorrlldd"
        * "1234!_ "     -> "11223344!!__  "
        Good Luck!
*/
export function doubleChar(str: string): string {
    let result = '';
    for(let i = 0 ; i < str.length; i++) {
        result += str.charAt(i) + str.charAt(i);
    }
    return result;
};
/*
TEST RESULT:
        Time: 2740ms Passed: 2Failed: 0
        Test Results:
        doubleChar
        works for some examples
        works for random strings
        Completed in 2ms
        You have passed all of the tests! :)
*/