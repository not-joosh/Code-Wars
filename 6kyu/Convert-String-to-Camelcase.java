/*
        6 kyu
        Convert string to camel case
        238345788% of 13,16216,912 of 133,652jhoffner23 Issues Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

        Examples
        "the-stealth-warrior" gets converted to "theStealthWarrior"
        "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

import java.lang.StringBuilder;

class Solution {
    public static String toCamelCase(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        boolean nextUpper = false;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '-' || c == '_') {
                nextUpper = true;
            } else {
                if (nextUpper) {
                    sb.append(Character.toUpperCase(c));
                    nextUpper = false;
                } else {
                    sb.append(c);
                }
            }
        }
    return sb.toString();
    }
}

/*
TEST RESULTS:
        Time: 2205ms Passed: 7Failed: 0
        Test Results:
        SolutionTest
        testSomeDashUpperStart
        testSomeUnderscoreLowerStart
        testLongOne
        testEmptyString
        shouldWorkWithRandomValues
        testSomeUnderscoreUpperStart
        testSomeDashLowerStart
        Completed in 34ms
        You have passed all of the tests! :)
*/