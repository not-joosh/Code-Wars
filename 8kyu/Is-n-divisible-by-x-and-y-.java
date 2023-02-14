/*

        8 kyu
        Is n divisible by x and y?
        43215691% of 9,3483,313 of 89,020naaz
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

        Examples:
        1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
        2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
        3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
        4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

*/
public class DivisibleNb {
	public static boolean isDivisible(long n, long x, long y) {
	    if(n % x == 0 && n % y == 0) return true;
        return false;
	}
}
/*
TEST RESULTS:
        Time: 1841ms Passed: 11Failed: 0
        Test Results:
        DivisibleNbTests
        test10
        test11
        test1
        test2
        test3
        test4
        test5
        test6
        test7
        test8
        test9
        Completed in 32ms
        You have passed all of the tests! :)
*/