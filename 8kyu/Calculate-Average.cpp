/*
        8 kyu
        Calculate average
        45315789% of 8,1013,825 of 94,006wichu6 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function which calculates the average of the numbers in a given list.

        Note: Empty arrays should return 0.
*/
#include <vector>

double calcAverage(const std::vector<int>& values) {
    if (values.empty()) {
        return 0;
    }
    double sum = 0;
    for (int value : values) {
        sum += value;
    }
    return sum / values.size();
}
/*
TEST RESULT:
        Time: 3016ms Passed: 5Failed: 0
        Test Results:
        Calculate_List_Average
        Check_Small_Positive_Values
        Check_Small_Mixed_Values
        Check_Medium_Values_and_Size
        Check_Larger_Values_and_Size
        Test_Random_Numbers
        You have passed all of the tests! :)
*/