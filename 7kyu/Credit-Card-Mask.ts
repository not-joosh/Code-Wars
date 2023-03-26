/*
        7 kyu
        Credit Card Mask
        147327190% of 15,47413 of 147,736samranjbari2 Issues Reported
        TypeScript
        4.2
        VIM
        EMACS
        Instructions
        Output
        Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

        Your task is to write a function maskify, which changes all but the last four characters into '#'.

        Examples
        maskify("4556364607935616") == "############5616"
        maskify(     "64607935616") ==      "#######5616"
        maskify(               "1") ==                "1"
        maskify(                "") ==                 ""

        // "What was the name of your first pet?"
        maskify("Skippy")                                   == "##ippy"
        maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/
export function maskify(cc: string): string {
    if (cc.length <= 4) {
        return cc;
    } else {
        const maskedChars = cc.slice(0, -4).split("").map(() => "#");
        const lastFourChars = cc.slice(-4);
        return maskedChars.join("") + lastFourChars;
    }
}
/*
TEST RESULTS:
    Time: 3613ms Passed: 2Failed: 0
    Test Results:
    maskify
    should work for some examples
    should work for random examples
    Completed in 5ms
    You have passed all of the tests! :)
*/