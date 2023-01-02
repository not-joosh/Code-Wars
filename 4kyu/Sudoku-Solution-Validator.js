/*

        4 kyu
        Sudoku Solution Validator
        242253592% of 5,17212,145 of 41,961xDranik39 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Sudoku Background
        Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
        (More info at: http://en.wikipedia.org/wiki/Sudoku)

        Sudoku Solution Validator
        Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

        The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

        Examples
        validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]); // => true
        validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2], 
        [6, 7, 2, 1, 9, 0, 3, 4, 8],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9]
        ]); // => false

*/
function validSolution(board) {
    // Check that all rows, columns, and 3x3 blocks have the correct sum of 45
    for (let i = 0; i < 9; i++) {
        let rowSum = 0;
        let colSum = 0;
        let blockSum = 0;
        for (let j = 0; j < 9; j++) {
            rowSum += board[i][j];
            colSum += board[j][i];
            blockSum += board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];
        }
        if (rowSum !== 45 || colSum !== 45 || blockSum !== 45) {
            return false;
        }
    }
    return true;
}
/*
Test Result:
        Time: 752ms Passed: 1Failed: 0
        Test Results:
        Tests
        test
        Completed in 2ms
        You have passed all of the tests! :)
*/