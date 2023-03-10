/*
        7 kyu
        You're a square!
        180534188% of 19,58711,139 of 211,089bkaes
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        A square of squares
        You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

        However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

        Task
        Given an integral number, determine if it's a square number:

        In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

        The tests will always use some integral number, so don't worry about that in dynamic typed languages.

        Examples
        -1  =>  false
        0  =>  true
        3  =>  false
        4  =>  true
        25  =>  true
        26  =>  false
*/
#include <cmath>

bool is_square(int n) {
    if (n < 0) {
        return false;
    }
    int root = std::sqrt(n);
    return root * root == n;
}
/*
TEST RESULTS:
        Time: 2437ms Passed: 3Failed: 0
        Test Results:
        is_square_function
        should_work_for_basic_tests
        should_work_for_random_squares
        should_work_for_random_numbers
        You have passed all of the tests! :)
*/