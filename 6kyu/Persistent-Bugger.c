/*

    6 kyu
    Persistent Bugger.
    356464592% of 14,9752,271 of 145,604joh_pot1 Issue Reported
    C
    Clang 8 / C18
    VIM
    EMACS
    Instructions
    Output
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    For example (Input --> Output):

    39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
    4 --> 0 (because 4 is already a one-digit number)

*/

/*
    My second solution.
    O(n) time Complexity Solution
*/
int persistence(int n) {
    // Initialize result to 0
    int result = 0;
    // Keep looping until n becomes a single digit
    while (n >= 10) {
        // Initialize the product to 1
        int product = 1;
        // Extract each digit of n and multiply them
        while (n > 0) {
        product *= n % 10;
        n /= 10;
        }
        // Increment the result
        result++;
        // Set n to the product
        n = product;
    }
    return result;
}
/*
TEST RESULTS:
            Test Results:
            Fixed_Cases
            should_pass_all_tests
            (16 of 16 Assertions)
            Completed in 5.4167ms
            Random_Cases
            should_pass_all_tests
            (100 of 100 Assertions)
            Completed in 32.0504ms
*/


/****************************************

    My solution 1

*/
int persistence(int n) {
    if (n < 10) return 0;
    int result = 1;
    while (n > 0) {
        result *= (n % 10);
        n /= 10;
    }
    return 1 + persistence(result);
}

/*
TEST RESULTS:
        Fixed_Cases
        should_pass_all_tests
        (16 of 16 Assertions)
        Completed in 3.2173ms
        Random_Cases
        should_pass_all_tests
        (100 of 100 Assertions)
        Completed in 18.9849ms
*/