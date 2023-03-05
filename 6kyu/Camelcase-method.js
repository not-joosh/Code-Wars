/*
        6 kyu
        CamelCase Method
        45814088% of 4,0588,789 of 35,173bestwebua7 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

        For instance:

        "hello case".camelCase() => HelloCase
        "camel case word".camelCase() => CamelCaseWord
        Don't forget to rate this kata! Thanks :)
*/
String.prototype.camelCase = function() {
    return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};
/*
TEST RESULTS:
        Time: 883ms Passed: 41Failed: 0
        Test Results:
        All tests
        Basic tests
        Random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/