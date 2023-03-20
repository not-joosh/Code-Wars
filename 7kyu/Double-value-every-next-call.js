/*
        7 kyu
        Double value every next call
        12179% of 67128 of 537antonsacred1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        This kata is about static method that should return different values.

        On the first call it must be 1, on the second and others - it must be a double from previous value.

        Look tests for more examples, good luck :)
*/
class Class {
    static getNumber() {
        if (!Class.currentNumber) {
            Class.currentNumber = 1;
        } else {
            Class.currentNumber *= 2;
        }
        return Class.currentNumber;
    }
}
/*
TEST RESULTS:
        Time: 720ms Passed: 53Failed: 0
        Test Results:
        Tests suite
        call #1
        call #2
        call #3
        call #4
        call #5
        call #6
        call #7
        call #8
        call #9
        call #10
        call #11
        call #12
        call #13
        call #14
        call #15
        call #16
        call #17
        call #18
        call #19
        call #20
        call #21
        call #22
        call #23
        call #24
        call #25
        call #26
        call #27
        call #28
        call #29
        call #30
        call #31
        call #32
        call #33
        call #34
        call #35
        call #36
        call #37
        call #38
        call #39
        call #40
        call #41
        call #42
        call #43
        call #44
        call #45
        call #46
        call #47
        call #48
        call #49
        call #50
        call #51
        call #52
        call #53
        You have passed all of the tests! :)
*/