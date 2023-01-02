/*

        4 kyu
        Next smaller number with the same digits
        150428794% of 1,198228 of 7,559LesRamer1 Issue Reported
        C#
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

        For example:

        nextSmaller(21) == 12
        nextSmaller(531) == 513
        nextSmaller(2071) == 2017
        Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

        nextSmaller(9) == -1
        nextSmaller(111) == -1
        nextSmaller(135) == -1
        nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
        some tests will include very large numbers.
        test data only employs positive integers.
        The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

*/

using System;
using System.Linq;
public class Kata {
    public static long NextSmaller(long n) {
      string numText = n.ToString();
      int splitIndex = GetSplitIndex(numText);
      if(splitIndex < 0) 
        return -1;
      char[] reorder = numText.Substring(splitIndex).ToCharArray();
      int nextLowerIndex = reorder.Select((ch, index)=>(ch, index))
        .Where(pair => pair.Item1 < reorder[0])
        .OrderByDescending(pair => pair.Item1)
        .First().Item2;
      char temp = reorder[0];
      reorder[0] = reorder[nextLowerIndex];
      reorder[nextLowerIndex] = temp;
      string result = String.Join("", numText.Take(splitIndex)) + reorder[0] +
        String.Join("", reorder.Skip(1).OrderByDescending(ch => ch));
      if(result[0] == '0') return -1;
      return Convert.ToInt64(result);
      
    }
    private static int GetSplitIndex(string numText) {
        for(int i = numText.Length - 2; i >= 0; --i) {
          if(numText[i+1] < numText[i])
            return i;
        }
        return -1;
    }
}