/*
        8 kyu
        Are You Playing Banjo?
        49310192% of 7,60410,789 of 97,942MRodalgaard2 Issues Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Create a function which answers the question "Are you playing banjo?".
        If your name starts with the letter "R" or lower case "r", you are playing banjo!

        The function takes a name as its only argument, and returns one of the following strings:

        name + " plays banjo" 
        name + " does not play banjo"
        Names given are always valid strings. 
*/
public class Banjo {
    public static String areYouPlayingBanjo(String name) {
        if(name.indexOf("r") == 0 || name.indexOf("R") == 0) return "" + name + " plays banjo";
        return "" + name + " does not play banjo";
    }
}
/*
TEST RESULTS:
        Time: 2096ms Passed: 3Failed: 0
        Test Results:
        BanjoTest
        randomTests
        PeopleThatDoPlayBanjo
        PeopleThatDontPlayBanjo
        Completed in 22ms
        You have passed all of the tests! :)
*/