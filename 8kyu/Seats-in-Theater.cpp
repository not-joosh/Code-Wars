/*
        8 kyu
        Simple Fun #1: Seats in Theater
        2134886% of 2,9971,130 of 18,017myjinxin20153 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Task
        Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

        The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

        Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

        Example
        For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

        seats_in_theater(nCols, nRows, col, row) == 96
        Here is what the theater looks like:



        Input/Output
        [input] integer nCols

        An integer, the number of theater's columns.

        Constraints: 1 ≤ nCols ≤ 1000.

        [input] integer nRows

        An integer, the number of theater's rows.

        Constraints: 1 ≤ nRows ≤ 1000.

        [input] integer col

        An integer, the column number of your own seat (with the rightmost column having index 1).

        Constraints: 1 ≤ col ≤ nCols.

        [input] integer row

        An integer, the row number of your own seat (with the front row having index 1).

        Constraints: 1 ≤ row ≤ nRows.

        [output] an integer
        The number of people who sit strictly behind you and in your column or to the left.
*/
int seats_in_theater(int total_col, int total_row, int col, int row) {
    int people_behind = total_row - row;
    int people_to_left = col - 1;
    return people_behind * (total_col - people_to_left);
}
/*
TEST RESULTS:
        Time: 2432ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Tests
        Random_Tests
        Tests
        You have passed all of the tests! :)
*/