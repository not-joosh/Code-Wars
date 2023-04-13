/*
        7 kyu
        Especially Joyful Numbers
        732095% of 7412,222 of 5,004Abelard_Snazz1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

        We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

        its digit sum, s = 1 + 7 + 2 + 9 = 19
        reversing s = 91
        and 19 * 91 = 1729 --> the number that we started with.
        Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/
function numberJoy(n) {
    const sumOfDigits = String(n)
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
    if (n % sumOfDigits !== 0) {
        return false;
    }
    const reversedSumOfDigits = Number(
        String(sumOfDigits).split("").reverse().join("")
    );
    return sumOfDigits * reversedSumOfDigits === n;
}
/*
TEST RESLTS:
        Time: 753ms Passed: 51Failed: 0
        Test Results:
        Basic tests
        numberJoy
        Completed in 1ms
        Random tests
        n = 4458184
        n = 392535
        n = 1451887
        n = 1
        n = 675852
        n = 1173465
        n = 1899735
        n = 3164495
        n = 81
        n = 3770903
        n = 778080
        n = 3832807
        n = 817308
        n = 4132730
        n = 2054020
        n = 3528154
        n = 199655
        n = 3827338
        n = 3030812
        n = 2199017
        n = 4487088
        n = 2181442
        n = 2975737
        n = 536827
        n = 2335463
        n = 1845332
        n = 4011424
        n = 1186602
        n = 2267908
        n = 1729
        n = 81
        n = 2164371
        n = 81
        n = 1224084
        n = 1186758
        n = 1729
        n = 518272
        n = 1204020
        n = 4745831
        n = 661210
        n = 4364327
        n = 1729
        n = 979686
        n = 3566565
        n = 10948
        n = 493835
        n = 1729
        n = 951330
        n = 1729
        n = 1741692
        Completed in 1ms
        You have passed all of the tests! :)
*/