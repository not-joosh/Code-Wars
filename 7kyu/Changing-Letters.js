/*
        7 kyu
        Changing letters
        572192% of 9382,520 of 5,994MarkusLanz2 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        When provided with a String, capitalize all vowels

        For example:

        Input : "Hello World!"

        Output : "HEllO WOrld!"

        Note: Y is not a vowel in this kata.
*/
function swap(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (vowels.includes(char.toLowerCase())) {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
}
/*
TEST RESULTS:
        Time: 774ms Passed: 2Failed: 0
        Test Results:
        Tests suite
        sample tests
        random tests
        Completed in 4ms
        You have passed all of the tests! :)
*/