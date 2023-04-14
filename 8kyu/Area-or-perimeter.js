/*
        8 kyu
        Area or Perimeter
        2045592% of 5,36224,268 of 66,848no one1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
        If it is a square, return its area. If it is a rectangle, return its perimeter.

        Example(Input1, Input2 --> Output):

        6, 10 --> 32
        3, 3 --> 9
        Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/
const areaOrPerimeter = function(l, w) {
    if (l === w) {
        return l * l;
    } else {
        return 2 * (l + w);
    }
};
/*
TEST RESULTS:
        Time: 886ms Passed: 2Failed: 0
        Test Results:
        Tests
        Example tests
        Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/