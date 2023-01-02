/*

        6 kyu
        Mexican Wave
        139337093% of 4,764650 of 46,874adrian.eyre
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Introduction
        The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

        The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
        Task
        In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
        Rules
        1.  The input string will always be lower case but maybe empty.

        2.  If the character in the string is whitespace then pass over it as if it was an empty seat
        Example
        wave("hello") => {"Hello", "hEllo", "heLlo", "helLo"

*/
#include <string.h>
#include <ctype.h>
void wave(const char *y, char **target) {
    size_t len = strlen(y);
    size_t target_index = 0;
    for (size_t i = 0; i < len; i++) {
        // Skip whitespace characters
        if (y[i] == ' ') { continue; }
        // Create a new string s that is a copy of y, but with the character at index i converted to uppercase
        char s[len + 1];
        strcpy(s, y);
        s[i] = toupper(s[i]);
        // Add s to the target array
        target[target_index] = strdup(s);
        target_index++;
    }
}