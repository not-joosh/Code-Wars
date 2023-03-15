/*
        8 kyu
        Count the number of cubes with paint on
        1501183% of 1,1392,688 of 7,070jackchambers3 Issues Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

        Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

        To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

        Examples:
        countSquares(2) --> 26
        countSquares(4) --> 98
*/
var countSquares = function(cuts){
    return cuts == 0 ? 1 : cuts == 1 ? 8 : (cuts + 1) * (cuts + 1) * (cuts + 1) - (cuts - 1) * (cuts - 1) * (cuts - 1);
}
/*
TEST RESULTS:
        Time: 662ms Passed: 1031Failed: 0
        Test Results:
        Basic tests
        Cuts from 0-30
        (31 of 31 Assertions)
        Completed in 6ms
        Random tests
        1000 Random Tests
        (1000 of 1000 Assertions)
        Completed in 46ms
        You have passed all of the tests! :)
*/