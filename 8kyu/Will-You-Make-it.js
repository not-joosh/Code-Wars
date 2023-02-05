/*

        8 kyu
        Will you make it?
        35410890% of 6,98337,700 of 85,416user2514386
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

        Considering these factors, write a function that tells you if it is possible to get to the pump or not.

        Function should return true if it is possible and false if not.

*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft;
};
/*
TEST RESULTS:
        Time: 777ms Passed: 3Failed: 0
        Test Results:
        zeroFill
        Sample Tests
        Basic Tests
        Random Tests
        Completed in 1ms
        You have passed all of the tests! :)
*/