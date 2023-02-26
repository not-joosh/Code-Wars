/*
        4 kyu
        Memoized Log Cutting
        1243392% of 18174 of 873AlejandorLazaro
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        CLEAR CUTTER'S NEEDS YOUR HELP!
        The logging company Clear Cutter's makes its money by optimizing the price-to-length of each log they cut before selling them. An example of one of their price tables is included:

        # So a price table p
        p = [ 0,  1,  5,  8,  9, 10]

        # Can be imagined as:
        # length i | 0  1  2  3  4  5 *in feet*
        # price pi | 0  1  5  8  9 10 *in money*
        They hired an intern last summer to create a recursive function for them to easily calculate the most profitable price for a log of length n using price table p as follows:

        def cut_log(p, n):
            if (n == 0):
                return 0
            q = -1
            for i in range(1, n+1):
                q = max(q, p[i] + cut_log(p, n-i))
            return q
        An example of the working code:

        cut_log(p, 5) # => 13
        # 5ft = $10, BUT 2ft + 3ft = 5ft -> $5 + $8 = $13 which is greater in value
        However, their senior software engineer realized that the number of recursive calls in the function gives it an awful running time of 2^n (as this function iterates through ALL 2^n-1 possibilities for a log of length n).

        Having discovered this problem just as you've arrived for your internship, he responsibly delegates the issue to you.

        Using the power of Stack Overflow and Google, he wants you to create a solution that runs in Θ(n^2) time so that it doesn't take 5 hours to calculate the optimal price for a log of size 50. (He also suggests to research the problem using the keywords in the tags)

        (Be aware that if your algorithm is not efficient, it will attempt to look at 2^49 = 562949953421312 nodes instead of 49^2 = 2401... The solution will automatically fail if it takes longer than 6 seconds... which occurs at right around Log 23)
*/
int cut_log_helper(const std::vector<int>& p, int n, std::vector<int>& memo) {
    if (n == 0) {
        return 0;
    }
    if (memo[n] != -1) {
        return memo[n];
    }
    int q = -1;
    for (int i = 1; i <= n; i++) {
        q = std::max(q, p[i] + cut_log_helper(p, n - i, memo));
    }
    memo[n] = q;
    return q;
}

int cut_log(const std::vector<int>& p, int n) {
    std::vector<int> memo(n + 1, -1);
    return cut_log_helper(p, n, memo);
}
/*
TEST RESULTS:
        Time: 3062ms Passed: 3Failed: 0
        Test Results:
        Example_Log
        Sample_Test_Cases
        Hidden_Test_Cases
        Random_Test
        Ten_Random_Test
        You have passed all of the tests! :)
*/
