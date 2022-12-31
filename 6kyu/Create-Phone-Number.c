/*

6 kyu
Create Phone Number
268454585% of 22,9172,799 of 239,565xDranik
C
TRAINNEXT KATA
Details
Solutions
Forks (42)
Discourse (604)
Collect|
DESCRIPTION:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
    phnum <- "(123) 456-7890" 
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/

char *create_phone_number(char phnum[15], const unsigned char nums[10]) {
    // Iterate through nums and build phone number string
    int i = 0;
    phnum[i++] = '(';
    phnum[i++] = nums[0] + '0';
    phnum[i++] = nums[1] + '0';
    phnum[i++] = nums[2] + '0';
    phnum[i++] = ')';
    phnum[i++] = ' ';
    phnum[i++] = nums[3] + '0';
    phnum[i++] = nums[4] + '0';
    phnum[i++] = nums[5] + '0';
    phnum[i++] = '-';
    phnum[i++] = nums[6] + '0';
    phnum[i++] = nums[7] + '0';
    phnum[i++] = nums[8] + '0';
    phnum[i++] = nums[9] + '0';
    phnum[i] = '\0';
    
    return phnum;
}