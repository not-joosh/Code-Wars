/*
        8 kyu
        What is between?
        2609293% of 3,694506 of 40,186sgwozdz
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

        For example:

        a = 1
        b = 4
        --> [1, 2, 3, 4]
*/
export function between(a: number, b: number): number[] {
    let arr: number[] = [];
    for(let i = a; i < b + 1; i++) {
        arr.push(i);
    }
    return arr;
};
/*
TEST RESULT:
        Time: 2935ms Passed: 101Failed: 0
        Test Results:
        Basic tests
        Basic tests should work
        Completed in 1ms
        Random tests
        Testing №1 should work with -6 and 18
        Testing №2 should work with 30 and 39
        Testing №3 should work with 18 and 50
        Testing №4 should work with 43 and 79
        Testing №5 should work with -72 and 73
        Testing №6 should work with -43 and 59
        Testing №7 should work with -65 and -60
        Testing №8 should work with -6 and 61
        Testing №9 should work with -75 and 68
        Testing №10 should work with 20 and 60
        Testing №11 should work with 29 and 69
        Testing №12 should work with 44 and 54
        Testing №13 should work with 13 and 63
        Testing №14 should work with -21 and -13
        Testing №15 should work with -70 and 100
        Testing №16 should work with -76 and -4
        Testing №17 should work with 42 and 52
        Testing №18 should work with -81 and 51
        Testing №19 should work with -28 and 89
        Testing №20 should work with -23 and 25
        Testing №21 should work with 11 and 47
        Testing №22 should work with -70 and -34
        Testing №23 should work with -40 and 5
        Testing №24 should work with -8 and 100
        Testing №25 should work with 41 and 55
        Testing №26 should work with 16 and 70
        Testing №27 should work with -92 and 13
        Testing №28 should work with 34 and 53
        Testing №29 should work with -54 and 88
        Testing №30 should work with 3 and 93
        Testing №31 should work with 23 and 28
        Testing №32 should work with -25 and 71
        Testing №33 should work with -86 and 86
        Testing №34 should work with 24 and 50
        Testing №35 should work with 43 and 88
        Testing №36 should work with -25 and 83
        Testing №37 should work with 28 and 90
        Testing №38 should work with -69 and 15
        Testing №39 should work with -68 and 70
        Testing №40 should work with -1 and 63
        Testing №41 should work with -11 and 83
        Testing №42 should work with 37 and 82
        Testing №43 should work with -39 and 7
        Testing №44 should work with -43 and 74
        Testing №45 should work with 6 and 33
        Testing №46 should work with -26 and 81
        Testing №47 should work with 32 and 91
        Testing №48 should work with -36 and 8
        Testing №49 should work with -14 and 12
        Testing №50 should work with -98 and -22
        Testing №51 should work with -87 and 89
        Testing №52 should work with 21 and 35
        Testing №53 should work with -36 and 10
        Testing №54 should work with 30 and 84
        Testing №55 should work with 39 and 44
        Testing №56 should work with -75 and 43
        Testing №57 should work with 35 and 44
        Testing №58 should work with -19 and 25
        Testing №59 should work with -71 and -14
        Testing №60 should work with 42 and 87
        Testing №61 should work with 42 and 55
        Testing №62 should work with 28 and 83
        Testing №63 should work with -57 and -33
        Testing №64 should work with 9 and 12
        Testing №65 should work with -54 and 93
        Testing №66 should work with 37 and 91
        Testing №67 should work with -18 and 54
        Testing №68 should work with -59 and 21
        Testing №69 should work with -47 and 65
        Testing №70 should work with -100 and -78
        Testing №71 should work with -28 and 14
        Testing №72 should work with -78 and -53
        Testing №73 should work with -45 and -16
        Testing №74 should work with -37 and -11
        Testing №75 should work with 10 and 87
        Testing №76 should work with -17 and -11
        Testing №77 should work with -8 and 83
        Testing №78 should work with 39 and 55
        Testing №79 should work with -26 and 21
        Testing №80 should work with 20 and 84
        Testing №81 should work with -96 and -78
        Testing №82 should work with -14 and 78
        Testing №83 should work with -58 and -2
        Testing №84 should work with -6 and 88
        Testing №85 should work with -34 and 10
        Testing №86 should work with 35 and 63
        Testing №87 should work with -71 and 79
        Testing №88 should work with -45 and 47
        Testing №89 should work with -67 and -41
        Testing №90 should work with -65 and 77
        Testing №91 should work with 8 and 52
        Testing №92 should work with 2 and 3
        Testing №93 should work with -92 and 78
        Testing №94 should work with 46 and 80
        Testing №95 should work with -23 and 44
        Testing №96 should work with -97 and 16
        Testing №97 should work with 20 and 50
        Testing №98 should work with -98 and 31
        Testing №99 should work with -66 and 50
        Testing №100 should work with 18 and 95
        Completed in 5ms
        You have passed all of the tests! :)
*/