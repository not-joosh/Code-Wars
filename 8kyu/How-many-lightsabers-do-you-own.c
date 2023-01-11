/*

        8 kyu
        How many lightsabers do you own?
        1674679% of 3,10213,173 of 28,221kylehill1 Issue Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Inspired by the development team at Vooza, write the function that

        accepts the name of a programmer, and
        returns the number of lightsabers owned by that person.
        The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

        Note: your function should have a default parameter.

        For example(Input --> Output):

        "anyone else" --> 0
        "Zach" --> 18
*/

int HowManyLightsabersDoYouOwn(const char *name) {
  if (strcmp(name, "Zach") == 0) {
    return 18;
  } else {
    return 0;
  }
}

/*
TEST RESULTS:
        Time: 853ms Passed: 34Failed: 0
        Test Results:
        lightsabers_count
        fixed_tests
        (4 of 4 Assertions)
        random_tests
        (30 of 30 Assertions)
        Completed in 11.7472ms
        STDERR
        You have passed all of the tests! :)
*/