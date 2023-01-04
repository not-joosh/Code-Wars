/*

        6 kyu
        Does my number look big in this?
        124320291% of 11,34839,178 of 115,729JulianNicholls5 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

        For example, take 153 (3 digits), which is narcisstic:

            1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
        and 1652 (4 digits), which isn't:

            1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
        The Challenge:

        Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

        Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

*/
function narcissistic(value) {
    // Convert the number to a string so that we can iterate through its digits
    const valueString = value.toString();
    // Initialize a variable to store the sum
    let sum = 0;
    // Iterate through the digits of the number
    for (let i = 0; i < valueString.length; i++) {
      // Get the current digit
      const digit = parseInt(valueString[i]);
      // Add the digit raised to the power of the number of digits to the sum
      sum += Math.pow(digit, valueString.length);
    }
    // Compare the sum to the original number to determine if the number is narcissistic
    return sum === value;
}
/*
        Test Results:
        Time: 745ms Passed: 4Failed: 0
        Test Results:
        Narcissistic Function
        should find small numbers are all narcissistic
        should find these numbers are narcissistic
        should find these numbers are not narcissistic
        should find that some of these are narcissistic
        Completed in 3ms
        You have passed all of the tests! :)
*/