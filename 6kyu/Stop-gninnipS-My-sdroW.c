// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
//  do not allocate memory for return string
//  assign the value to the pointer "result"

void spin_words(const char *sentence, char *result)
{
    const char *p = sentence;
    char *q = result;

    while (*p){
        int word_length = 0;
        while (*p && *p != ' '){
            p++;
            word_length++;
        }
        // Reverse the word if its length is 5 or more
        if (word_length >= 5){
            for (int i = word_length - 1; i >= 0; i--)
                *q++ = *(p - word_length + i);
        }
        else
        {
            for (int i = 0; i < word_length; i++)
                *q++ = *(p - word_length + i);
        }
        if (*p == ' ') {
            *q++ = *p++;
        }
    }
    *q = '\0';
}
