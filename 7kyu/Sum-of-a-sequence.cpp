/*
        7 kyu
        Sum of a sequence
        41313188% of 3,7424,117 of 34,319fyvfyv1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Your task is to write a function which returns the sum of a sequence of integers.

        The sequence is defined by 3 non-negative values: begin, end, step.

        If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

        Examples

        2,2,2 --> 2
        2,6,2 --> 12 (2 + 4 + 6)
        1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
        1,5,3  --> 5 (1 + 4)
*/
int sequenceSum(int start, int end, int step) {
    if (start > end) {
        return 0;
    }
    int sum = 0;
    for (int i = start; i <= end; i += step) {
        sum += i;
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 2491ms Passed: 2Failed: 0
        Test Results:
        Tests
        BasicTests
        RandomTests
        You have passed all of the tests! :)
*/