/*
        7 kyu
        Product Array (Array Series #5)
        1083592% of 9552,261 of 6,012MrZizoScream3 Issues Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Introduction and Warm-up (Highly recommended)
        Playing With Lists/Arrays Series
        Task
        Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

        Notes
        Array/list size is at least 2 .

        Array/list's numbers Will be only Positives

        Repetition of numbers in the array/list could occur.

        Input >> Output Examples
        productArray ({12,20}) ==>  return {20,12}
        Explanation:
        The first element in prod [] array 20 is the product of all array's elements except the first element

        The second element 12 is the product of all array's elements except the second element .

        productArray ({1,5,2}) ==> return {10,2,5}
        Explanation:
        The first element 10 is the product of all array's elements except the first element 1

        The second element 2 is the product of all array's elements except the second element 5

        The Third element 5 is the product of all array's elements except the Third element 2.

        productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
        Explanation:
        The first element 180 is the product of all array's elements except the first element 10

        The second element 600 is the product of all array's elements except the second element 3

        The Third element 360 is the product of all array's elements except the third element 5

        The Fourth element 300 is the product of all array's elements except the fourth element 6

        Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

        A more challenging version of this kata by Firefly2002
        Playing with Numbers Series
        Playing With Lists/Arrays Series
        For More Enjoyable Katas
        ALL translations are welcomed
        Enjoy Learning !!
        Zizou
*/
function productArray(numbers) {
    const product = numbers.reduce((acc, cur) => acc * cur, 1);
    return numbers.map(num => product / num); 
}
/*
TEST RESULTS:
        Time: 615ms Passed: 44Failed: 0
        Test Results:
        Basic Tests
        Test Passed: Value == '[20, 12]'
        Test Passed: Value == '[216, 24, 162, 324]'
        Test Passed: Value == '[900, 1170, 2340, 5850, 1300]'
        Test Passed: Value == '[2040, 1920, 8160, 10880, 6528, 16320]'
        Completed in 4ms
        Random Tests
        Testing for [93, 7, 5, 6, 78, 3, 9, 98]
        Testing for [10, 10, 9, 48, 7, 84, 1]
        Testing for [56, 23, 6, 98, 3, 98, 2]
        Testing for [5, 5, 53]
        Testing for [3, 8, 1, 78, 56, 2, 87, 46, 10]
        Testing for [62, 6, 5, 5, 67, 8, 2, 3, 69]
        Testing for [2, 6]
        Testing for [5, 2, 16, 1, 3, 4, 7, 1, 8, 4]
        Testing for [61, 2, 4, 38, 2, 1, 10]
        Testing for [2, 2, 8, 3, 41, 53, 5]
        Testing for [1, 1, 3, 98]
        Testing for [14, 5]
        Testing for [2, 91, 40, 3]
        Testing for [5, 9, 29, 10, 34, 7]
        Testing for [4, 10, 6, 2, 41, 10, 26, 2, 88, 98]
        Testing for [10, 18]
        Testing for [33, 38, 62, 2, 1, 3, 6, 17, 5]
        Testing for [9, 69, 58, 17]
        Testing for [7, 84, 1, 1, 57, 2, 69]
        Testing for [8, 2, 66]
        Testing for [4, 18, 17, 1, 69]
        Testing for [3, 3, 55, 35, 50, 48, 29, 38, 65, 83]
        Testing for [91, 86]
        Testing for [9, 10, 95]
        Testing for [4, 44, 10, 6]
        Testing for [95, 4, 35, 91, 10, 32, 6, 2, 68, 5]
        Testing for [1, 7, 2, 42, 7, 60]
        Testing for [1, 49, 83, 4]
        Testing for [3, 25, 36]
        Testing for [83, 80, 1, 3, 8, 10, 28]
        Testing for [10, 76, 1, 17, 6, 10, 54, 1]
        Testing for [8, 85]
        Testing for [43, 21, 2, 64, 80, 10]
        Testing for [48, 9, 53, 1]
        Testing for [14, 5, 53]
        Testing for [10, 6, 12, 78, 2, 6, 6]
        Testing for [4, 11]
        Testing for [8, 9, 4, 7, 53, 4]
        Testing for [72, 27, 8, 84, 8]
        Testing for [6, 12, 85, 28, 95, 2]
        Completed in 9ms
        You have passed all of the tests! :)
*/