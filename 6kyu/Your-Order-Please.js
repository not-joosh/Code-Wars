/*

6 kyu
Your order, please
305263691% of 12,498166 of 123,275iamstone2 Issues Reported
C
Clang 8 / C18
VIM
EMACS
Instructions
Output
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

*/

function order(words) {
    // Split the input string into an array of words
    const wordArray = words.split(' ');
    // Sort the array of words using a compare function that compares
    // the numerical value of the first digit in each word
    wordArray.sort((a, b) => {
        const aNum = +a.match(/\d/);
        const bNum = +b.match(/\d/);
        return aNum - bNum;
    });

    // Join the sorted array of words into a single string and return it
    return wordArray.join(' ');
}





