/*
        8 kyu
        Grasshopper - Terminal game move function
        1526185% of 4,3431,794 of 44,172danleavitt0
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Terminal game move function
        In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

        Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

        Example:
        move(3, 6) should equal 15
*/
int move(int position, int roll) {
    return position + roll * 2;
}
/*
TEST RESULTS:
        Time: 2758ms Passed: 2Failed: 0
        Test Results:
        TerminalGameMove
        FixedTests
        RandomTests
        You have passed all of the tests! :)
*/