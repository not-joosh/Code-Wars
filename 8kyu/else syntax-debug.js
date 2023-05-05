/*
        8 kyu
        Grasshopper - If/else syntax debug
        1275091% of 3,56215,192 of 29,251danleavitt0
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        If/else syntax debug
        While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

        checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

        The function receives one parameter health which will always be a whole number between -10 and 10.
*/
function checkAlive(health) {
    if (health <= 0) {
        return false;
    } else {
        return true;
    }
}
/*
TEST RESULTS:
        Time: 738ms Passed: 3Failed: 0
        Test Results:
        check alive function
        should not thrown an error
        should return the proper values
        random tests
        Completed in 5ms
        You have passed all of the tests! :)
*/ 