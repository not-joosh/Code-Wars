/*

        7 kyu
        Count consonants
        541391% of 5161,414 of 4,017bitfragment2 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Complete the function that takes a string of English-language text and returns the number of consonants in the string.

        Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

function consonantCount(str) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) == -1 && str[i].match(/[a-zA-Z]/)) {
            count++;
        }
    }
    return count;
}


/*
TEST CASES:
        Time: 846ms Passed: 2Failed: 0
        Test Results:
        Tests using hard-coded strings
        Should return number of consonants in string
        Completed in 2ms
        Tests using randomly generated strings
        Should return number of consonants in string
        Completed in 1ms
        You have passed all of the tests! :)
*/
/*
ANOTHER SOLUTION:
*/
function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}