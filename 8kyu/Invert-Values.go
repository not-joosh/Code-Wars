/*
		8 kyu
		Invert values
		65116491% of 8,067203 of 100,868user7657844
		Go
		1.18
		VIM
		EMACS
		Instructions
		Output
		Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

		invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
		invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
		invert([]) == []
		You can assume that all values are integers. Do not mutate the input array/list.
*/
package kata

func Invert(arr []int) []int {
    invertedArr := make([]int, len(arr))
    for i, num := range arr {
    	invertedArr[i] = -num
    }
    return invertedArr
}
/*
TEST RESULTS:
		Time: 1702ms Passed: 2Failed: 0
		Test Results:
		Tests
		Sample tests
		Random tests
		You have passed all of the tests! :)
*/