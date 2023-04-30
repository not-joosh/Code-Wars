/*
        8 kyu
        Grasshopper - Messi goals function
        1905279% of 5,4863,358 of 62,331danleavitt03 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Messi goals function
        Messi is a soccer player with goals in three leagues:

        LaLiga
        Copa del Rey
        Champions
        Complete the function to return his total number of goals in all three leagues.

        Note: the input will always be valid.

        For example:

        5, 10, 2  -->  17
*/
int goals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
/*
TEST RESULTS:
        Time: 2342ms Passed: 3Failed: 0
        Test Results:
        Goals
        Should_be_0
        Should_be_58
        Should_work_for_random_numbers
        You have passed all of the tests! :)
*/