/*
        7 kyu
        Kooka-Counter
        392093% of 475783 of 2,498dinglemouse1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        A family of kookaburras are in my backyard.

        I can't see them all, but I can hear them!

        How many kookaburras are there?

        Hint
        The trick to counting kookaburras is to listen carefully

        The males sound like HaHaHa...

        The females sound like hahaha...

        And they always alternate male/female

        Examples
        ha = female => 1
        Ha = male => 1
        Haha = male + female => 2
        haHa = female + male => 2
        hahahahaha = female => 1
        hahahahahaHaHaHa = female + male => 2
        HaHaHahahaHaHa = male + female + male => 3
        ^ Kata Note : No validation is necessary; only valid input will be passed :-)
*/
var kookaCounter = function(laughing) {
    let males = 0;
    let females = 0;
    let prev = null;
  
    for (let i = 0; i < laughing.length; i++) {
        if (laughing[i] === 'H') {
            if (prev !== 'H') {
                males++;
                prev = 'H';
            }
        } else if (laughing[i] === 'h') {
            if (prev !== 'h') {
                females++;
                prev = 'h';
            }
        }
    }
    return males + females;
};
  
/*
TEST RESULTS:
        Time: 767ms Passed: 2Failed: 0
        Test Results:
        Solution Tests
        Examples
        Random
        Completed in 6ms
        You have passed all of the tests! :)
*/