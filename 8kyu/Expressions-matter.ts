/*
        8 kyu
        Expressions Matter
        74518086% of 4,429413 of 41,455MrZizoScream1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Task
        Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
        In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
        Example
        With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

        1 * (2 + 3) = 5
        1 * 2 * 3 = 6
        1 + 2 * 3 = 7
        (1 + 2) * 3 = 9
        So the maximum value that you can obtain is 9.

        Notes
        The numbers are always positive.
        The numbers are in the range (1  ≤  a, b, c  ≤  10).
        You can use the same operation more than once.
        It's not necessary to place all the signs and brackets.
        Repetition in numbers may occur .
        You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
        Input >> Output Examples:
        expressionsMatter(1,2,3)  ==>  return 9
        Explanation:
        After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

        expressionsMatter(1,1,1)  ==>  return 3
        Explanation:
        After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

        expressionsMatter(9,1,1)  ==>  return 18
        Explanation:
        After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18. ___# Task

        Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
        In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
        Example
        With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

        1 * (2 + 3) = 5
        1 * 2 * 3 = 6
        1 + 2 * 3 = 7
        (1 + 2) * 3 = 9
        So the maximum value that you can obtain is 9.

        Notes
        The numbers are always positive.
        The numbers are in the range (1  ≤  a, b, c  ≤  10).
        You can use the same operation more than once.
        It's not necessary to place all the signs and brackets.
        Repetition in numbers may occur .
        You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
        Input >> Output Examples:
        expressionsMatter(1,2,3)  ==>  return 9
        Explanation:
        After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

        expressionsMatter(1,1,1)  ==>  return 3
*/
export function expressionsMatter(a: number, b: number, c: number): number {
    const expressions = [
      a + b + c,
      a * b * c,
      a * b + c,
      a + b * c,
      (a + b) * c,
      a * (b + c),
    ];
    return Math.max(...expressions);
};
/*
TEST RESULTS:
        Time: 3175ms Passed: 2Failed: 0
        Test Results:
        Fixed tests
        should work
        Completed in 1ms
        Random tests
        100 random tests
        You have passed all of the tests! :)
*/