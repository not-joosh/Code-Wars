/*

        7 kyu
        Noisy Cell Counts
        6091% of 4424 of 176amiller.phys
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        A researcher is studying cell division in a large number of samples. Counting the cells in each sample is automated, but when she looks at the data, she immediately notices that something is wrong.

        The data are arrays of integers corresponding to the number of cells in the sample over time. The first element data[0] is the initial count. The next element data[1] is the cell count at a later time. data[2] is the next count, and so on.

        The cells are reproducing, so the elements of the array are supposed to be non-decreasing (there is no cell death), but the automatic cell counter has undercounted. In fact, the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.

        Your task is to create a new non-decreasing array that is minimally different from the data array. For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] is clearly an error.

        The first entry of the array is correct, and does not require an adjustment.
        The array will never be empty.

*/
#include <vector>

std::vector<int> cleaned_counts(const std::vector<int>& data) {
    std::vector<int> result;
    result.push_back(data[0]);
    int last = data[0];
    for (int i = 1; i < data.size(); i++) {
        if (data[i] < last) {
             result.push_back(last);
        } else {
            last = data[i];
            result.push_back(last);
        }
    }
    return result;
}
/*
TEST RESULTS:
        Time: 3379ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Short_Tests
        Random_Tests
        Large_Tests
        STDERR
        You have passed all of the tests! :)
*/
