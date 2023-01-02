/*

        4 kyu
        Sum of Intervals
        206938692% of 3,0831,698 of 27,983xDranik
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

        Intervals
        Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

        Overlapping Intervals
        List containing overlapping intervals:

        [
        [1,4],
        [7, 10],
        [3, 5]
        ]
        The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

        Examples:
        sumIntervals( [
        [1,2],
        [6, 10],
        [11, 15]
        ] ) => 9

        sumIntervals( [
        [1,4],
        [7, 10],
        [3, 5]
        ] ) => 7

        sumIntervals( [
        [1,5],
        [10, 20],
        [1, 6],
        [16, 19],
        [5, 11]
        ] ) => 19

        sumIntervals( [
        [0, 20],
        [-100000000, 10],
        [30, 40]
        ] ) => 100000030
        Tests with large intervals
        Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].

*/
#include <vector>
#include <utility>
#include <algorithm>

int sum_intervals(std::vector<std::pair<int, int>> intervals) {
    std::sort(intervals.begin(), intervals.end());
    int sum = 0;
    int curr_start = intervals[0].first, curr_end = intervals[0].second;
    for (int i = 1; i < intervals.size(); i++) {
        if (intervals[i].first <= curr_end) {
            curr_end = std::max(curr_end, intervals[i].second);
        } else {
            sum += curr_end - curr_start;
            curr_start = intervals[i].first;
            curr_end = intervals[i].second;
        }
    }
    sum += curr_end - curr_start;
    return sum;
}
/*
Test Results:
        Time: 2985ms Passed: 4Failed: 0
        Test Results:
        Fixed_Tests
        Tests
        Large_Intervals
        Random_Tests
        Small_Tests
        Large_Tests
        STDERR
        You have passed all of the tests! :)
*/