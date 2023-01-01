/*
        6 kyu
        Count the smiley faces!
        145441990% of 6,73871 of 69,296St3f4n8 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

        Rules for a smiling face:

        Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
        A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
        Every smiling face must have a smiling mouth that should be marked with either ) or D
        No additional characters are allowed except for those mentioned.

        Valid smiley face examples: :) :D ;-D :~)
        Invalid smiley faces: ;( :> :} :]

        Example
        countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
        countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
        countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
        Note
        In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

#include <stddef.h>
#include <string.h>

size_t count_smileys(size_t length, const char *const array[length]) {
        size_t count = 0;
        for (size_t i = 0; i < length; i++) {
                const char *face = array[i];
                size_t face_length = strlen(face);
                if (face_length == 2) {
                        if((face[0] == ':' || face[0] == ';') && (face[1] == ')' || face[1] == 'D')) {
                                count++;
                        }
                } 
                else if (face_length == 3) {
                        if ((face[0] == ':' || face[0] == ';') && (face[2] == ')' || face[2] == 'D') && (face[1] == '-' || face[1] == '~')) {
                                count++;
                        }
                }
        }
        return count;
}

