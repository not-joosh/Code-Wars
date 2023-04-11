/*
        7 kyu
        Insert dashes
        1594792% of 8593,782 of 6,805joh_pot1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

        Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
    const str = num.toString();
    let result = str[0]; 
    for (let i = 1; i < str.length; i++) {
        const prevDigit = parseInt(str[i - 1]);
        const currDigit = parseInt(str[i]);
        if (prevDigit % 2 === 1 && currDigit % 2 === 1) {
            result += '-'; 
        }
        result += str[i]; 
    }
    return result;
}
/*
TEST RESLTS:
        Time: 728ms Passed: 2Failed: 0
        Test Results:
        Insert dashes
        Fixed tests
        Random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/