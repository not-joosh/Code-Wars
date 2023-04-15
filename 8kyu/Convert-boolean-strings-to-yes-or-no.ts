/*
        8 kyu
        Convert boolean values to strings 'Yes' or 'No'.
        85823889% of 17,6143,018 of 239,739weavermedia2 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
export const boolToWord = (bool: boolean): string => {
    if(bool) return 'Yes';
    else return 'No'
};
/*
TEST RESULTS:
        Time: 2780ms Passed: 2Failed: 0
        Test Results:
        boolToWord
        Sample tests
        Random tests
        Completed in 1ms
        You have passed all of the tests! :)
*/