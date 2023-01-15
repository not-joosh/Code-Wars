/*
        8 kyu
        Beginner - Reduce but Grow
        48415692% of 6,866219 of 83,302PG11 Issue Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

        [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
public class Kata{
    public static int grow(int[] x){
        if(x.length == 0) return 0;
        int product = 1;
        for(int value : x) {
            product *= value;
        } 
        return product;
    }
}
/*
TEST RESULTS:
        Time: 2138ms Passed: 2Failed: 0
        Test Results:
        SolutionTest
        randomTests
        testSomething
        Completed in 22ms
        You have passed all of the tests! :)
*/