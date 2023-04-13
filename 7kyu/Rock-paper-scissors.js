/*
                7 kyu
                Rock Paper Scissors Lizard Spock
                762391% of 3901,396 of 2,753corsmond
                JavaScript
                Node v18.x
                VIM
                EMACS
                Instructions
                Output
                In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

                Scissors cuts Paper
                Paper covers Rock
                Rock crushes Lizard
                Lizard poisons Spock
                Spock smashes Scissors
                Scissors decapitates Lizard
                Lizard eats Paper
                Paper disproves Spock
                Spock vaporizes Rock
                Rock crushes Scissors
                Task:
                Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

                Inputs
                Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/
function rpsls(pl1, pl2) {
        const rules = {
                rock: { beats: ['scissors', 'lizard'], verb: 'crushes' },
                paper: { beats: ['rock', 'spock'], verb: 'covers' },
                scissors: { beats: ['paper', 'lizard'], verb: 'cuts' },
                lizard: { beats: ['paper', 'spock'], verb: 'poisons' },
                spock: { beats: ['scissors', 'rock'], verb: 'smashes' },
        };
        
        if (pl1 === pl2) {
                return 'Draw!';
        } else if (rules[pl1].beats.includes(pl2)) {
                return 'Player 1 Won!';
        } else {
                return 'Player 2 Won!';
        }
}
/*
TEST RESULTS:
                Time: 691ms Passed: 4Failed: 0
                Test Results:
                rock paper scissors lizard spock
                player 1 wins
                player 2 wins
                draw
                Random test
                Completed in 1ms
                You have passed all of the tests! :)
*/