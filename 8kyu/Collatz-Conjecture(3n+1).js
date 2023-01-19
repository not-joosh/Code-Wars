/*
        8 kyu
        Collatz Conjecture (3n+1)
        1274493% of 1,1972,615 of 7,605Goncalerta1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

        [This is writen in pseudocode]
        if(number is even) number = number / 2
        if(number is odd) number = 3*number + 1
        #Task

        Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

        #Examples

        hotpo(1) returns 0
        (1 is already 1)

        hotpo(5) returns 5
        5 -> 16 -> 8 -> 4 -> 2 -> 1

        hotpo(6) returns 8
        6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

        hotpo(23) returns 15
        23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
        #References

        Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
*/
var hotpo = function(n) {
    let count = 0;
    while (n !== 1) {
      count++;
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
    }
    return count;
}
/*
TEST RESULTS:
        Time: 807ms Passed: 2Failed: 0
        Test Results:
        Collatz Conjecture
        Fixed Tests
        Random Tests
        Completed in 1ms
        You have passed all of the tests! :)
*/
  