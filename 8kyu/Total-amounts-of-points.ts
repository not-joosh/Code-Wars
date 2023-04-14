/*
        8 kyu
        Total amount of points
        99727892% of 6,087266 of 68,540petrosernivka1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Our football team has finished the championship.

        Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

        For example: ["3:1", "2:2", "0:1", ...]

        Points are awarded for each match as follows:

        if x > y: 3 points (win)
        if x < y: 0 points (loss)
        if x = y: 1 point (tie)
        We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

        Notes:

        our team always plays 10 matches in the championship
        0 <= x <= 4
        0 <= y <= 4
*/
export function points(games: string[]): number {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
        const [ourScore, opponentScore] = games[i].split(":").map(Number);
        if (ourScore > opponentScore) {
            totalPoints += 3;
        } else if (ourScore === opponentScore) {
            totalPoints += 1;
        }
    }
    return totalPoints;
};
/*
TEST RESULT:
        Time: 2870ms Passed: 55Failed: 0
        Test Results:
        Basic tests
        Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])
        Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])
        Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])
        Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])
        Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])
        Completed in 1ms
        Random tests
        Testing for points = ['2:2','2:0','3:2','3:0','3:1','4:2','2:4','2:2','2:2','3:2'] = 
        Testing for points = ['0:2','2:1','4:1','0:3','2:0','1:1','4:3','0:2','1:2','3:4'] = 
        Testing for points = ['0:4','3:3','0:0','2:2','0:1','2:4','0:0','3:1','0:1','4:1'] = 
        Testing for points = ['2:1','0:0','3:2','2:3','0:3','3:3','2:3','2:3','1:0','4:1'] = 
        Testing for points = ['1:0','3:3','2:3','2:3','0:4','1:3','4:3','1:1','4:3','3:0'] = 
        Testing for points = ['0:2','1:0','4:4','1:2','2:0','0:2','4:4','1:4','0:3','3:1'] = 
        Testing for points = ['3:4','3:2','2:0','2:1','1:3','1:0','1:0','3:1','1:1','4:2'] = 
        Testing for points = ['1:2','3:4','1:1','0:0','0:2','4:3','1:4','1:3','3:4','1:0'] = 
        Testing for points = ['3:3','3:1','1:4','1:4','1:4','2:4','2:1','0:2','4:1','0:2'] = 
        Testing for points = ['4:1','4:4','2:0','3:0','0:0','2:4','3:2','4:1','4:1','3:2'] = 
        Testing for points = ['2:0','4:2','4:0','0:3','1:0','3:3','3:2','1:4','4:3','0:0'] = 
        Testing for points = ['2:2','2:2','1:2','4:3','2:3','2:3','1:1','0:0','0:2','1:2'] = 
        Testing for points = ['3:0','0:2','1:1','0:4','1:3','0:4','3:1','4:0','3:4','4:3'] = 
        Testing for points = ['1:1','2:3','1:1','4:0','4:3','0:3','4:3','0:4','3:3','3:1'] = 
        Testing for points = ['0:1','3:4','1:1','2:3','3:0','1:3','2:1','3:2','1:1','0:2'] = 
        Testing for points = ['4:2','2:2','0:2','4:1','4:0','2:0','4:1','2:1','4:1','4:1'] = 
        Testing for points = ['2:3','3:4','0:4','1:3','0:2','0:3','0:0','0:0','4:2','2:2'] = 
        Testing for points = ['3:3','4:0','2:0','2:0','0:4','0:2','2:3','0:0','1:3','3:4'] = 
        Testing for points = ['1:3','3:0','1:0','0:1','0:0','3:1','2:3','4:4','2:0','3:2'] = 
        Testing for points = ['1:3','0:1','1:2','4:1','3:4','1:3','0:3','1:0','3:1','3:2'] = 
        Testing for points = ['2:0','0:3','1:3','0:0','0:3','4:0','4:0','4:2','1:2','4:0'] = 
        Testing for points = ['1:3','4:2','1:0','1:4','3:4','4:3','2:1','4:0','2:4','4:3'] = 
        Testing for points = ['4:4','0:0','1:0','1:1','1:1','2:1','4:3','1:0','4:0','1:3'] = 
        Testing for points = ['4:4','4:0','0:0','1:4','4:3','2:4','1:1','3:1','4:3','0:0'] = 
        Testing for points = ['4:1','1:1','3:4','0:2','3:1','1:0','0:3','1:0','1:0','1:1'] = 
        Testing for points = ['4:3','2:3','4:0','4:2','4:1','4:4','3:0','1:2','4:1','2:0'] = 
        Testing for points = ['3:4','2:3','0:4','1:3','1:0','2:4','4:0','2:0','0:2','1:2'] = 
        Testing for points = ['4:1','2:1','4:1','4:2','2:0','4:1','1:3','0:4','2:0','3:1'] = 
        Testing for points = ['2:2','1:2','2:1','0:1','0:4','1:0','0:2','0:3','2:1','2:1'] = 
        Testing for points = ['3:3','1:3','0:0','0:2','3:0','2:3','4:1','1:3','0:0','2:1'] = 
        Testing for points = ['4:2','4:4','4:4','0:3','1:1','3:4','3:4','4:2','1:1','0:2'] = 
        Testing for points = ['3:3','2:1','3:0','1:1','0:0','1:2','1:0','4:3','4:0','0:2'] = 
        Testing for points = ['4:1','4:0','0:0','1:3','1:1','2:1','0:3','4:3','2:1','4:0'] = 
        Testing for points = ['3:2','2:2','1:2','4:1','2:1','1:0','4:1','4:0','2:4','0:3'] = 
        Testing for points = ['3:0','4:2','3:2','2:1','1:0','3:3','4:0','4:3','2:0','0:0'] = 
        Testing for points = ['0:0','0:1','1:4','4:4','0:3','3:4','4:0','1:1','3:0','0:1'] = 
        Testing for points = ['4:2','4:3','2:3','1:4','4:1','1:1','4:4','3:2','1:1','4:1'] = 
        Testing for points = ['1:4','3:2','3:4','2:2','0:3','3:2','0:0','4:4','3:0','2:0'] = 
        Testing for points = ['0:4','3:1','2:1','0:0','0:4','4:1','2:4','4:4','1:2','4:1'] = 
        Testing for points = ['4:4','2:0','0:0','3:2','2:3','1:3','1:4','1:3','0:2','1:0'] = 
        Testing for points = ['2:3','3:3','3:3','4:2','3:1','2:2','1:0','3:3','3:2','1:0'] = 
        Testing for points = ['3:2','2:3','1:1','3:1','3:2','1:2','1:3','2:1','4:4','1:4'] = 
        Testing for points = ['2:3','0:0','3:4','0:0','1:1','3:3','3:3','3:4','0:3','0:3'] = 
        Testing for points = ['1:0','0:4','0:2','2:4','2:1','1:0','0:3','1:1','1:3','2:1'] = 
        Testing for points = ['2:1','4:0','2:1','2:4','1:2','4:2','2:3','1:0','4:4','1:3'] = 
        Testing for points = ['1:3','3:1','0:0','1:0','4:1','3:0','4:4','4:2','0:4','4:0'] = 
        Testing for points = ['0:3','3:1','3:2','3:4','3:0','3:3','0:0','4:1','1:1','2:2'] = 
        Testing for points = ['0:4','4:3','2:1','4:3','4:2','2:3','1:2','1:3','1:3','0:3'] = 
        Testing for points = ['2:3','2:0','4:3','0:2','0:4','1:1','4:0','3:4','1:4','4:2'] = 
        Testing for points = ['1:0','1:2','4:1','2:3','0:3','3:1','3:1','0:4','1:2','2:2'] = 
        Completed in 1ms
        You have passed all of the tests! :)
*/