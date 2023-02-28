/*
		7 kyu
		Two Oldest Ages
		2097790% of 3,2431,100 of 26,941jhoffner4 Issues Reported
		Go
		1.18
		VIM
		EMACS
		Instructions
		Output
		The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

		The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

		For example (Input --> Output):

		[1, 2, 10, 8] --> [8, 10]
		[1, 5, 87, 45, 8, 8] --> [45, 87]
		[1, 3, 10, 0]) --> [3, 10]
*/
package kata

func TwoOldestAges(ages []int) [2]int {
    oldest := 0
    secondOldest := 0
    
    for _, age := range ages {
        if age > oldest {
            secondOldest = oldest
            oldest = age
        } else if age > secondOldest {
            secondOldest = age
        }
    }
    return [2]int{secondOldest, oldest}
}
/*
TEST RESULTS:
		Time: 1642ms Passed: 12Failed: 0
		Test Results:
		TwoOldestAges
		should return 45 and 87 for input []int{1,5,87,45,8,8}
		should return 18 and 83 for input []int{6,5,83,5,3,18}
		should return 95 and 99 for input []int{39,53,83,51,59,61,95,23,99,49}
		should return 91 and 95 for input []int{43,25,83,11,31,91,85,25,95,65}
		should return 83 and 95 for input []int{61,11,33,79,81,27,79,83,9,95}
		should return 81 and 85 for input []int{63,69,15,21,81,77,85,15,19,31}
		should return 87 and 93 for input []int{27,13,25,93,9,65,69,45,83,87}
		should return 89 and 93 for input []int{93,35,53,67,17,23,89,75,15,53}
		should return 69 and 85 for input []int{69,67,59,45,59,37,65,39,85,21}
		should return 87 and 91 for input []int{87,35,43,45,45,71,15,1,91,25}
		should return 71 and 97 for input []int{39,9,3,97,37,27,71,71,67,51}
		should return 89 and 89 for input []int{19,5,43,13,75,89,43,89,25,49}
		You have passed all of the tests! :)
*/