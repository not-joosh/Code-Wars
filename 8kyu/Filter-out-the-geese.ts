/*
        8 kyu
        Filter out the geese
        37912992% of 3,703518 of 31,864stevehopkinson1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

        The geese are any strings in the following array, which is pre-populated in your solution:

        ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
        For example, if this array were passed as an argument:

        ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
        Your function would return the following array:

        ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
        The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
export function gooseFilter(birds: string[]): string[] {
    const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird));
}  
/*
TEST RESULTS:
        Time: 3594ms Passed: 100Failed: 0
        Test Results:
        Random tests
        Random test 1
        Random test 2
        Random test 3
        Random test 4
        Random test 5
        Random test 6
        Random test 7
        Random test 8
        Random test 9
        Random test 10
        Random test 11
        Random test 12
        Random test 13
        Random test 14
        Random test 15
        Random test 16
        Random test 17
        Random test 18
        Random test 19
        Random test 20
        Random test 21
        Random test 22
        Random test 23
        Random test 24
        Random test 25
        Random test 26
        Random test 27
        Random test 28
        Random test 29
        Random test 30
        Random test 31
        Random test 32
        Random test 33
        Random test 34
        Random test 35
        Random test 36
        Random test 37
        Random test 38
        Random test 39
        Random test 40
        Random test 41
        Random test 42
        Random test 43
        Random test 44
        Random test 45
        Random test 46
        Random test 47
        Random test 48
        Random test 49
        Random test 50
        Random test 51
        Random test 52
        Random test 53
        Random test 54
        Random test 55
        Random test 56
        Random test 57
        Random test 58
        Random test 59
        Random test 60
        Random test 61
        Random test 62
        Random test 63
        Random test 64
        Random test 65
        Random test 66
        Random test 67
        Random test 68
        Random test 69
        Random test 70
        Random test 71
        Random test 72
        Random test 73
        Random test 74
        Random test 75
        Random test 76
        Random test 77
        Random test 78
        Random test 79
        Random test 80
        Random test 81
        Random test 82
        Random test 83
        Random test 84
        Random test 85
        Random test 86
        Random test 87
        Random test 88
        Random test 89
        Random test 90
        Random test 91
        Random test 92
        Random test 93
        Random test 94
        Random test 95
        Random test 96
        Random test 97
        Random test 98
        Random test 99
        Random test 100
        Completed in 12ms
        You have passed all of the tests! :)
*/