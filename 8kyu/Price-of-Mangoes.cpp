/*
                8 kyu
                Price of Mangoes
                1452388% of 1,88716 of 12,351AartiK1
                C++
                Clang 8 C++17
                VIM
                EMACS
                Instructions
                Output
                There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

                Examples
                mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
                mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
                mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
                mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/
int mango(int quantity, int price) {
    int free_mangoes = quantity / 3;
    int paid_mangoes = quantity - free_mangoes;
    return paid_mangoes * price;
}
/*
TEST RESULTS:
                Time: 2491ms Passed: 3Failed: 0
                Test Results:
                ExmapleTests
                BasicTest
                ExtendedTests
                Tests
                RandomTests
                You have passed all of the tests! :)
*/
