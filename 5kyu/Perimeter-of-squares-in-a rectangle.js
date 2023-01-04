/*
        5 kyu
        Perimeter of squares in a rectangle
        84217887% of 3,0416,505 of 31,647g9642 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

        Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

        alternative text

        Hint:
        See Fibonacci sequence

        Ref:
        http://oeis.org/A000045

        The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

        perimeter(5)  should return 80
        perimeter(7)  should return 216
*/
function perimeter(n) {
    let sum = 0;
    let a = 1;
    let b = 1;
    for (let i = 0; i <= n; i++) {
      sum += a;
      [a, b] = [b, a + b];
    }
    return sum * 4;
}
/*
Test Results:
        Time: 1011ms Passed: 1Failed: 0
        Test Results:
        Basic tests
        Test
        Completed in 1ms
        You have passed all of the tests! :)
*/
  
