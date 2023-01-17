/*

        6 kyu
        Who likes it?
        390471186% of 23,08520,714 of 246,168BattleRattle2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

        Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

        []                                -->  "no one likes this"
        ["Peter"]                         -->  "Peter likes this"
        ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
        ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
        ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
        Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

std::string likes(const std::vector<std::string> &names) {
    int n = names.size();
    if (n == 0) {
        return "no one likes this";
    } else if (n == 1) {
        return names[0] + " likes this";
    } else if (n == 2) {
        return names[0] + " and " + names[1] + " like this";
    } else if (n == 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
        return names[0] + ", " + names[1] + " and " + std::to_string(n - 2) + " others like this";
    }
}
/*

TEST RESULTS:
        Time: 2890ms Passed: 5Failed: 0
        Test Results:
        static_tests
        should_return_correct_text
        random_single_name
        random_pair_of_names
        random_set_of_3_names
        random_set_of_4_or_more_names
        You have passed all of the tests! :)

*/
