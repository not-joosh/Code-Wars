/*
        7 kyu
        Keypad horror
        551091% of 4011,312 of 3,158Laurynas Lazauskas2 Issues Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Having two standards for a keypad layout is inconvenient!
        Computer keypad's layout:
        7 8 9  \n
        4 5 6  \n
        1 2 3  \n
        0 \n

        Cell phone keypad's layout:
        1 2 3\n 
        4 5 6\n  
        7 8 9\n  
        0\n

        Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

        Example:
        "789" -> "123"

        Notes:
        You get a string with numbers only
*/
function computerToPhone(numbers) {
    const phoneKeypad = [    
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['0']
    ];
    const computerKeypad = [    
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0']
    ];
    let result = '';
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        for (let row = 0; row < computerKeypad.length; row++) {
            const column = computerKeypad[row].indexOf(number);
            if (column !== -1) {
                result += phoneKeypad[row][column];
                break;
            }
        }
    }
    return result;
}
/*
TEST RESULTS:
        Time: 689ms Passed: 14Failed: 0
        Test Results:
        Test Passed: Value == '0123456789'
        Test Passed: Value == '000'
        Test Passed: Value == '34567'
        Test Passed: Value == ''
        Some random tests
        Test Passed: Value == '373910367434667710'
        Test Passed: Value == '7201668741528327'
        Test Passed: Value == '0377341805921523'
        Test Passed: Value == '852022523633'
        Test Passed: Value == '91320649268314793'
        Test Passed: Value == '74406649498910'
        Test Passed: Value == '6958915618577732327'
        Test Passed: Value == '46451014266908'
        Test Passed: Value == '49141571478769614'
        Test Passed: Value == '24051151135239197'
        Completed in 1ms
        You have passed all of the tests! :)
*/