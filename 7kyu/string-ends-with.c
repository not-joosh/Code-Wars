// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
#include <stdbool.h>
#include <string.h>
bool solution(const char *string, const char *ending) {
    int lenStr = strlen(string);
    int lenEnd = strlen(ending);
    if(lenEnd > lenStr) return false;
    return strcmp(string + lenStr - lenEnd, ending) == 0;
}