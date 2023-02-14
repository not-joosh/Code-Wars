/*

        8 kyu
        Keep up the hoop
        1224888% of 4,8863,369 of 45,931Tam Borine4 Issues Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

        Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

        If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
        If he doesn't get 10 hoops, return the string "Keep at it until you get it".

*/
public class HelpAlex{
    public static String hoopCount(int n){
        if(n >= 10)return "Great, now move on to tricks";
        return "Keep at it until you get it";
    }
}
/*
TEST RESULTS:
        Time: 2131ms Passed: 2Failed: 0
        Test Results:
        HoopCountTest
        testHoopCount
        RandomTest
        Completed in 25ms
        You have passed all of the tests! :)
*/