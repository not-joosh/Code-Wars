/*
        7 kyu
        Indexed capitalization
        1094591% of 1,1492,433 of 7,046KenKamau2 Issues Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Given a string and an array of integers representing indices, capitalize all letters at the given indices.

        For example:

        capitalize("abcdef",[1,2,5]) = "aBCdeF"
        capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
        The input will be a lowercase string with no spaces and an array of digits.

        Good luck!
*/
function capitalize(s, arr) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(i)) {
            result += s.charAt(i).toUpperCase();
        } else {
            result += s.charAt(i);
        }
    }
    return result;
};
/*
TEST RESULTS:
        Time: 643ms Passed: 106Failed: 0
        Test Results:
        Basic tests
        Test Passed: Value deep equals 'aBCdeF'
        Test Passed: Value deep equals 'aBCdeF'
        Test Passed: Value deep equals 'cOdEwArs'
        Test Passed: Value deep equals 'abRacaDabRA'
        Test Passed: Value deep equals 'codewArriors'
        Test Passed: Value deep equals 'Indexinglessons'
        Completed in 3ms
        Random tests
        Test Passed: Value deep equals 'BCDeFGhijklMNoPQ'
        Test Passed: Value deep equals 'BCdEFGHiJklMNOPQ'
        Test Passed: Value deep equals 'bcDeFGHIJ'
        Test Passed: Value deep equals 'BCDEfGhIjkL'
        Test Passed: Value deep equals 'bcDeFGHIjK'
        Test Passed: Value deep equals 'BCdEFgHIJKlmNopQ'
        Test Passed: Value deep equals 'bCDEFGHiJKlm'
        Test Passed: Value deep equals 'BCDeFghIJKlMN'
        Test Passed: Value deep equals 'BCDEFghIjKlMN'
        Test Passed: Value deep equals 'BCDEfGhIJ'
        Test Passed: Value deep equals 'BcDeFgHIJKlMNOPqRs'
        Test Passed: Value deep equals 'BcDEFgHiJKLmnOPQR'
        Test Passed: Value deep equals 'BCDEFGhIJKlMn'
        Test Passed: Value deep equals 'BcdEFgHIJK'
        Test Passed: Value deep equals 'BCDeFghIJKlmNOPqrS'
        Test Passed: Value deep equals 'bcdEFGhIJKLM'
        Test Passed: Value deep equals 'BcdeFGhIjKlMNOP'
        Test Passed: Value deep equals 'BcdEfGHIjkLMnOPQ'
        Test Passed: Value deep equals 'bCDeFGHiJKLmNOPQR'
        Test Passed: Value deep equals 'BCdEFGhiJk'
        Test Passed: Value deep equals 'BCDEFgHIjKLmNOpqRS'
        Test Passed: Value deep equals 'BCDEFGHiJKlmnOpq'
        Test Passed: Value deep equals 'BCDEfGHIjKlM'
        Test Passed: Value deep equals 'BCdEfgHIJkLMNoPqrS'
        Test Passed: Value deep equals 'BCDefGHIjKlM'
        Test Passed: Value deep equals 'BcDEfgHIJKLMNOPQrS'
        Test Passed: Value deep equals 'BcDEFGHIjklM'
        Test Passed: Value deep equals 'BcdEFGhIjkLMNO'
        Test Passed: Value deep equals 'BcDEfGHiJK'
        Test Passed: Value deep equals 'BCDEfGHiJKLmn'
        Test Passed: Value deep equals 'bCdEFghijKLmNO'
        Test Passed: Value deep equals 'bCdeFGHIjKLmnOP'
        Test Passed: Value deep equals 'BcdeFGHIJklMnO'
        Test Passed: Value deep equals 'BCdeFGHIJKlMN'
        Test Passed: Value deep equals 'BcDeFGhIjKL'
        Test Passed: Value deep equals 'BCdEFGhiJKL'
        Test Passed: Value deep equals 'bCDeFGHIJkL'
        Test Passed: Value deep equals 'BcdeFGHIJklmNO'
        Test Passed: Value deep equals 'bCDEFGHIjkLmNop'
        Test Passed: Value deep equals 'BCdeFGhIjKLmN'
        Test Passed: Value deep equals 'BCdEfghijK'
        Test Passed: Value deep equals 'BCDEFgHIjkLMnoPq'
        Test Passed: Value deep equals 'BCDeFghiJKLMN'
        Test Passed: Value deep equals 'BCdEFgHIJKL'
        Test Passed: Value deep equals 'bcDEFGHIJKLMNO'
        Test Passed: Value deep equals 'BCDeFGHIjKLmnOpQrs'
        Test Passed: Value deep equals 'BCDEFGHIjkLM'
        Test Passed: Value deep equals 'BCdeFgHIJ'
        Test Passed: Value deep equals 'BCDEFGHiJ'
        Test Passed: Value deep equals 'BCDEfGhijKLM'
        Test Passed: Value deep equals 'bCdEFGHIJKLmN'
        Test Passed: Value deep equals 'BcDEFghIjKL'
        Test Passed: Value deep equals 'BcdeFGHIJKlMNO'
        Test Passed: Value deep equals 'bCDeFGhIJKlMN'
        Test Passed: Value deep equals 'BCDEFGHIjkLMNOPQRs'
        Test Passed: Value deep equals 'BcDeFGhIJ'
        Test Passed: Value deep equals 'BcDeFGHIjkLm'
        Test Passed: Value deep equals 'bCdeFgHIJKLm'
        Test Passed: Value deep equals 'BCdEFGHiJK'
        Test Passed: Value deep equals 'BCdeFgHiJkLmNoPqrs'
        Test Passed: Value deep equals 'BCDEfGhIJKLmNoPq'
        Test Passed: Value deep equals 'bCDEfgHIJklM'
        Test Passed: Value deep equals 'BCDEFgHIJkLMNoPQ'
        Test Passed: Value deep equals 'BCDEfGhiJKLmn'
        Test Passed: Value deep equals 'BCDEFgHiJkLMNOp'
        Test Passed: Value deep equals 'bCdeFGHiJ'
        Test Passed: Value deep equals 'BCdeFgHIj'
        Test Passed: Value deep equals 'BCdeFGhIjKLMNoPQ'
        Test Passed: Value deep equals 'bCdeFgHIJKLmnOP'
        Test Passed: Value deep equals 'BCdEfGHIJKLmNOPq'
        Test Passed: Value deep equals 'BCDefgHIJKL'
        Test Passed: Value deep equals 'BcDEFGHiJKlMn'
        Test Passed: Value deep equals 'bCDEFGHIjKlmnOP'
        Test Passed: Value deep equals 'bCdEFgHiJk'
        Test Passed: Value deep equals 'bcDeFgHIJkL'
        Test Passed: Value deep equals 'bcDEFGHIJKLMNoP'
        Test Passed: Value deep equals 'bCDefghiJklMNOPQR'
        Test Passed: Value deep equals 'bCDEFGHiJkLMnOPQrS'
        Test Passed: Value deep equals 'BcDeFGHIjKLmNoPQ'
        Test Passed: Value deep equals 'bcDEFGHiJkLMnOpQ'
        Test Passed: Value deep equals 'BCDefGHIJ'
        Test Passed: Value deep equals 'BCDEFGHiJKlMnOPq'
        Test Passed: Value deep equals 'BCDEFGHIjkLm'
        Test Passed: Value deep equals 'BCDEfgHiJkL'
        Test Passed: Value deep equals 'bCdEFGHIJK'
        Test Passed: Value deep equals 'BCDEFgHIjKLMNoPqR'
        Test Passed: Value deep equals 'bCdEfgHIJKlmNOPQRS'
        Test Passed: Value deep equals 'BCDeFGhIj'
        Test Passed: Value deep equals 'bcDeFGhIJKLMnopQrS'
        Test Passed: Value deep equals 'BCDeFghIjKLm'
        Test Passed: Value deep equals 'BCDefGHIJKLMno'
        Test Passed: Value deep equals 'BCDEFGHiJklmno'
        Test Passed: Value deep equals 'BcDEfGHIJkL'
        Test Passed: Value deep equals 'bCDEFGHIJkLMn'
        Test Passed: Value deep equals 'BcDeFGhiJKLMNOPQ'
        Test Passed: Value deep equals 'bcDEFGHIJKLMNOpQ'
        Test Passed: Value deep equals 'bCDEFgHiJKLMN'
        Test Passed: Value deep equals 'bCDEFGHIjKlMNoPq'
        Test Passed: Value deep equals 'BCdEfGHIJKlmnOp'
        Test Passed: Value deep equals 'BcDEfgHIJKL'
        Completed in 13ms
        You have passed all of the tests! :)
*/