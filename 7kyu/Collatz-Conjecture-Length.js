/*

        7 kyu
        Collatz Conjecture Length
        1021892% of 6432,221 of 7,333mandeepb
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        The Collatz Conjecture states that for any positive natural number n, this process:

        if n is even, divide it by 2
        if n is odd, multiply it by 3 and add 1
        repeat
        will eventually reach n = 1.

        For example, if n = 20, the resulting sequence will be:

        [ 20, 10, 5, 16, 8, 4, 2, 1 ]
        Write a program that will output the length of the Collatz Conjecture for any given n.
        In the example above, the output would be 8.

        For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture

*/
function collatz(n) {
    let count = 1;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        count++;
    }
    return count;
}
  
/*
Test Results:
        Time: 859ms Passed: 41Failed: 0
        Test Results:
        Basic Tests
        Fixed tests
        Completed in 1ms
        Random Tests
        Testing for 386776336
        Testing for 17087670
        Testing for 320007748
        Testing for 995989681
        Testing for 94966227
        Testing for 278388468
        Testing for 206562729
        Testing for 112157600
        Testing for 680286411
        Testing for 290388899
        Testing for 29457924
        Testing for 566372179
        Testing for 121107183
        Testing for 330844364
        Testing for 452676598
        Testing for 823299598
        Testing for 918181879
        Testing for 791786528
        Testing for 47658367
        Testing for 281153815
        Testing for 977716129
        Testing for 628897459
        Testing for 175001233
        Testing for 416642640
        Testing for 425879658
        Testing for 73054075
        Testing for 805731555
        Testing for 610321075
        Testing for 542600872
        Testing for 602822534
        Testing for 537557826
        Testing for 542359090
        Testing for 200933806
        Testing for 763752220
        Testing for 605701052
        Testing for 724548484
        Testing for 574253090
        Testing for 770571779
        Testing for 240801686
        Testing for 537945458
        Completed in 2ms
        You have passed all of the tests! :)
*/