/*
        8 kyu
        Get Planet Name By ID
        2538289% of 4,9391,789 of 49,189jhoffner1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        The function is not returning the correct values. Can you figure out why?

        Example (Input --> Output ):

        3 --> "Earth"
*/
std::string get_planet_name(int id){
    switch(id) {
        case 1:
            return "Mercury";
        case 2:
            return "Venus";
        case 3:
            return "Earth";
        case 4:
            return "Mars";
        case 5:
            return "Jupiter";
        case 6:
            return "Saturn";
        case 7:
            return "Uranus";
        case 8:
            return "Neptune";
        default:
            return "";
    }
}
/*
TEST RESULTS:
        Time: 2016ms Passed: 2Failed: 0
        Test Results:
        planet_id_conversion
        some_planets
        all_planets
        You have passed all of the tests! :)
*/