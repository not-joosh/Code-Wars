/*
        8 kyu
        Name Shuffler
        1947593% of 3,00714,371 of 28,187debri
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Write a function that returns a string in which firstname is swapped with last name.

        Example(Input --> Output)

        "john McClane" --> "McClane john"
*/
function nameShuffler(str){
    var words = str.split(" ");
    [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]];
    return words.join(" ");
}
/*
TEST RESULTS:
        Time: 783ms Passed: 40Failed: 0
        Test Results:
        Basic tests
        Testing for Augustus Schillinger
        Testing for Simon Keller
        Testing for Cyril Hill
        Testing for Cyril Said
        Testing for Chris Adebisi
        Testing for Ryan Schillinger
        Testing for Vernon Schillinger
        Testing for Simon O'Reily
        Testing for Vernon Keller
        Testing for Vernon Hill
        Testing for Chris Rebadow
        Testing for Vernon Said
        Testing for Simon Said
        Testing for Kareem Adebisi
        Testing for Bob O'Reily
        Testing for Chris Beecher
        Testing for Ryan Alvarez
        Testing for Miguel Beecher
        Testing for Miguel O'Reily
        Testing for Tobias Schillinger
        Testing for Cyril Alvarez
        Testing for Tim Keller
        Testing for Simon Adebisi
        Testing for Kareem O'Reily
        Testing for Bob McManus
        Testing for Augustus McManus
        Testing for Augustus Beecher
        Testing for Vernon O'Reily
        Testing for Bob Keller
        Testing for Bob Rebadow
        Testing for Kareem Hill
        Testing for Ryan Rebadow
        Testing for Miguel Keller
        Testing for Ryan Adebisi
        Testing for Bob Rebadow
        Testing for Miguel O'Reily
        Testing for Chris Hill
        Testing for Miguel Keller
        Testing for Ryan Keller
        Testing for Miguel McManus
        Completed in 2ms
        You have passed all of the tests! :)
*/