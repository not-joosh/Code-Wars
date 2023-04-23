/*
        7 kyu
        Quadrants 2: Segments
        3188% of 5437 of 204EntityPlantt
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Task
        Your task is to check whether a segment is completely in one quadrant or it crosses more. Return true if the segment lies in two or more quadrants. If the segment lies within only one quadrant, return false.

        There are two parameters: A (coord) and B (coord), the endpoints defining the segment AB.

        No coordinate will be zero; expect that all X and Y are positive or negative.

        Examples
        This whole segment is in the first quadrant.
        [(1, 2), (3, 4)] -> false
        Example 1
        This segment intersects the Y axis, therefore being in two quadrants: I and II.
        [(9, 3), (-1, 6)] -> true
        Example 2
        This segment is completely in the second quadrant.
        [(-1, 6), (-9, 1)] -> false
        Example 3
        Predefined
        There is a class named coord/Coord (see in code). It has the following members:

        (constructor): Constructs the coordinate
        x (number): The X coordinate
        y (number): The Y coordinate
        x (number): The X coordinate
        y (number): The Y coordinate
        operator== (bool): Compares two coordinates if they're the same
        str (string): Turns coordinate into string
        Task Series
        Quadrants
        Quadrants 2: Segments (this kata)
*/
bool quadrant_segment(const coord &A, const coord &B) {
    int quadA = 0, quadB = 0;
    if (A.x > 0 && A.y > 0) quadA = 1;
    else if (A.x < 0 && A.y > 0) quadA = 2;
    else if (A.x < 0 && A.y < 0) quadA = 3;
    else if (A.x > 0 && A.y < 0) quadA = 4;

    if (B.x > 0 && B.y > 0) quadB = 1;
    else if (B.x < 0 && B.y > 0) quadB = 2;
    else if (B.x < 0 && B.y < 0) quadB = 3;
    else if (B.x > 0 && B.y < 0) quadB = 4;
    return quadA != quadB;
}
/*
TEST RESULTS:
        Time: 2698ms Passed: 4Failed: 0
        Test Results:
        Fixed
        Example
        Extra
        Random
        Small
        Large
        You have passed all of the tests! :)
*/