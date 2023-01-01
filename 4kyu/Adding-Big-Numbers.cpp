/*

        4 kyu
        Adding Big Numbers
        81716786% of 2,327672 of 22,338Becojo10 Issues Reported
        C++
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        We need to sum big numbers and we require your help.

        Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

        Example
        add("123", "321"); // returns "444"
        add("11", "99");   // returns "110"
        Notes
        The input numbers are big.
        The input is a string of only digits
        The numbers are positives

*/

#include <iostream>
#include <string>

std::string add(const std::string& a, const std::string& b) {
        // Calculate the length of the result string
        size_t len = a.length() > b.length() ? a.length() : b.length();
        // Allocate memory for the result string
        std::string result(len + 1, '0');
        // Initialize the carry variable to 0
        int carry = 0;
        // Iterate over the input strings, starting from the last character
        for (int i = (int) a.length() - 1, j = (int) b.length() - 1, k = len; i >= 0 || j >= 0; i--, j--, k--) {
                // Convert the current digits to integers and add them
                int sum = carry + (i >= 0 ? a[i] - '0' : 0) + (j >= 0 ? b[j] - '0' : 0);
                // Update the carry variable
                carry = sum / 10;
                // Calculate the digit for the current position
                int digit = sum % 10;
                // Add the digit to the result string
                result[k] = digit + '0';
        }
        // If there is a carry left, add it to the result string
        if (carry > 0) {
                result[0] = carry + '0';
        } 
        else {
                // Remove the leading zero if there is no carry
                result.erase(0, 1);
        }
        return result;
}

/*
Test Results:
                Time: 3662ms Passed: 2Failed: 0
                Test Results:
                Fixed_Tests
                Tests
                Random_Tests
                Tests
                You have passed all of the tests! :)

*/