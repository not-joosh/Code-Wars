/*
  8 kyu
  Find the Integral
  822289% of 1,390778 of 9,436K-Calderon-ASC1 Issue Reported
  C++
  Clang 8 C++17
  VIM
  EMACS
  Instructions
  Output
  Create a function that finds the integral of the expression passed.

  In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

  For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

  Notes:

  The output should be a string.
  The coefficient and exponent is always a positive integer.
  Examples
  3, 2  -->  "1x^3"
  12, 5  -->  "2x^6"
  20, 1  -->  "10x^2"
  40, 3  -->  "10x^4"
  90, 2  -->  "30x^3"
*/
#include <string>
#include <sstream>

std::string integrate(const int& coefficient, const int& exponent) {
  int new_coeff = coefficient / (exponent + 1);  
  int new_exp = exponent + 1;  
  std::ostringstream ss;
  ss << new_coeff << "x^" << new_exp;  
  return ss.str();
}
/*
TEST RESULTS:
    Time: 2185ms Passed: 2Failed: 0
    Test Results:
    Test_Cases
    Fixed_Tests
    Random_Tests
    You have passed all of the tests! :)
*/