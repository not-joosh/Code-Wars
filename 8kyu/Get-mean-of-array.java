/*
        8 kyu
        Get the mean of an array
        41412092% of 5,9936,707 of 64,652AzariasB1 Issue Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

        Return the average of the given array rounded down to its nearest integer.

        The array will never be empty.
 */
public class School{
    public static int getAverage(int[] marks){
        int sum =0;
        for(int n : marks){
            sum += n;
        }
        return sum / marks.length;
    }
}
/*
TEST RESULTS:
        Time: 2119ms Passed: 3Failed: 0
        Test Results:
        SolutionTest
        ramdomTest
        simpleTest
        extendedTest
        Completed in 26ms
        You have passed all of the tests! :)
 */