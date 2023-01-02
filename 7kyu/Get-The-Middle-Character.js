/*

        7 kyu
        Get the Middle Character
        173751289% of 18,94380,619 of 200,514Shivo
        JavaScript
        TRAINNEXT KATA
        Details
        Solutions
        Forks (177)
        Discourse (342)
        Collect|
        DESCRIPTION:
        You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

        #Examples:

        Kata.getMiddle("test") should return "es"

        Kata.getMiddle("testing") should return "t"

        Kata.getMiddle("middle") should return "dd"

        Kata.getMiddle("A") should return "A"
        #Input

        A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

        #Output

        The middle character(s) of the word represented as a string.

*/

function getMiddle(s) {
    // Determine if the string has an odd or even number of characters
    if (s.length % 2 === 0) {
        // Return the characters at the indices length / 2 - 1 and length / 2 if the string has an even number of characters
        return s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        // Return the character at the index Math.floor(length / 2) if the string has an odd number of characters
        return s[Math.floor(s.length / 2)];
    }
}
