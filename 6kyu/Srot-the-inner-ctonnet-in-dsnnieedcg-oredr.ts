/*
        6 kyu
        Srot the inner ctonnet in dsnnieedcg oredr
        1634791% of 873242 of 3,887user50368521 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        You have to sort the inner content of every word of a string in descending order.

        The inner content is the content of a word without first and the last char.

        Some examples:

        "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
        "wait for me"        -->  "wiat for me"
        "this kata is easy"  -->  "tihs ktaa is esay"
        Words are made up of lowercase letters.

        The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

        Have fun coding it and please don't forget to vote and rank this kata! :-)

        I have also created other katas. Take a look if you enjoyed this kata!
*/
export function sortTheInnerContent(words: string): string {
    return words.split(' ').map((word) => word.length > 2? word[0] + word.slice(1, word.length - 1)
        .split('')
        .sort((a, b) => b.localeCompare(a))
        .join('') +
        word[word.length - 1] : word
    ).join(' ');
}
/*
TEST RESULTS:
        Time: 3894ms Passed: 2Failed: 0
        Test Results:
        solution
        Example tests
        Random tests
        Completed in 15ms
        You have passed all of the tests! :)
*/