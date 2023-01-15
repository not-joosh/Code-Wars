/*

        8 kyu
        Even or Odd
        162336591% of 26,30017,292 of 317,615suuuzi4 Issues Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/
public class EvenOrOdd {
    public static String even_or_odd(int number) {
        return (number % 2 == 0)? "Even" : "Odd";
    }
}
/*
TEST RESULTS:
        Time: 2153ms Passed: 2Failed: 0
        Test Results:
        EvenOrOddTest
        randomTests
        testEvenOrOdd
        Completed in 25ms
        You have passed all of the tests! :) 
*/