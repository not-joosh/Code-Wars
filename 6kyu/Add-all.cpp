/*

        6 kyu
        Add All
        45887% of 12471 of 346DarkD1
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Yup!! The problem name reflects your task; just add a set of numbers. But you may feel yourselves condescended, to write a C/C++ program just to add a set of numbers. Such a problem will simply question your erudition. So, lets add some flavor of ingenuity to it. Addition operation requires cost now, and the cost is the summation of those two to be added. So,to add 1 and 10, you need a cost of 11. If you want to add 1, 2 and 3. There are several ways

        1 + 2 = 3, cost = 3,
        3 + 3 = 6, cost = 6,
        Total = 9.
        1 + 3 = 4, cost = 4,
        2 + 4 = 6, cost = 6,
        Total = 10.
        2 + 3 = 5, cost = 5,
        1 + 5 = 6, cost = 6,
        Total = 11.
        I hope you have understood already your mission, to add a set of integers so that the cost is minimal

        Your Task
        Given a vector of integers, return the minimum total cost of addition.

*/
#include <vector>
#include <queue>

int addAll (const std::vector<int>& numbers) {
    int totalCost = 0;
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    for (int number : numbers) {
        minHeap.push(number);
    }
    while (minHeap.size() > 1) {
        int num1 = minHeap.top();
        minHeap.pop();
        int num2 = minHeap.top();
        minHeap.pop();
        int sum = num1 + num2;
        totalCost += sum;
        minHeap.push(sum);
    }
    return totalCost;
}
/*
TEST RESULTS:
        Time: 2363ms Passed: 3Failed: 0
        Test Results:
        add_all_test
        Sample_Test
        Random_Test
        More_Random_Test
        You have passed all of the tests! :)
*/
