/*

        4 kyu
        Multiplying numbers as strings
        80215890% of 1,1451,296 of 7,470osofem4 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

        The arguments are passed as strings.
        The numbers may be way very large
        Answer should be returned as a string
        The returned "number" should not start with zeros e.g. 0123 is invalid
        Note: 100 randomly generated tests!

*/
#include <iostream>
#include <string>

using namespace std;

string multiply(string a, string b) {
    // Check if either number is zero
    if (a == "0" || b == "0") return "0";
    // Initialize result string with enough space to hold the result
    string result(a.length() + b.length(), '0');
    // Iterate over each digit in b, starting from the least significant digit
    for (int i = b.length() - 1; i >= 0; i--) {
        // Get the current digit of b
        int b_digit = b[i] - '0';
        // Initialize carry to zero
        int carry = 0;
        // Iterate over each digit in a, starting from the least significant digit
        for (int j = a.length() - 1; j >= 0; j--) {
            // Get the current digit of a
            int a_digit = a[j] - '0';

            // Multiply the two digits and add the carry
            int product = b_digit * a_digit + carry + (result[i + j + 1] - '0');

            // Update the result at the current position
            result[i + j + 1] = (product % 10) + '0';

            // Update the carry for the next iteration
            carry = product / 10;
        }
        // Update the result at the most significant position
        result[i] += carry;
    }
    // Remove any leading zeros from the result
    int i = 0;
    while (i < result.length() && result[i] == '0') i++;
    result = result.substr(i);
    return result;
}
