/*

        8 kyu
        Reversed Words
        54116792% of 6,85884 of 64,941jhoffner2 Issues Reported
        Java
        17
        VIM
        EMACS
        Instructions
        Output
        Complete the solution so that it reverses all of the words within the string passed in.

        Words are separated by exactly one space and there are no leading or trailing spaces.

        Example(Input --> Output):

        "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

public class ReverseWords{
    public static String reverseWords(String str){
        String[] words = str.split(" ");
        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]).append(" ");
        }
        return sb.toString().trim();
    }
}

/*
TEST RESULTS:
        Time: 2584ms Passed: 2Failed: 0
        Test Results:
        SolutionTest
        randomTests()
        fixedTests()
        Completed in 68ms
        You have passed all of the tests! :)
*/
/*
 * ANOTHER SOLUTION
 */
public class ReverseWords{
    public static String reverseWords(String str){
        char[] s = str.toCharArray();
        int i = 0, j = 0;
        while (j <= str.length()) {
            if (j == str.length() || s[j] == ' ') {
                reverse(s, i, j - 1);
                i = j + 1;
            }
            j++;
        }
        reverse(s, 0, str.length() - 1);
        return new String(s);
    }
    private static void reverse(char[] s, int start, int end) {
        while (start < end) {
            char temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    }
}
