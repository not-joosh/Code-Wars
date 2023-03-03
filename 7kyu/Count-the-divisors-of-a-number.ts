/*
        7 kyu
        Count the divisors of a number
        45614591% of 4,2441,128 of 51,367tiriana
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Count the number of divisors of a positive integer n.

        Random tests go up to n = 500000.

        Examples (input --> output)
        4 --> 3 (1, 2, 4)
        5 --> 2 (1, 5)
        12 --> 6 (1, 2, 3, 4, 6, 12)
        30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
        Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
export function divisors(n: number): number {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
/*
TEST RSULTS:
        Time: 3018ms Passed: 106Failed: 0
        Test Results:
        basic tests
        Testing for 1
        Testing for 10
        Testing for 11
        Testing for 54
        Testing for 25
        Testing for 64
        Completed in 1ms
        Random tests
        Testing for 947
        Testing for 460
        Testing for 344
        Testing for 257
        Testing for 418
        Testing for 13
        Testing for 599
        Testing for 240
        Testing for 202
        Testing for 575
        Testing for 329
        Testing for 753
        Testing for 695
        Testing for 451
        Testing for 694
        Testing for 40
        Testing for 975
        Testing for 819
        Testing for 555
        Testing for 151
        Testing for 990
        Testing for 386
        Testing for 284
        Testing for 527
        Testing for 979
        Testing for 451
        Testing for 874
        Testing for 464
        Testing for 175
        Testing for 940
        Testing for 588
        Testing for 892
        Testing for 248
        Testing for 68
        Testing for 463
        Testing for 945
        Testing for 890
        Testing for 950
        Testing for 159
        Testing for 576
        Testing for 593
        Testing for 313
        Testing for 816
        Testing for 389
        Testing for 359
        Testing for 381
        Testing for 139
        Testing for 211
        Testing for 880
        Testing for 579
        Testing for 188
        Testing for 170
        Testing for 635
        Testing for 354
        Testing for 857
        Testing for 215
        Testing for 925
        Testing for 99
        Testing for 445
        Testing for 459
        Testing for 160
        Testing for 997
        Testing for 942
        Testing for 529
        Testing for 116
        Testing for 920
        Testing for 912
        Testing for 272
        Testing for 361
        Testing for 848
        Testing for 332
        Testing for 475
        Testing for 998
        Testing for 352
        Testing for 506
        Testing for 593
        Testing for 437
        Testing for 801
        Testing for 42
        Testing for 380
        Testing for 658
        Testing for 739
        Testing for 942
        Testing for 56
        Testing for 244
        Testing for 322
        Testing for 959
        Testing for 195
        Testing for 130
        Testing for 819
        Testing for 412
        Testing for 542
        Testing for 387
        Testing for 328
        Testing for 197
        Testing for 911
        Testing for 52
        Testing for 185
        Testing for 996
        Testing for 32
        Completed in 10ms
        You have passed all of the tests! :)
*/