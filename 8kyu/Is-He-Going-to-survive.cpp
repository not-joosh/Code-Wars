/*
        8 kyu
        Is he gonna survive?
        42510591% of 7,0465,032 of 92,924MMortaga1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

        Return true if yes, false otherwise :)
*/
bool hero(int bullets, int dragons) {
  return bullets >= dragons * 2;
}
/*
TEST RESULTS:
        Time: 2379ms Passed: 2Failed: 0
        Test Results:
        Fixed_tests
        Tests
        Random_tests
        Tests
        You have passed all of the tests! :)
*/