/*
        7 kyu
        Looking for a benefactor
        1634379% of 1,201529 of 7,968g9641 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

        if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

        Could you help him?

        Task
        The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

        Should the last donation be a non positive number (<= 0) John wants us:

        to return:

        Nothing in Haskell, Elm
        None in F#, Ocaml, Rust, Scala
        -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
        or to throw an error (some examples for such a case):

        IllegalArgumentException() in Clojure, Java
        ArgumentException() in C#
        echo ERROR in Shell
        argument-error in Racket
        std::invalid_argument in C++
        ValueError in Python
        So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

        Notes:
        all donations and navg are numbers (integers or floats), arr can be empty.
        See examples below and "Sample Tests" to see which return is to be done.
        new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
        new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
        should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
        or return `-1` or ERROR or Nothing or None depending on the language.
*/
#include <vector>
#include <stdexcept>
#include <numeric>
#include <cmath>

class NewAverage {
    public:
    static long long newAvg(std::vector<double> &arr, double navg) {
        double current_avg = std::accumulate(arr.begin(), arr.end(), 0.0) / arr.size();
        if (navg <= current_avg) {
            throw std::invalid_argument("Invalid input: target average must be greater than current average.");
        }
        double target_sum = navg * (arr.size() + 1);
        double next_donation = std::ceil(target_sum - std::accumulate(arr.begin(), arr.end(), 0.0));
        if (next_donation <= 0) {
            throw std::invalid_argument("Invalid input: next donation must be positive.");
        }
        return static_cast<long long>(next_donation);
    }
};
/*
TEST RESULTS:
        Time: 2624ms Passed: 3Failed: 0
        Test Results:
        newavg_basic_tests
        should_work
        throw_error
        randomTests
        You have passed all of the tests! :)
*/