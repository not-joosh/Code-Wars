/*

                6 kyu
                Create Phone Number
                277755785% of 23,2799,058 of 246,469xDranik
                JavaScript
                Node v18.x
                VIM
                EMACS
                Instructions
                Output
                Past Solutions
                Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

                Example
                createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
                The returned format must be correct in order to complete this challenge.

                Don't forget the space after the closing parentheses!

*/
function createPhoneNumber(n){
        return '(' + n[0] + n[1] + n[2] +')' + ' ' + n[3] + n[4] + n[5] + '-' + n[6] + n[7] + n[8] + n[9]
}
/*
TEST CASES:
                Time: 1004ms Passed: 2Failed: 0
                Test Results:
                Create Phone Number
                Fixed tests
                Random tests
                Completed in 3ms
                You have passed all of the tests! :)
*/