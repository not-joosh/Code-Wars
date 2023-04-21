/*
        8 kyu
        Grasshopper - Check for factor
        2066391% of 4,520593 of 50,662danleavitt0
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        This function should test if the factor is a factor of base.

        Return true if it is a factor or false if it is not.

        About factors
        Factors are numbers you can multiply together to get another number.

        2 and 3 are factors of 6 because: 2 * 3 = 6

        You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
        You can use the mod operator (%) in most languages to check for a remainder
        For example 2 is not a factor of 7 because: 7 % 2 = 1

        Note: base is a non-negative number, factor is a positive number.
*/
export function checkForFactor(base: number, factor: number) {
    return base % factor === 0;
};
/*
TEST RESULTS:
        Time: 3035ms Passed: 108Failed: 0
        Test Results:
        Basic tests
        checkForFactor(10, 2)
        checkForFactor(63, 7)
        checkForFactor(2450, 5)
        checkForFactor(24612, 3)
        checkForFactor(9, 2)
        checkForFactor(653, 7)
        checkForFactor(2453, 5)
        checkForFactor(24617, 3)
        Completed in 1ms
        Random tests
        checkForFactor(7189, 13)
        checkForFactor(7386, 7)
        checkForFactor(4636, 7)
        checkForFactor(8106, 16)
        checkForFactor(7509, 5)
        checkForFactor(1861, 2)
        checkForFactor(2608, 14)
        checkForFactor(7052, 3)
        checkForFactor(3286, 19)
        checkForFactor(4475, 8)
        checkForFactor(6985, 14)
        checkForFactor(1468, 17)
        checkForFactor(1128, 16)
        checkForFactor(7567, 16)
        checkForFactor(9496, 2)
        checkForFactor(7229, 16)
        checkForFactor(2917, 17)
        checkForFactor(3037, 12)
        checkForFactor(7196, 1)
        checkForFactor(9719, 19)
        checkForFactor(9851, 20)
        checkForFactor(3101, 11)
        checkForFactor(7662, 14)
        checkForFactor(2074, 15)
        checkForFactor(3230, 10)
        checkForFactor(1391, 18)
        checkForFactor(489, 9)
        checkForFactor(1000, 18)
        checkForFactor(3374, 2)
        checkForFactor(4261, 19)
        checkForFactor(4796, 4)
        checkForFactor(6088, 2)
        checkForFactor(1653, 7)
        checkForFactor(1490, 11)
        checkForFactor(597, 15)
        checkForFactor(9708, 7)
        checkForFactor(83, 10)
        checkForFactor(7682, 18)
        checkForFactor(9863, 16)
        checkForFactor(5486, 11)
        checkForFactor(8372, 8)
        checkForFactor(6430, 19)
        checkForFactor(9602, 14)
        checkForFactor(6708, 10)
        checkForFactor(2703, 1)
        checkForFactor(4318, 4)
        checkForFactor(4853, 11)
        checkForFactor(3180, 10)
        checkForFactor(410, 9)
        checkForFactor(1905, 20)
        checkForFactor(6849, 20)
        checkForFactor(1614, 17)
        checkForFactor(8963, 12)
        checkForFactor(104, 18)
        checkForFactor(4851, 5)
        checkForFactor(5731, 20)
        checkForFactor(6034, 4)
        checkForFactor(8214, 14)
        checkForFactor(9252, 8)
        checkForFactor(5609, 19)
        checkForFactor(1895, 9)
        checkForFactor(1723, 17)
        checkForFactor(8398, 9)
        checkForFactor(4528, 10)
        checkForFactor(9466, 17)
        checkForFactor(1623, 19)
        checkForFactor(8493, 3)
        checkForFactor(9422, 6)
        checkForFactor(9899, 11)
        checkForFactor(5207, 15)
        checkForFactor(6158, 11)
        checkForFactor(3691, 2)
        checkForFactor(9627, 12)
        checkForFactor(2014, 5)
        checkForFactor(1648, 19)
        checkForFactor(7395, 17)
        checkForFactor(8225, 16)
        checkForFactor(2258, 11)
        checkForFactor(574, 14)
        checkForFactor(3828, 12)
        checkForFactor(1886, 5)
        checkForFactor(6527, 19)
        checkForFactor(526, 4)
        checkForFactor(3052, 7)
        checkForFactor(4917, 9)
        checkForFactor(7872, 8)
        checkForFactor(3311, 17)
        checkForFactor(2898, 1)
        checkForFactor(6854, 17)
        checkForFactor(2283, 3)
        checkForFactor(5443, 14)
        checkForFactor(5819, 7)
        checkForFactor(8664, 18)
        checkForFactor(866, 13)
        checkForFactor(5901, 13)
        checkForFactor(8366, 2)
        checkForFactor(9722, 13)
        checkForFactor(204, 11)
        checkForFactor(1170, 5)
        checkForFactor(2697, 5)
        Completed in 1ms
        You have passed all of the tests! :)
*/