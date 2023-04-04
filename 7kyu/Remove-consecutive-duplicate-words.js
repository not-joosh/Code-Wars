/*
        7 kyu
        Remove consecutive duplicate words
        1234094% of 8923,514 of 6,197e.mihaylin
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

        --> "alpha beta gamma delta alpha beta gamma delta"
        Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/
function removeConsecutiveDuplicates(string) {
    const words = string.split(' ');
    const filteredWords = words.filter((word, index) => word !== words[index - 1]);
    return filteredWords.join(' ');
}
/*
TEST RESULTS:
        Time: 785ms Passed: 2Failed: 0
        Test Results:
        Tests
        Fixed tests
        Random tests
        Completed in 5ms
        You have passed all of the tests! :)
*/