/*
        7 kyu
        You Got Change?
        361692% of 3791,151 of 2,274K-Calderon-ASC1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

        array[0] ---> represents $1 bills

        array[1] ---> represents $5 bills

        array[2] ---> represents $10 bills

        array[3] ---> represents $20 bills

        array[4] ---> represents $50 bills

        array[5] ---> represents $100 bills

        In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:

        365 =>  [0,1,1,0,1,3]
        In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:

        217 => [2,1,1,0,0,2]
*/
function giveChange(amount) {
    let bills = [0, 0, 0, 0, 0, 0];
    if (amount >= 100) {
        bills[5] = Math.floor(amount / 100);
        amount = amount % 100;
    }
    if (amount >= 50) {
        bills[4] = Math.floor(amount / 50);
        amount = amount % 50;
    }
    if (amount >= 20) {
        bills[3] = Math.floor(amount / 20);
        amount = amount % 20;
    }
    if (amount >= 10) {
        bills[2] = Math.floor(amount / 10);
        amount = amount % 10;
    }
    if (amount >= 5) {
        bills[1] = Math.floor(amount / 5);
        amount = amount % 5;
    }
    if (amount >= 1) {
        bills[0] = Math.floor(amount / 1);
        amount = amount % 1;
    }
    return bills;
}
/*
TEST RESULTS:
        Time: 744ms Passed: 3Failed: 0
        Test Results:
        You Got Change?
        Tests the example test cases
        Tests for $0
        Tests randomly generated amounts
        Completed in 3ms
        You have passed all of the tests! :)
*/