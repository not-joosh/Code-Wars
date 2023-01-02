/*
    4 kyu
    Range Extraction
    214944791% of 4,449489 of 40,973jhoffner4 Issues Reported
    C++
    Clang 8 C++17
    VIM
    EMACS
    Instructions
    Output
    A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
    Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

    Example:

    range_extraction({-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20});
    // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/
#include <stdlib.h>
#include <string>
#include <vector>

std::string range_extraction(std::vector<int> args) {
    std::string result;
    // Iterate through the input array.
    for (size_t i = 0; i < args.size(); i++) {
        // Get the first number of the range.
        int start = args[i];
        // Check if the next number is a part of the range.
        size_t j = i + 1;
        for (; j < args.size() && args[j] == args[j - 1] + 1; j++);
        // Check if we have a range or just a single number.
        if (j - i >= 3) {
            // We have a range.
            result += std::to_string(start) + "-" + std::to_string(args[j - 1]) + ",";
        } else if (j - i == 2) {
            // Two numbers.
            result += std::to_string(start) + "," + std::to_string(args[i + 1]) + ",";
        } else {
        // Just a single number.
        result += std::to_string(start) + ",";
        }

        // Continue from the next number after the range.
        i = j - 1;
    }
    // Remove the last comma.
    if (!result.empty()) {
        result.pop_back();
    }
    return result;
}
/*
Test Results:
        Time: 2987ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Tests
        Random_Tests
        Tests
        You have passed all of the tests! :)
*/