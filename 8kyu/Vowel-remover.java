/*
        8 kyu
        Vowel remover
        2649392% of 2,966751 of 27,657naaz2 Issues Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

        Examples
        "hello"     -->  "hll"
        "codewars"  -->  "cdwrs"
        "goodbye"   -->  "gdby"
        "HELLO"     -->  "HELLO"
*/

public class Kata {
    public static String shortcut(String input) {
        return input.replaceAll("[aeiou]","");   
    }
}

/*
TEST RESULTS:
        Time: 2345ms Passed: 2Failed: 0
        Test Results:
        KataTest
        randomTests()
        test1()
        Completed in 85ms
        You have passed all of the tests! :)
*/