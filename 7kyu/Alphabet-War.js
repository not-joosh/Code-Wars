/*
        7 kyu
        Alphabet war
        2629292% of 1,9354,409 of 13,732dcieslak
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Introduction
        There is a war and nobody knows - the alphabet war!
        There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

        Task
        Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

        The left side letters and their power:

        w - 4
        p - 3
        b - 2
        s - 1
        The right side letters and their power:

        m - 4
        q - 3
        d - 2
        z - 1
        The other letters don't have power and are only victims.

        Example
        alphabetWar("z");        //=> Right side wins!
        alphabetWar("zdqmwpbs"); //=> Let's fight again!
        alphabetWar("zzzzs");    //=> Right side wins!
        alphabetWar("wwwwwwz");  //=> Left side wins!
*/
function alphabetWar(fight) {
    let leftScore = 0;
    let rightScore = 0;
  
    for (let i = 0; i < fight.length; i++) {
        let letter = fight[i];
    
        switch (letter) {
            case 'w':
                leftScore += 4;
                break;
            case 'p':
                leftScore += 3;
                break;
            case 'b':
                leftScore += 2;
                break;
            case 's':
                leftScore += 1;
                break;
            case 'm':
                rightScore += 4;
                break;
            case 'q':
                rightScore += 3;
                break;
            case 'd':
                rightScore += 2;
                break;
            case 'z':
                rightScore += 1;
                break;
        }
    }
    if (leftScore > rightScore) {
        return "Left side wins!";
    } else if (rightScore > leftScore) {
        return "Right side wins!";
    } else {
        return "Let's fight again!";
    }
}
/*
TEST RESULTS:
        Time: 821ms Passed: 2Failed: 0
        Test Results:
        Alphabet war!
        Basic Tests
        Random Tests
        Completed in 12ms
        You have passed all of the tests! :)
*/