/*
        8 kyu
        Holiday VIII - Duty Free
        158-385% of 2,909160 of 23,148PG19 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

        You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

        For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

        All inputs will be integers. Please return an integer. Round down.
*/
export function dutyFree(normPrice: number, discount: number, hol: number): number {
    const savings = Math.floor(normPrice * discount / 100);
    const numBottles = Math.floor(hol / (normPrice * discount / 100));
    return numBottles;
}
  
/*
TEST RESULTS:
        Time: 3492ms Passed: 2Failed: 0
        Test Results:
        Holiday VIII - Duty Free
        Fixed tests
        Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/