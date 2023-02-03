/*

        Cat years, Dog years
        47810492% of 4,0741,904 of 37,226dinglemouse
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output

        Kata Task
        I have a cat and a dog.

        I got them at the same time as kitten/puppy. That was humanYears years ago.

        Return their respective ages now as [humanYears,catYears,dogYears]

        NOTES:

        humanYears >= 1
        humanYears are whole numbers only
        Cat Years
        15 cat years for first year
        +9 cat years for second year
        +4 cat years for each year after that
        Dog Years
        15 dog years for first year
        +9 dog years for second year
        +5 dog years for each year after that
        References

        http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
        http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
        If you liked this Kata there is another related one here

*/
#include <vector>

std::vector<int> humanYearsCatYearsDogYears(int humanYears) {
    int catYears = 0, dogYears = 0;
    for (int i = 1; i <= humanYears; i++) {
        catYears += (i == 1) ? 15 : (i == 2) ? 9 : 4;
        dogYears += (i == 1) ? 15 : (i == 2) ? 9 : 5;
    }
    return {humanYears, catYears, dogYears};
}
/*
TEST CASES:
        Time: 3016ms Passed: 2Failed: 0
        Test Results:
        HumanYearsCatYearsDogYears
        BasicTests
        RandomTests
        You have passed all of the tests! :)
*/