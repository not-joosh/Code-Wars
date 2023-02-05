/*

        8 kyu
        altERnaTIng cAsE <=> ALTerNAtiNG CaSe
        55316790% of 4,31112,134 of 40,268donaldsebleung1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        altERnaTIng cAsE <=> ALTerNAtiNG CaSe
        Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

        "hello world".toAlternatingCase() === "HELLO WORLD"
        "HELLO WORLD".toAlternatingCase() === "hello world"
        "hello WORLD".toAlternatingCase() === "HELLO world"
        "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
        "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
        "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
        "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

*/
String.prototype.toAlternatingCase = function () {
    let newString = "";
    for (let i = 0; i < this.length; i++) {
        let char = this[i];
        if (char === char.toUpperCase()) {
            newString += char.toLowerCase();
        } else {
            newString += char.toUpperCase();
        }
    }
    return newString;
};
/*
TEST RESULTS:
        Time: 956ms Passed: 4Failed: 0
        Test Results:
        String.prototype.toAlternatingCase
        should work for fixed tests (provided in the description)
        should not modify the original string
        should work for the title of this Kata
        should finally work for random tests
        Completed in 40ms
        You have passed all of the tests! :)
*/