/*
        8 kyu
        Geometry Basics: Distance between points in 2D
        1934087% of 1,4124,223 of 11,156taw
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        This series of katas will introduce you to basics of doing geometry with computers.

        Point objects have attributes x and y.

        Write a function calculating distance between Point a and Point b.

        Tests compare expected result and actual answer with tolerance of 1e-6.
*/
function distanceBetweenPoints(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}
/*
TEST RESULTS:
        Time: 812ms Passed: 2Failed: 0
        Test Results:
        Solution
        Fixed tests
        Random Tests
        Completed in 7ms
        You have passed all of the tests! :)
*/