/*
        8 kyu
        Grasshopper - Grade book
        40713992% of 5,868899 of 70,268danleavitt01 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Grade book
        Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

        Numerical Score	Letter Grade
        90 <= score <= 100	'A'
        80 <= score < 90	'B'
        70 <= score < 80	'C'
        60 <= score < 70	'D'
        0 <= score < 60	'F'
        Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
export function getGrade(a: number, b: number, c: number): string {
    const average = (a + b + c) / 3;
    if(average >= 90 && average <= 100) {
        return 'A';
    } else if(average >= 80 && average < 90) {
        return 'B';
    } else if(average >= 70 && average < 80) {
        return 'C';
    } else if(average >= 60 && average < 70) {
        return 'D'
    } else {
        return 'F';
    }
};
/*
TEST RESULTS:
        Time: 2889ms Passed: 117Failed: 0
        Test Results:
        should return an A
        getGrade(95, 90, 93)
        getGrade(100, 85, 96)
        getGrade(92, 93, 94)
        getGrade(100, 100, 100)
        Completed in 1ms
        should return a B
        getGrade(70, 70, 100)
        getGrade(82, 85, 87)
        getGrade(84, 79, 85)
        should return a C
        getGrade(70, 70, 70)
        getGrade(75, 70, 79)
        getGrade(60, 82, 76)
        should return a D
        getGrade(65, 70, 59)
        getGrade(66, 62, 68)
        getGrade(58, 62, 70)
        should return an F
        getGrade(44, 55, 52)
        getGrade(48, 55, 52)
        getGrade(58, 59, 60)
        getGrade(0, 0, 0)
        random tests
        getGrade(18, 61, 28)
        getGrade(57, 93, 21)
        getGrade(42, 69, 12)
        getGrade(4, 42, 43)
        getGrade(48, 2, 76)
        getGrade(81, 67, 62)
        getGrade(85, 92, 70)
        getGrade(25, 77, 42)
        getGrade(11, 81, 70)
        getGrade(58, 89, 38)
        getGrade(36, 71, 2)
        getGrade(49, 3, 35)
        getGrade(7, 53, 49)
        getGrade(46, 42, 59)
        getGrade(14, 67, 31)
        getGrade(83, 82, 70)
        getGrade(99, 43, 53)
        getGrade(64, 68, 73)
        getGrade(89, 31, 33)
        getGrade(55, 96, 54)
        getGrade(22, 71, 69)
        getGrade(26, 10, 71)
        getGrade(10, 33, 58)
        getGrade(81, 14, 7)
        getGrade(34, 60, 36)
        getGrade(47, 72, 63)
        getGrade(99, 19, 52)
        getGrade(32, 11, 53)
        getGrade(89, 43, 76)
        getGrade(75, 34, 60)
        getGrade(35, 17, 75)
        getGrade(97, 31, 84)
        getGrade(74, 38, 84)
        getGrade(11, 55, 76)
        getGrade(34, 22, 81)
        getGrade(61, 25, 51)
        getGrade(19, 86, 67)
        getGrade(81, 19, 60)
        getGrade(62, 71, 78)
        getGrade(1, 63, 77)
        getGrade(44, 49, 60)
        getGrade(43, 93, 70)
        getGrade(36, 39, 97)
        getGrade(35, 59, 19)
        getGrade(73, 97, 21)
        getGrade(73, 55, 74)
        getGrade(21, 42, 59)
        getGrade(59, 59, 66)
        getGrade(15, 60, 94)
        getGrade(74, 72, 22)
        getGrade(35, 51, 57)
        getGrade(19, 20, 99)
        getGrade(18, 86, 41)
        getGrade(83, 17, 55)
        getGrade(10, 23, 20)
        getGrade(18, 76, 2)
        getGrade(34, 64, 4)
        getGrade(0, 96, 18)
        getGrade(95, 25, 3)
        getGrade(33, 62, 16)
        getGrade(76, 27, 59)
        getGrade(31, 88, 51)
        getGrade(26, 79, 29)
        getGrade(12, 69, 29)
        getGrade(62, 45, 41)
        getGrade(5, 97, 55)
        getGrade(47, 80, 90)
        getGrade(53, 85, 20)
        getGrade(48, 87, 36)
        getGrade(66, 6, 64)
        getGrade(77, 91, 84)
        getGrade(82, 38, 62)
        getGrade(21, 75, 53)
        getGrade(57, 67, 30)
        getGrade(33, 6, 30)
        getGrade(26, 43, 89)
        getGrade(45, 99, 27)
        getGrade(83, 14, 39)
        getGrade(38, 48, 32)
        getGrade(71, 98, 36)
        getGrade(43, 84, 95)
        getGrade(13, 74, 76)
        getGrade(99, 2, 95)
        getGrade(37, 28, 52)
        getGrade(40, 29, 17)
        getGrade(96, 38, 82)
        getGrade(46, 67, 69)
        getGrade(39, 45, 38)
        getGrade(24, 44, 9)
        getGrade(98, 40, 32)
        getGrade(69, 79, 85)
        getGrade(62, 78, 36)
        getGrade(54, 46, 9)
        getGrade(96, 10, 1)
        getGrade(84, 44, 79)
        getGrade(31, 83, 79)
        getGrade(69, 42, 42)
        getGrade(30, 71, 6)
        getGrade(13, 77, 64)
        getGrade(2, 28, 66)
        Completed in 1ms
        You have passed all of the tests! :)
*/