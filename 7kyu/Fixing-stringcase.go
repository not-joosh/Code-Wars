/*
		7 kyu
		Fix string case
		2197493% of 2,588788 of 22,102KenKamau1 Issue Reported
		Go
		1.18
		VIM
		EMACS
		Instructions
		Output
		In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

		make as few changes as possible.
		if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
		For example:

		solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
		solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
		solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
package kata
import (
    "strings"
)
func solve(str string) string {
    uppercaseCount, lowercaseCount := 0, 0
    for _, c := range str {
        if 'A' <= c && c <= 'Z' {
            uppercaseCount++
        } else if 'a' <= c && c <= 'z' {
            lowercaseCount++
    	}
    }
    if lowercaseCount >= uppercaseCount {
        return strings.ToLower(str)
    }
    return strings.ToUpper(str)
}
/*
TEST RESULTS:
		Time: 2874ms Passed: 2Failed: 0
		Test Results:
		Sample Test Cases:
		Should return the correct values for the sample test cases!
		Random Test Cases:
		Should return the correct values for the 500 random test cases!
		You have passed all of the tests! :)
*/