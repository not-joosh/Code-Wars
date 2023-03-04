/*
        7 kyu
        Cyclops numbers
        511794% of 409700 of 2,384Nmistrata1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
        A couple examples:
        101
        11111111011111111
        You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
        Assume n will be a positive integer.

        A test cases with the process shown:

        cyclops (5)
        """5 in biinary"""
        "0b101"
        """because 101 is made up of all "1"s with a "0" in the middle, 101 is a cyclops number"""
        return True

        cyclops(13)
        """13 in binary"""
        "0b1101"
        """because 1101 has an even number of bits, it cannot be a cyclops"""
        return False

        cyclops(17)
        """17 in binary"""
        "0b10001"
        """Because 10001 has more than 1 "0" it cannot be a cyclops number"""
        return False
        n will always be > 0.
*/
function cyclops(n) {
    const binary = n.toString(2); 
    const middleIndex = Math.floor(binary.length / 2); 
    return binary.length % 2 === 1 && binary[middleIndex] === '0' && binary.indexOf('0', middleIndex + 1) === -1;
}
/*
TEST RESULTS:
        Time: 702ms Passed: 2Failed: 0
        Test Results:
        Cyclops
        basic tests
        random tests
        Completed in 5ms
        You have passed all of the tests! :)
*/