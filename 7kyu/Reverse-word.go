/*
		7 kyu
		Reverse words
		159737791% of 7,8881,224 of 94,048jnicol3 Issues Reported
		Go
		1.18
		VIM
		EMACS
		Instructions
		Output
		Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

		Examples
		"This is an example!" ==> "sihT si na !elpmaxe"
		"double  spaces"      ==> "elbuod  secaps"
*/
package kata

import "strings"

func ReverseWords(str string) string {
	words := strings.Split(str, " ")
	for i, word := range words {
		words[i] = reverse(word)
	}
	return strings.Join(words, " ")
}

func reverse(s string) string {
	r := []rune(s)
	for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}
/*
TEST  RESULTS:
		Time: 2059ms Passed: 2Failed: 0
		Test Results:
		Test Example
		should work for sample test cases
		should work for random tests
		You have passed all of the tests! :)
*/