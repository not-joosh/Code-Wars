/*
        8 kyu
        Grasshopper - Summation
        105532491% of 13,50717,894 of 169,707danleavitt01 Issue Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Summation
        Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

        For example (Input -> Output):

        2 -> 3 (1 + 2)
        8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
public class GrassHopper {
    public static int summation(int n) {
        int sum = 0;
        for(int i = 0; i <= n; i++)
            sum += i;
        return sum;
    }
}
/*
TEST RESULTS:
        Time: 2612ms Passed: 6Failed: 0
        Test Results:
        GrassHopperTest
        test1
        test2
        test3
        test4
        test5
        test6
        Completed in 34ms
        You have passed all of the tests! :)
*/