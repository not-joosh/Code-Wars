/*
        8 kyu
        DNA to RNA Conversion
        69617291% of 7,0611,232 of 91,915torret3 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

        Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

        Create a function which translates a given DNA string into RNA.

        For example:

        "GCAT"  =>  "GCAU"
        The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/
export function DNAtoRNA(dna: string): string {
    return dna.replace(/T/g, "U");
};
/*
TEST RESULT:
        Time: 3090ms Passed: 2Failed: 0
        Test Results:
        Sample Test Cases
        Should return a string
        Random Test Cases
        You have passed all of the tests! :)
*/