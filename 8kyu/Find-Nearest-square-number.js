/*

        8 kyu
        Find Nearest square number
        1975990% of 1,8285,088 of 13,316riyakayal
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

        For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

        If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

        Good luck :)

*/
function nearestSq(n) {
    let sqrt = Math.sqrt(n);
    let rounded = Math.round(sqrt);
    let nearest = rounded * rounded;
    return nearest;
}
/*
TEST CASES:
        Time: 793ms Passed: 3Failed: 0
        Test Results:
        Find Nearest square number
        Fixed tests
        Small random tests (n <= 200000)
        Big random tests (n <= 2000000)
        Completed in 3ms
        You have passed all of the tests! :)
*/
